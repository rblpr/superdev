import { useCallback } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useDispatch } from 'react-redux';
import { fetchFarmUserDataAsync, updateUserStakedBalance, updateUserBalance } from 'state/actions';
import { stake, sousStake, sousStakeBnb } from 'utils/callHelpers';
import { useMasterchef, useSousChef } from './useContract';
import { logToRollbar } from '../utils/rollbar';
import farmsConfig from '../config/constants/farms';

const useStake = (pid: number) => {
	const dispatch = useDispatch();
	const { account } = useWeb3React();
	const masterChefContract = useMasterchef();

	const handleStake = useCallback(
		async (amount: string) => {
			const farmData = farmsConfig.find((f) => f.pid === pid);
			const logData = Object.assign(
				{},
				{
					senderAddress: account,
					stakesAmount: amount,
				},
				farmData
					? {
							lpSymbol: farmData.lpSymbol,
							lpAddress: farmData.lpAddresses[process.env.REACT_APP_CHAIN_ID],
					  }
					: null,
			);
			try {
				const txHash = await stake(masterChefContract, pid, amount, account);
				dispatch(fetchFarmUserDataAsync(account));
				logToRollbar('info', 'Stake LP token success', logData);
				console.info(txHash);
				return txHash;
			} catch (error) {
				if (error?.code !== 4001) {
					logToRollbar('error', 'Stake LP token failed', {
						...error,
						...logData,
						functionName: 'useStake',
					});
				}
				throw error;
			}
		},
		[account, dispatch, masterChefContract, pid],
	);

	return { onStake: handleStake };
};

export const useSousStake = (sousId, isUsingBnb = false) => {
	const dispatch = useDispatch();
	const { account } = useWeb3React();
	const masterChefContract = useMasterchef();
	const sousChefContract = useSousChef(sousId);

	const handleStake = useCallback(
		async (amount: string, decimals: number) => {
			if (sousId === 0) {
				await stake(masterChefContract, 0, amount, account);
			} else if (isUsingBnb) {
				await sousStakeBnb(sousChefContract, amount, account);
			} else {
				await sousStake(sousChefContract, amount, decimals, account);
			}
			dispatch(updateUserStakedBalance(sousId, account));
			dispatch(updateUserBalance(sousId, account));
		},
		[account, dispatch, isUsingBnb, masterChefContract, sousChefContract, sousId],
	);

	return { onStake: handleStake };
};

export default useStake;
