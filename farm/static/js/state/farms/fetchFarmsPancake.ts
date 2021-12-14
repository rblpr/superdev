import BigNumber from 'bignumber.js';
import erc20 from 'config/abi/erc20.json';
import multicall from 'utils/multicall';
import { getAddress } from 'utils/addressHelpers';
import { QuoteToken } from 'config/constants/types';

const fetchFarms = async () => {
	// TODO: Add pool pancake special case
	const farmsConfig = [{
		pid: 999,
		lpSymbol: 'WAD-BNB LP',
		lpAddresses: {
			97: '',
			56: '0xf70a40749006c7952186666c92f32b8f5c2129f9',
		},
		tokenSymbol: 'WAD',
		tokenAddresses: {
			97: '',
			56: '0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc',
		},
		quoteTokenSymbol: QuoteToken.BNB,
		quoteTokenAdresses: {
			56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
		},
		poolType: 'LP_PANCAKE',
	}]
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
				lpTotalSupply,
				tokenDecimals,
				quoteTokenDecimals,
			] = await multicall(erc20, calls);

			// Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
			const tokenAmount = new BigNumber(tokenBalanceLP)
				.div(new BigNumber(10).pow(tokenDecimals))
			const quoteTokenAmount = new BigNumber(quoteTokenBlanceLP)
				.div(new BigNumber(10).pow(quoteTokenDecimals))

			const lpTotalInQuoteToken = new BigNumber(quoteTokenBlanceLP)
					.div(new BigNumber(10).pow(18))
					.times(new BigNumber(2))
			return {
				...farmConfig,
				tokenAmount: tokenAmount.toJSON(),
				quoteTokenAmount: quoteTokenAmount.toJSON(),
				lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
				tokenPriceVsQuote: quoteTokenAmount.div(tokenAmount).toJSON(),
				poolWeight: '0',
				multiplier: `0X`,
			};
		}),
	);
	return data;
};

export default fetchFarms;
