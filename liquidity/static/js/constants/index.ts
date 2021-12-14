import { ChainId, JSBI, Percent, Token, WETH } from '@wardenswap/sdk';

export const ROUTER_ADDRESS = '0x71ac17934b60A4610dc58b715B61e45DCBdE4054';

// a list of tokens by chain
type ChainTokenList = {
	readonly [chainId in ChainId]: Token[];
};

export const DAI = new Token(
	ChainId.MAINNET,
	'0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
	18,
	'DAI',
	'Dai Stablecoin',
);
export const BUSD = new Token(ChainId.MAINNET, '0xe9e7cea3dedca5984780bafc599bd69add087d56', 18, 'BUSD', 'Binance USD');
export const USDT = new Token(ChainId.MAINNET, '0x55d398326f99059ff775485246999027b3197955', 18, 'USDT', 'Tether USD');
export const BTCB = new Token(
	ChainId.MAINNET,
	'0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
	18,
	'BTCB',
	'Binance-Peg BTCB Token',
);
export const UST = new Token(
	ChainId.MAINNET,
	'0x23396cf899ca06c4472205fc903bdb4de249d6fc',
	18,
	'UST',
	'Wrapped UST Token',
);
export const WAD = new Token(
	ChainId.MAINNET,
	'0x0feadcc3824e7f3c12f40e324a60c23ca51627fc',
	18,
	'WARDEN',
	'WardenSwap Token',
);
export const ETH = new Token(
	ChainId.MAINNET,
	'0x2170ed0880ac9a755fd29b2688956bd959f933f8',
	18,
	'ETH',
	'Binance-Peg Ethereum Token',
);

export const ALPHA = new Token(
	ChainId.MAINNET,
	'0xa1faa113cbe53436df28ff0aee54275c13b40975',
	18,
	'ALPHA',
	'AlphaToken',
);

export const WBNB = new Token(ChainId.MAINNET, '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', 18, 'WBNB', 'Wrapped BNB');

export const LINK = new Token(
	ChainId.MAINNET,
	'0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
	18,
	'LINK',
	'Chainlink Token',
);

const WETH_ONLY: ChainTokenList = {
	[ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
	[ChainId.BSCTESTNET]: [WETH[ChainId.BSCTESTNET]],
};

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
	...WETH_ONLY,
	[ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT, UST, ETH],
};

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
	[ChainId.MAINNET]: {},
};

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
	...WETH_ONLY,
	[ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT],
};

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
	...WETH_ONLY,
	[ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT, WAD, BTCB, ETH, WBNB, ALPHA, LINK],
};

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
	[ChainId.MAINNET]: [
		[WAD, WBNB],
		[BUSD, USDT],
		[DAI, USDT],
		[ETH, BTCB],
	],
	[ChainId.BSCTESTNET]: [
		[
			new Token(ChainId.BSCTESTNET, '0x2DbC5dFCe92737D8c333296F9F29a166a1aED742', 18, 'BUSD', 'BUSD Token'),
			new Token(ChainId.BSCTESTNET, '0xf19802DE4a3B7bF2f9910661f21389825D159abc', 18, 'USDT', 'USDT Token'),
		],
	],
};

export const NetworkContextName = 'NETWORK';

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 80;
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20;

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000));
export const BIPS_BASE = JSBI.BigInt(10000);
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE); // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE); // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE); // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE); // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE); // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)); // .01 ETH
