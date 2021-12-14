/* eslint-disable no-param-reassign */
// import { createSlice } from '@reduxjs/toolkit'
import farmsConfig from 'config/constants/farms';
import BigNumber from 'bignumber.js';
import Web3 from 'web3';
import {
	Reducer,
	ReducerState,
	ReducerStateWithoutAction,
	useCallback,
	useEffect,
	useReducer,
	useRef,
	useState,
} from 'react';
import { Farm, FarmsState } from 'state/types';

import { QuoteToken, Address } from 'config/constants/types';
import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK, CAKE_POOL_PID } from 'config';
import { getWadAddress } from 'farms-utils/addressHelpers';
import { getBalanceNumber } from 'farms-utils/formatBalance';
import { useActiveWeb3React } from 'hooks';
import { getBep20Contract } from 'farms-utils/contractHelpers';
import { useWeb3React } from '@web3-react/core';
import { getWeb3NoAccount } from 'farms-utils/web3';
import {
	fetchFarmUserEarnings,
	fetchFarmUserAllowances,
	fetchFarmUserTokenBalances,
	fetchFarmUserStakedBalances,
} from './fetchFarmUser';
import fetchFarms from './fetchFarms';

const ZERO = new BigNumber(0);

const initialState: FarmsState = { data: [...farmsConfig] };

interface FarmWithStakedValue extends Farm {
	apy?: BigNumber;
	liquidity?: BigNumber;
}

interface AprProps {
	value: string;
	multiplier: string;
	lpLabel: string;
	quoteTokenAdresses: Address;
	quoteTokenSymbol: QuoteToken;
	tokenAddresses: Address;
	cakePrice: BigNumber;
	originalValue: BigNumber;
	hideButton?: boolean;
}

interface EarnedProps {
	earnings: number;
	pid: number;
}
interface FarmProps {
	label: string;
	pid: number;
	multiplier: string;
}
interface MultiplierProps {
	multiplier: string;
}

interface LiquidityProps {
	liquidity: number;
}

interface FarmCalcDetail {
	apr: AprProps;
	farm: FarmProps;
	earned: EarnedProps;
	multiplier: MultiplierProps;
	liquidity: LiquidityProps;
	details: FarmWithStakedValue;
}

type Action = { type: 'userData'; arrayOfUserDataObjects } | { type: 'publicData'; publicFarms: any };

/**
 * Provides a web3 instance using the provider provided by useWallet
 * with a fallback of an httpProver
 * Recreate web3 instance only if the provider change
 */
export const useWeb3 = () => {
	const { library } = useWeb3React();
	const refEth = useRef(library);
	const [web3, setweb3] = useState(library ? new Web3(library) : getWeb3NoAccount());

	useEffect(() => {
		if (library !== refEth.current) {
			setweb3(library ? new Web3(library) : getWeb3NoAccount());
			refEth.current = library;
		}
	}, [library]);

	return web3;
};

export const useTokenBalance = (tokenAddress: string) => {
	const [balance, setBalance] = useState(new BigNumber(0));
	const { account } = useWeb3React();
	const web3 = useWeb3();

	useEffect(() => {
		const fetchBalance = async () => {
			const contract = getBep20Contract(tokenAddress);
			const res = await contract.methods.balanceOf(account).call();
			setBalance(new BigNumber(res));
		};

		if (account) {
			fetchBalance();
		}
	}, [account, tokenAddress, web3]);

	return balance;
};

export const useFetchFarms = () => {
	const [farmsState, dispatch] = useReducer(function reducer(state: FarmsState, action: Action): FarmsState {
		if (action.type === 'publicData') {
			state.data = state.data.map((farm) => {
				const liveFarmData = action.publicFarms.find((f) => f.pid === farm.pid);
				return { ...farm, ...liveFarmData };
			});
		} else if (action.type === 'userData') {
			const { arrayOfUserDataObjects } = action;
			arrayOfUserDataObjects.forEach((userDataEl) => {
				const { index } = userDataEl;
				state.data[index] = { ...state.data[index], userData: userDataEl };
			});
		}
		return state;
	}, initialState);

	useEffect(() => {
		fetchFarms().then((publicFarms) => {
			dispatch({ type: 'publicData', publicFarms });
		});
	}, []);

	const fetchUserDataInFarms = useCallback(async (account) => {
		const [userFarmAllowances, userFarmTokenBalances, userStakedBalances, userFarmEarnings] = await Promise.all([
			fetchFarmUserAllowances(account),
			fetchFarmUserTokenBalances(account),
			fetchFarmUserStakedBalances(account),
			fetchFarmUserEarnings(account),
		]);
		const arrayOfUserDataObjects = userFarmAllowances.map((farmAllowance, index) => {
			return {
				index,
				allowance: userFarmAllowances[index],
				tokenBalance: userFarmTokenBalances[index],
				stakedBalance: userStakedBalances[index],
				earnings: userFarmEarnings[index],
			};
		});
		dispatch({ arrayOfUserDataObjects, type: 'userData' });
	}, []);

	const bnbBUSDFarm = farmsState.data.find((f) => f.pid === 2); // BUSD-BNB LP
	const bnbPriceUSD = bnbBUSDFarm?.tokenPriceVsQuote ? new BigNumber(1).div(bnbBUSDFarm.tokenPriceVsQuote) : ZERO;

	const wadBNBFarm = farmsState.data.find((f) => f.pid === CAKE_POOL_PID); // WAD-BNB LP
	const wadPriceBNB = new BigNumber(wadBNBFarm?.tokenPriceVsQuote || 0);

	const wadPriceUSD =
		wadBNBFarm && wadBNBFarm.tokenPriceVsQuote ? bnbPriceUSD.times(wadBNBFarm.tokenPriceVsQuote) : ZERO;

	return { fetchUserDataInFarms, farmData: farmsState.data, bnbPriceUSD, wadPriceUSD, wadPriceBNB };
};

