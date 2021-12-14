import BigNumber from 'bignumber.js';

export const getBalanceNumber = (balance: BigNumber | undefined, decimals = 18): number => {
	if (!balance) return 0;
	const displayBalance = new BigNumber(balance).dividedBy(new BigNumber(10).pow(decimals));
	return displayBalance.toNumber();
};

export const getFullDisplayBalance = (balance: BigNumber, decimals = 18) => {
	return balance.dividedBy(new BigNumber(10).pow(decimals)).toFixed();
};
