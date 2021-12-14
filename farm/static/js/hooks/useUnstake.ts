import { useCallback } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useDispatch } from 'react-redux';
import {
	fetchFarmUserDataAsync,
	updateUserStakedBalance,
	updateUserBalance,
	updateUserPendingReward,
} from 'state/actions';
import { unstake, sousUnstake, sousEmegencyUnstake } from 'utils/callHelpers';
import { useMasterchef, useSousChef } from './useContract';
import { logToRollbar } from '../utils/rollbar';
import farmsConfig from '../config/constants/farms';

const useUnstake = (pid: number) => {
	const dispatch = useDispatch();
	const { account } = useWeb3React();
	const masterChefContract = useMasterchef();

	const handleUnstake = useCallback(
		async (amount: string) => {
			const farmData = farmsConfig.find((f) => f.pid === pid);
			const logData = Object.assign(
				{},
				{
					senderAddress: account,
					unstakeAmount: amount,
				},
				farmData
					? {
							lpSymbol: farmData.lpSymbol,
							lpAddress: farmData.lpAddresses[process.env.REACT_APP_CHAIN_ID],
					  }
					: null,
			);
			try {
				const txHash = await unstake(masterChefContract, pid, amount, account);
				dispatch(fetchFarmUserDataAsync(account));
				logToRollbar('info', 'Unstake LP token success', logData);
				console.info(txHash);
				return txHash;
			} catch (error) {
				if (error?.code !== 4001) {
					logToRollbar('error', 'Unstake LP token failed', {
						...error,
						...logData,
						functionName: 'useUnstake',
					});
				}
				throw error;
			}
		},
		[account, dispatch, masterChefContract, pid],
	);

	return { onUnstake: handleUnstake };
};

const SYRUPIDS = [5, 6, 3, 1, 22, 23];

export const useSousUnstake = (sousId) => {
	const dispatch = useDispatch();
	const { account } = useWeb3React();
	const masterChefContract = useMasterchef();
	const sousChefContract = useSousChef(sousId);
	const isOldSyrup = SYRUPIDS.includes(sousId);

	const handleUnstake = useCallback(
		async (amount: string, decimals: number) => {
			if (sousId === 0) {
				const txHash = await unstake(masterChefContract, 0, amount, account);
				console.info(txHash);
			} else if (isOldSyrup) {
				const txHash = await sousEmegencyUnstake(sousChefContract, amount, account);
				console.info(txHash);
			} else {
				const txHash = await sousUnstake(sousChefContract, amount, decimals, account);
				console.info(txHash);
			}
			dispatch(updateUserStakedBalance(sousId, account));
			dispatch(updateUserBalance(sousId, account));
			dispatch(updateUserPendingReward(sousId, account));
		},
		[account, dispatch, isOldSyrup, masterChefContract, sousChefContract, sousId],
	);

	return { onUnstake: handleUnstake };
};

export default useUnstake;
