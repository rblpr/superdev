import React, { useEffect, useCallback, useState } from 'react';

import useRefresh from 'hooks/useRefresh';
import BigNumber from 'bignumber.js';

import { RowType } from '@pancakeswap-libs/uikit';

import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK, CAKE_POOL_PID } from 'config';
import { QuoteToken } from 'config/constants/types';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFarms, usePriceBnbBusd, usePriceCakeBusd, usePriceEthBusd, useSettingMode } from 'state/hooks';
import { useWeb3React } from '@web3-react/core';
import { fetchFarmUserDataAsync } from 'state/actions';
import { Toast } from 'primereact/toast';
import { orderBy } from 'lodash';
import { useTokenBalance } from 'hooks/useTokenBalance';
import { useFarmPercentageFee } from 'hooks/useFarmPercentageFee';
import { useFarmDayTradeVolume } from 'hooks/useFarmDayTradeVolume';
import { getBalanceNumber } from 'utils/formatBalance';
import { getWadAddress } from 'utils/addressHelpers';
import { FarmWithStakedValue } from './components/FarmCard/FarmCard';
import { DesktopColumnSchema } from './components/types';
import { RowProps } from './components/FarmTable/Row';
import Table from './components/FarmTable/FarmTable';
import Reward from './components/Reward';
import ContactInfo from '../../components/Header/ContactInfo';

import Header from '../../components/Header';
import ConnectWalletButtonOnMobile from '../../components/ConnectWalletButtonOnMobile';
import PoolName from './components/PoolName';
import './style.scss';

import { PoolType } from '../../config/constants/types';

