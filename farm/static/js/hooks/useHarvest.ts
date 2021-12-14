import { useCallback } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useDispatch } from 'react-redux';
import { fetchFarmUserDataAsync, updateUserBalance, updateUserPendingReward } from 'state/actions';
import { soushHarvest, soushHarvestBnb, harvest } from 'utils/callHelpers';
import { useMasterchef, useSousChef } from './useContract';
import { logToRollbar } from '../utils/rollbar';
import farmsConfig from '../config/constants/farms';

export const useHarvest = (farmPid: number) => {
	const dispatch = useDispatch();
	const { account } = useWeb3React();
	const masterChefContract = useMasterchef();

	const handleHarvest = useCallback(async () => {
		const farmData = farmsConfig.find((f) => f.pid === farmPid);
		const logData = Object.assign(
			{},
			{ senderAddress: account },
			farmData
				? {
						lpSymbol: farmData.lpSymbol,
						lpAddress: farmData.lpAddresses[process.env.REACT_APP_CHAIN_ID],
				  }
				: null,
		);
		try {
			const txHash = await harvest(masterChefContract, farmPid, account);
			dispatch(fetchFarmUserDataAsync(account));
			logToRollbar('info', 'Harvest success', logData);
			return txHash;
		} catch (error) {
			if (error?.code !== 4001) {
				logToRollbar('error', 'Harvest failed', {
					...error,
					...logData,
					functionName: 'useHarvest',
				});
			}
			return error;
		}
	}, [account, dispatch, farmPid, masterChefContract]);

	return { onReward: handleHarvest };
};

export const useAllHarvest = (farmPids: number[]) => {
	const { account } = useWeb3React();
	const masterChefContract = useMasterchef();

	const handleHarvest = useCallback(async () => {
		const harvestPromises = farmPids.reduce((accum, pid) => {
			return [...accum, harvest(masterChefContract, pid, account)];
		}, []);

		return Promise.all(harvestPromises);
	}, [account, farmPids, masterChefContract]);

	return { onReward: handleHarvest };
};

export const useSousHarvest = (sousId, isUsingBnb = false) => {
	const dispatch = useDispatch();
	const { account } = useWeb3React();
	const sousChefContract = useSousChef(sousId);
	const masterChefContract = useMasterchef();

	const handleHarvest = useCallback(async () => {
		if (sousId === 0) {
			await harvest(masterChefContract, 0, account);
		} else if (isUsingBnb) {
			await soushHarvestBnb(sousChefContract, account);
		} else {
			await soushHarvest(sousChefContract, account);
		}
		dispatch(updateUserPendingReward(sousId, account));
		dispatch(updateUserBalance(sousId, account));
	}, [account, dispatch, isUsingBnb, masterChefContract, sousChefContract, sousId]);

	return { onReward: handleHarvest };
};
