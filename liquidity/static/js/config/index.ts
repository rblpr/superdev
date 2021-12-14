import BigNumber from 'bignumber.js/bignumber';

BigNumber.config({
	EXPONENTIAL_AT: 1000,
	DECIMAL_PLACES: 80,
});

export const CAKE_PER_BLOCK = new BigNumber(10);
export const BLOCKS_PER_YEAR = new BigNumber(10512000);
export const BSC_BLOCK_TIME = 3;
export const CAKE_POOL_PID = 1;
export const BASE_URL = 'https://www.wardenswap.finance';
export const BASE_EXCHANGE_URL = 'https://www.wardenswap.finance';
export const BASE_ADD_LIQUIDITY_URL = `https://liquidity.wardenswap.finance`;
export const BASE_LIQUIDITY_POOL_URL = `https://liquidity.wardenswap.finance`;
export const LOTTERY_MAX_NUMBER_OF_TICKETS = 50;
export const LOTTERY_TICKET_PRICE = 1;