const Farms: React.FC = () => {
	const { pathname } = useLocation();

	const farmsLP = useFarms();

	const cakePrice = usePriceCakeBusd();
	const bnbPrice = usePriceBnbBusd();
	const { spaceMode } = useSettingMode();

	const ethPriceUsd = usePriceEthBusd();
	const { account } = useWeb3React();
	const farmPercentageFee = useFarmPercentageFee()
	const farmDayTradeVolume = useFarmDayTradeVolume()

	const [sortOption, setSortOption] = useState('');
	const [query, setQuery] = useState('');
	const [stackedOnly, setStackedOnly] = useState(false);


	const dispatch = useDispatch();
	const { fastRefresh } = useRefresh();
	useEffect(() => {
		if (account) {
			dispatch(fetchFarmUserDataAsync(account));
		}
	}, [account, dispatch, fastRefresh]);

	const activeFarms = farmsLP.filter((farm) => farm.poolType === PoolType.LP);
	const inactiveFarms = farmsLP.filter((farm) => farm.poolType === PoolType.LP && farm.multiplier === '0X');
	const pancakeFarms = farmsLP.filter((farm) => farm.poolType === PoolType.LP_PANCAKE);

	const tokenFarms = farmsLP.filter((farm) => farm.poolType === PoolType.STAKE);

	const stackedOnlyFarms = activeFarms.filter(
		(farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
	);

	const sortFarms = (farms: FarmWithStakedValue[]): FarmWithStakedValue[] => {
		switch (sortOption) {
			case 'apr':
				return orderBy(farms, 'apy', 'desc');
			case 'multiplier':
				return orderBy(farms, (farm: FarmWithStakedValue) => Number(farm.multiplier.slice(0, -1)), 'desc');
			case 'earned':
				return orderBy(
					farms,
					(farm: FarmWithStakedValue) => (farm.userData ? farm.userData.earnings : 0),
					'desc',
				);
			case 'liquidity':
				return orderBy(farms, (farm: FarmWithStakedValue) => Number(farm.liquidity), 'desc');
			case 'fees':
				return orderBy(farms, (farm: FarmWithStakedValue) => Number(farm.percentageFee), 'desc');
			default:
				return farms;
		}
	};

	const farmsList = useCallback(
		(farmsToDisplay, farmpercentageFeeToDisplay, farmDayTradeVolumeToDisplay): FarmWithStakedValue[] => {
			const cakePriceVsBNB = new BigNumber(
				farmsLP.find((farm) => farm.pid === CAKE_POOL_PID)?.tokenPriceVsQuote || 0,
			);
			let farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
				if (!farm.tokenAmount || !farm.lpTotalInQuoteToken) {
					return farm;
				}
				const cakeRewardPerBlock = CAKE_PER_BLOCK.times(farm.poolWeight);
				const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR);

				// cakePriceInQuote * cakeRewardPerYear / lpTotalInQuoteToken
				let apy = cakePriceVsBNB.times(cakeRewardPerYear).div(farm.lpTotalInQuoteToken);

				if (
					farm.quoteTokenSymbol === QuoteToken.BUSD ||
					farm.quoteTokenSymbol === QuoteToken.UST ||
					farm.quoteTokenSymbol === QuoteToken.USDT
				) {
					apy = cakePriceVsBNB.times(cakeRewardPerYear).div(farm.lpTotalInQuoteToken).times(bnbPrice);
				} else if (farm.quoteTokenSymbol === QuoteToken.ETH) {
					apy = cakePrice.div(ethPriceUsd).times(cakeRewardPerYear).div(farm.lpTotalInQuoteToken);
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

				if (farm.quoteTokenSymbol === QuoteToken.ETH) {
					liquidity = ethPriceUsd.times(farm.lpTotalInQuoteToken);
				}

				let percentageFee
				// Manage percentage fee

				if (farmpercentageFeeToDisplay && Reflect.ownKeys(farmpercentageFeeToDisplay).length) {
					const fee = farmpercentageFeeToDisplay[farm.lpAddresses['56']] ?? undefined
					if (fee) {
						percentageFee = new BigNumber(fee?.yearly).div(100).toFixed(2)
					}
				}

				let dayTradeVolume
				// Manage day trade volume
				if (farmDayTradeVolumeToDisplay && Reflect.ownKeys(farmDayTradeVolumeToDisplay).length) {
					const volume = farmDayTradeVolumeToDisplay[farm.lpAddresses['56']] ?? undefined
					if (volume) {
						dayTradeVolume = new BigNumber(volume?.day).toFixed(2)
					}
				}

				return { ...farm, apy, liquidity, percentageFee, dayTradeVolume };
			});

			if (query) {
				const lowercaseQuery = query.toLowerCase();
				farmsToDisplayWithAPY = farmsToDisplayWithAPY.filter((farm: FarmWithStakedValue) => {
					if (farm.lpSymbol.toLowerCase().includes(lowercaseQuery)) {
						return true;
					}

					return false;
				});
			}
			return farmsToDisplayWithAPY;
		},
		[bnbPrice, farmsLP, query, cakePrice, ethPriceUsd],
	);

	let tokenStaked = [];
	let lpStaked = [];
	let lpStakedPancake = [];

	lpStaked = stackedOnly ? farmsList(stackedOnlyFarms, farmPercentageFee, farmDayTradeVolume) : farmsList(activeFarms, farmPercentageFee, farmDayTradeVolume);
	lpStakedPancake = farmsList(pancakeFarms, farmPercentageFee, farmDayTradeVolume);
	tokenStaked = farmsList(tokenFarms, farmPercentageFee, farmDayTradeVolume);

	const tokenRowData = tokenStaked.map((farm) => {
		const { quoteTokenAdresses, quoteTokenSymbol, tokenAddresses, poolType, dayTradeVolume } = farm;
		const lpLabel = farm.lpSymbol && farm.lpSymbol.split(' ')[0].toUpperCase().replace('PANCAKE', '');

		const row: RowProps = {
			farm: {
				label: lpLabel,
				pid: farm.pid,
				multiplier: farm.multiplier,
			},
			earned: {
				earnings: farm.userData ? getBalanceNumber(new BigNumber(farm.userData.earnings)) : null,
				pid: farm.pid,
			},
			liquidity: {
				liquidity: farm.liquidity,
			},
			multiplier: {
				multiplier: farm.multiplier,
			},
			details: { ...farm, poolType },
			platform: { type: poolType },
			dayTradeVolume
		};
		return row;
	});

	const mapFarm = (farm) => {
		const { quoteTokenAdresses, quoteTokenSymbol, tokenAddresses, dayTradeVolume } = farm;
		const lpLabel = farm.lpSymbol && farm.lpSymbol.split(' ')[0].toUpperCase().replace('PANCAKE', '');

		const row: RowProps = {
			farm: {
				label: lpLabel,
				pid: farm.pid,
				multiplier: farm.multiplier,
			},
			earned: {
				earnings: farm.userData ? getBalanceNumber(new BigNumber(farm.userData.earnings)) : null,
				pid: farm.pid,
			},
			liquidity: {
				liquidity: farm.liquidity,
			},
			multiplier: {
				multiplier: farm.multiplier,
			},
			details: { ...farm, poolType: farm.poolType },
			platform: Object.assign(
				{ type: farm.poolType },
				farm?.percentageFee &&  farm?.percentageFee !== undefined ?	{percentageFee: farm.percentageFee } : null
			),
			dayTradeVolume
		};

		return row;
	};

	const lpRowData = lpStaked.map(mapFarm);

	const lpRowDataPancake = lpStakedPancake.map(mapFarm);

	const columnSchema = DesktopColumnSchema;
	const columns = columnSchema.map((column) => ({
		id: column.id,
		name: column.name,
		label: column.label,
		sort: (a: RowType<RowProps>, b: RowType<RowProps>) => {
			const m1 = a.original.farm.multiplier ? a.original.farm.multiplier : '';
			const m2 = b.original.farm.multiplier ? b.original.farm.multiplier : '';
			switch (column.name) {
				case 'farm':
					return Number(m1.substring(0, m1.length - 1)) - Number(m2.substring(0, m2.length - 1));
				case 'earned':
					return a.original.earned.earnings - b.original.earned.earnings;
				case 'liquidity':
					return Number(a.original.liquidity.liquidity) - Number(b.original.liquidity.liquidity);
				case 'platform':
					return Number(a.original.platform?.percentageFee) - Number(b.original.platform?.percentageFee);
				case 'dayTradeVolume':
					return Number(a.original.dayTradeVolume) - Number(b.original.dayTradeVolume);
				default:
					return 1;
			}
		},
		sortable: column.sortable,
	}));

	const renderLP = (): JSX.Element => {
		return <Table data={lpRowData} columns={columns} />;
	};

	const renderLPPancake = (): JSX.Element => {
		return <Table data={lpRowDataPancake} columns={columns} />;
	};

	const renderStaking = (): JSX.Element => {
		const _columns = [];
		// TODO pass by reference
		columns.forEach((val) => _columns.push(JSON.parse(JSON.stringify(val))));
		_columns[0].label = 'Tokens Names';
		return <Table data={tokenRowData} columns={_columns} />;
	};

	let sum = 0;
	const sumLpRowData = [...lpRowData, ...lpRowDataPancake];
	sumLpRowData.map((r) => {
		sum += r.earned && r.earned.earnings ? r.earned.earnings : 0;
		return true;
	});

	tokenRowData.map((r) => {
		sum += r.earned && r.earned.earnings ? r.earned.earnings : 0;
		return true;
	});

	const balance = getBalanceNumber(useTokenBalance(getWadAddress()));

	return (
		<div id="app" className="main-app">
			<Toast position="top-right" />
			<Header menu="farm" sum={sum} balance={balance} />
			<ConnectWalletButtonOnMobile sum={sum} balance={balance} isCorrectNetwork />
			<div className="main-container">
				<div className="best-rate-swap-container">
					<div className="best-rate-swap-box mb-6">
						<Reward sum={sum.toLocaleString()} balance={balance.toLocaleString()} />
					</div>
					<PoolName name="Warden Stake LPs">
						<img
							src={spaceMode ? '/images/warden/warden-pool-space.svg' : '/images/warden/warden-pool.svg'}
							alt="warden-stake"
						/>
					</PoolName>
					<div className="table-box mb-6">{renderStaking()}</div>
					<div className="table-box mb-6">{renderLP()}</div>
					<PoolName name="Pancake Stake LP">
						<img src="/images/warden/pancake-pool.svg" alt="pancake-stake" />
					</PoolName>
					<div className="table-box mb-6">{renderLPPancake()}</div>
					<div className="bottom-animation">
						<img
							src="/images/partner_link_animate.svg"
							style={{ height: 'auto', width: '100%' }}
							alt="animate"
						/>
					</div>
				</div>
			</div>
			<div className="footer-container">
				<div className="md-max:hidden">
					<ContactInfo />
				</div>
				<div className="flex space-x-3 md-max:flex-col md-max:items-center md-max:space-x-0 md-max:space-y-4">
					<div className="flex">
						<div className="flex items-center flex-none mr-3">
							<img className="float-left" src="/images/icon-pass-audit.svg" alt="icon" />
							<span className="whitespace-no-wrap">Audited by</span>
						</div>
						<img
							className="float-left"
							src={`/images/icon-certik${spaceMode ? '-space' : ''}.svg`}
							alt="icon"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Farms;