export const useUserDataInFarm = () => {
	const { account } = useActiveWeb3React();
	const {
		farmData: farmsLP,
		fetchUserDataInFarms,
		bnbPriceUSD: bnbPrice,
		wadPriceUSD: cakePrice,
		wadPriceBNB: cakePriceVsBNB,
	} = useFetchFarms();

	useEffect(() => {
		if (account) {
			fetchUserDataInFarms(account);
		}
	}, [account, fetchUserDataInFarms]);

	const activeFarms = farmsLP.filter((farm) => farm.pid !== 0);
	// const inactiveFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier === '0X')
	const tokenFarms = farmsLP.filter((farm) => farm.pid === 0);

	const stakedOnlyFarms = activeFarms.filter(
		(farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
	);

	const farmsList = (filteredFarms): FarmWithStakedValue[] => {
		const farmsToDisplayWithAPY: FarmWithStakedValue[] = filteredFarms.map((farm) => {
			if (!farm.tokenAmount || !farm.lpTotalInQuoteToken) {
				return farm;
			}

			const cakeRewardPerBlock = CAKE_PER_BLOCK.times(farm.poolWeight);
			const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR);

			// cakePriceInQuote * cakeRewardPerYear / lpTotalInQuoteToken
			let apy = cakePriceVsBNB.times(cakeRewardPerYear).div(farm.lpTotalInQuoteToken);

			if (farm.quoteTokenSymbol === QuoteToken.BUSD || farm.quoteTokenSymbol === QuoteToken.UST) {
				apy = cakePriceVsBNB.times(cakeRewardPerYear).div(farm.lpTotalInQuoteToken).times(bnbPrice);
				// } else if (farm.quoteTokenSymbol === QuoteToken.ETH) {
				//   apy = cakePrice.div(ethPriceUsd).times(cakeRewardPerYear).div(farm.lpTotalInQuoteToken)
			} else if (farm.quoteTokenSymbol === QuoteToken.CAKE) {
				apy = cakeRewardPerYear.div(farm.lpTotalInQuoteToken);
			} else if (farm.dual) {
				const cakeApy =
					farm &&
					cakePriceVsBNB.times(cakeRewardPerBlock).times(BLOCKS_PER_YEAR).div(farm.lpTotalInQuoteToken);
				const dualApy =
					farm.tokenPriceVsQuote &&
					new BigNumber(farm.tokenPriceVsQuote)
						.times(farm.dual.rewardPerBlock)
						.times(BLOCKS_PER_YEAR)
						.div(farm.lpTotalInQuoteToken);

				apy = cakeApy && dualApy && cakeApy.plus(dualApy);
			}

			let liquidity = farm.lpTotalInQuoteToken;

			if (!farm.lpTotalInQuoteToken) {
				liquidity = null;
			}
			if (farm.quoteTokenSymbol === QuoteToken.BNB) {
				liquidity = bnbPrice.times(farm.lpTotalInQuoteToken);
			}
			if (farm.quoteTokenSymbol === QuoteToken.CAKE) {
				liquidity = cakePrice.times(farm.lpTotalInQuoteToken);
			}

			// if (farm.quoteTokenSymbol === QuoteToken.ETH) {
			//   liquidity = ethPriceUsd.times(farm.lpTotalInQuoteToken)
			// }

			return { ...farm, apy, liquidity };
		});
		return farmsToDisplayWithAPY;
	};

	const tokenStakedFarmWithAPY = farmsList(tokenFarms);
	const lpStakedFarmWithAPY = farmsList(stakedOnlyFarms);

	const farmCalcMapper = (farm) => {
		const { quoteTokenAdresses, quoteTokenSymbol, tokenAddresses } = farm;
		const lpLabel = farm.lpSymbol && farm.lpSymbol.split(' ')[0].toUpperCase().replace('PANCAKE', '');

		const row: FarmCalcDetail = {
			apr: {
				value:
					farm.apy &&
					farm.apy.times(new BigNumber(100)).toNumber().toLocaleString('en-US', { maximumFractionDigits: 2 }),
				multiplier: farm.multiplier,
				lpLabel,
				quoteTokenAdresses,
				quoteTokenSymbol,
				tokenAddresses,
				cakePrice,
				originalValue: farm.apy,
			},
			farm: {
				label: lpLabel,
				pid: farm.pid,
				multiplier: farm.multiplier,
			},
			earned: {
				earnings: farm?.userData?.earnings ? getBalanceNumber(new BigNumber(farm.userData.earnings)) : 0,
				pid: farm.pid,
			},
			liquidity: {
				liquidity: farm.liquidity,
			},
			multiplier: {
				multiplier: farm.multiplier,
			},
			details: farm,
		};

		return row;
	};
	const calculatedStakedData = lpStakedFarmWithAPY.map(farmCalcMapper);
	const calculatedTokenData = tokenStakedFarmWithAPY.map(farmCalcMapper);

	const sumEarning = [...calculatedStakedData, ...calculatedTokenData].reduce(
		(p, c) => p + (c.earned && c.earned.earnings ? c.earned.earnings : 0),
		0,
	);

	const balance = getBalanceNumber(useTokenBalance(getWadAddress()));
	return {
		account,
		balance,
		sumEarning,
		calculatedStakedData,
		calculatedTokenData,
		bnbPriceUSD: bnbPrice,
		wadPriceUSD: cakePrice,
		wadPriceBNB: cakePriceVsBNB,
	};
};
