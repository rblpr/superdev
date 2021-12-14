import contracts from './contracts';
import { FarmConfig, QuoteToken } from './types';

const farms: FarmConfig[] = [
	{
		pid: 0,
		lpSymbol: 'WAD',
		lpAddresses: {
			97: '0x29f9e7f1ace4e3496c0c46b3191e800a7a77964e',
			56: '0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc',
		},
		tokenSymbol: 'WAD',
		tokenAddresses: {
			97: '0x29f9e7f1ace4e3496c0c46b3191e800a7a77964e',
			56: '0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc',
		},
		quoteTokenSymbol: QuoteToken.CAKE,
		quoteTokenAdresses: contracts.wad,
	},
	{
		pid: 1,
		lpSymbol: 'WAD-BNB LP',
		lpAddresses: {
			97: '0xAc16B9d54d73879ca9Db8daa56D68E2624f931F6',
			56: '0xDc683Adb914EdF91df4A36c33EE4f59ca41bC263',
		},
		tokenSymbol: 'WAD',
		tokenAddresses: {
			97: '0x29f9E7f1ACE4E3496c0c46b3191E800a7A77964E',
			56: '0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc',
		},
		quoteTokenSymbol: QuoteToken.BNB,
		quoteTokenAdresses: contracts.wbnb,
	},
	{
		pid: 3,
		lpSymbol: 'BTCB-BNB LP',
		lpAddresses: {
			97: '0x2BB6B868285Fc124e950860300Ab8a826eF1c3B2',
			56: '0x1b1675A97b2f62B568569ebD349E88A04DdE8586',
		},
		tokenSymbol: 'BTCB',
		tokenAddresses: {
			97: '0x212A31781E574C5d7C0Fce551AddAD67cb4b4F5C',
			56: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
		},
		quoteTokenSymbol: QuoteToken.BNB,
		quoteTokenAdresses: contracts.wbnb,
	},
	{
		pid: 2,
		lpSymbol: 'BUSD-BNB LP',
		lpAddresses: {
			97: '0xA3Cd6D24B491D3a1DBE337074d6E910F9AdB40d1',
			56: '0xCf643C4B9DBf42239aa00e23A0570c90d517E6dC',
		},
		tokenSymbol: 'BUSD',
		tokenAddresses: {
			97: '0x2DbC5dFCe92737D8c333296F9F29a166a1aED742',
			56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
		},
		quoteTokenSymbol: QuoteToken.BNB,
		quoteTokenAdresses: contracts.wbnb,
	},
	{
		pid: 5,
		lpSymbol: 'USDT-BUSD LP',
		lpAddresses: {
			97: '0x93e6d9bF02367a231b4643D45b1Df949C13eB12C',
			56: '0x087d69B97a6dF4FB37E4E93A31752008223A6C19',
		},
		tokenSymbol: 'USDT',
		tokenAddresses: {
			97: '0xf19802DE4a3B7bF2f9910661f21389825D159abc',
			56: '0x55d398326f99059fF775485246999027B3197955',
		},
		quoteTokenSymbol: QuoteToken.BUSD,
		quoteTokenAdresses: contracts.busd,
	},
	{
		pid: 4,
		lpSymbol: 'ETH-BNB LP',
		lpAddresses: {
			97: '0xd4616b4768D282D458eECFEB8cb0492f821c9233',
			56: '0x8485c5f255FF30AafaB0030329e508BD8dDE11c5',
		},
		tokenSymbol: 'ETH',
		tokenAddresses: {
			97: '0x829C8c2128eD993fAC05a7BcFcD4ee9941A2898C',
			56: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
		},
		quoteTokenSymbol: QuoteToken.BNB,
		quoteTokenAdresses: contracts.wbnb,
	},
	{
		pid: 6,
		lpSymbol: 'CAKE-BNB LP',
		lpAddresses: {
			97: '0x2daA88Ef71d9120526f9f641554a336f9a6485f9',
			56: '0xF06ebE478d73c8c935e72C43e8F71C592d6E600f',
		},
		tokenSymbol: 'CAKE',
		tokenAddresses: {
			97: '0x455E20015fb7C5e8a24A2b0B39e6259a3f7C43de',
			56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
		},
		quoteTokenSymbol: QuoteToken.BNB,
		quoteTokenAdresses: contracts.wbnb,
	},
	{
		pid: 7,
		lpSymbol: 'WAD-BUSD LP',
		lpAddresses: {
			97: '0x515dbF03c828e50145e3822A3427A6068Da3F7F6',
			56: '0xc95b1750043fce5dfcc8539835ea3830ec002a89',
		},
		tokenSymbol: 'WAD',
		tokenAddresses: {
			97: '0x29f9E7f1ACE4E3496c0c46b3191E800a7A77964E',
			56: '0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc',
		},
		quoteTokenSymbol: QuoteToken.BUSD,
		quoteTokenAdresses: contracts.busd,
	},
	{
		pid: 10,
		lpSymbol: 'WAD-USDT LP',
		lpAddresses: {
			97: '',
			56: '0x7d6195b212dee1ba7de8404cfd319446cf17d71b',
		},
		tokenSymbol: 'WAD',
		tokenAddresses: {
			97: '',
			56: '0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc',
		},
		quoteTokenSymbol: QuoteToken.USDT,
		quoteTokenAdresses: contracts.usdt,
	},
	{
		pid: 11,
		lpSymbol: 'USDT-BNB LP',
		lpAddresses: {
			97: '',
			56: '0xfD468f81f4a6D859a0eB3667c65F7BEA9Dc69028',
		},
		tokenSymbol: 'USDT',
		tokenAddresses: {
			97: '',
			56: '0x55d398326f99059fF775485246999027B3197955',
		},
		quoteTokenSymbol: QuoteToken.BNB,
		quoteTokenAdresses: contracts.wbnb,
	},
	// {
	//   pid: 2,
	//   lpSymbol: 'BUSD-BNB LP',
	//   lpAddresses: {
	//     97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
	//     56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
	//   },
	//   tokenSymbol: 'BUSD',
	//   tokenAddresses: {
	//     97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
	//     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
	//   },
	//   quoteTokenSymbol: QuoteToken.BNB,
	//   quoteTokenAdresses: contracts.wbnb,
	// },
];

export default farms;
