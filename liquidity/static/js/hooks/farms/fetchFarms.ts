import BigNumber from 'bignumber.js';
import erc20 from 'config/abi/erc20.json';
import masterchefABI from 'config/abi/masterchef.json';
import multicall from 'farms-utils/multicall';
import farmsConfig from 'config/constants/farms';
import { getAddress, getMasterChefAddress, getWadAddress } from 'farms-utils/addressHelpers';
import { Farm } from 'state/types';

const fetchFarms = async (): Promise<Farm[]> => {
	const data = await Promise.all(
		farmsConfig.map(async (farmConfig) => {
			const lpAdress = getAddress(farmConfig.lpAddresses);
			const calls = [
				// Balance of token in the LP contract
				{
					address: getAddress(farmConfig.tokenAddresses),
					name: 'balanceOf',
					params: [lpAdress],
				},
				// Balance of quote token on LP contract
				{
					address: getAddress(farmConfig.quoteTokenAdresses),
					name: 'balanceOf',
					params: [lpAdress],
				},
				// Balance of LP tokens in the master chef contract
				{
					address: lpAdress,
					name: 'balanceOf',
					params: [getMasterChefAddress()],
				},
				// Total supply of LP tokens
				{
					address: lpAdress,
					name: 'totalSupply',
				},
				// Token decimals
				{
					address: getAddress(farmConfig.tokenAddresses),
					name: 'decimals',
				},
				// Quote token decimals
				{
					address: getAddress(farmConfig.quoteTokenAdresses),
					name: 'decimals',
				},
			];

			const [
				tokenBalanceLP,
				quoteTokenBlanceLP,
				lpTokenBalanceMC,
				lpTotalSupply,
				tokenDecimals,
				quoteTokenDecimals,
			] = await multicall(erc20, calls);

			// Ratio in % a LP tokens that are in staking, vs the total number in circulation
			const lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(new BigNumber(lpTotalSupply));

			// Total value in staking in quote token value
			let lpTotalInQuoteToken;
			// Single WAD Pool
			if (lpAdress === getWadAddress()) {
				lpTotalInQuoteToken = new BigNumber(lpTokenBalanceMC).div(new BigNumber(10).pow(18));

				// // LP Pools
			} else {
				lpTotalInQuoteToken = new BigNumber(quoteTokenBlanceLP)
					.div(new BigNumber(10).pow(18))
					.times(new BigNumber(2))
					.times(lpTokenRatio);
			}

			// if (lpAdress === getWadAddress()) {
			//   console.log('sigle wad')
			//   console.log({
			//     tokenBalanceLP: tokenBalanceLP.toString(),
			//     quoteTokenBlanceLP: quoteTokenBlanceLP.toString(),
			//     lpTokenBalanceMC: lpTokenBalanceMC.toString(),
			//     lpTotalSupply: lpTotalSupply.toString(),
			//     tokenDecimals,
			//     quoteTokenDecimals,
			//     lpTotalInQuoteToken: lpTotalInQuoteToken.toString()
			//   })
			// }
			// console.log('lpAdress', lpAdress)

			// Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
			const tokenAmount = new BigNumber(tokenBalanceLP)
				.div(new BigNumber(10).pow(tokenDecimals))
				.times(lpTokenRatio);
			const quoteTokenAmount = new BigNumber(quoteTokenBlanceLP)
				.div(new BigNumber(10).pow(quoteTokenDecimals))
				.times(lpTokenRatio);

			const [info, totalAllocPoint] = await multicall(masterchefABI, [
				{
					address: getMasterChefAddress(),
					name: 'poolInfo',
					params: [farmConfig.pid],
				},
				{
					address: getMasterChefAddress(),
					name: 'totalAllocPoint',
				},
			]);

			const allocPoint = new BigNumber(info.allocPoint._hex);
			const poolWeight = allocPoint.div(new BigNumber(totalAllocPoint));

			return {
				...farmConfig,
				tokenAmount,
				quoteTokenAmount,
				lpTotalInQuoteToken,
				tokenPriceVsQuote: quoteTokenAmount.div(tokenAmount),
				poolWeight,
				multiplier: `${allocPoint.div(100).toString()}X`,
			} as Farm;
		}),
	);
	return data;
};

export default fetchFarms;
