import { useCallback } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Contract } from 'web3-eth-contract';
import { ethers } from 'ethers';
import { useDispatch } from 'react-redux';
import { updateUserAllowance, fetchFarmUserDataAsync } from 'state/actions';
import { approve } from 'utils/callHelpers';
import { useMasterchef, useCake, useSousChef, useLottery } from './useContract';
import { logToRollbar } from '../utils/rollbar';
import farmsConfig from '../config/constants/farms';

// Approve a Farm
export const useApprove = (lpContract: Contract, lpAddress?: string) => {
	const dispatch = useDispatch();
	const { account } = useWeb3React();
	const masterChefContract = useMasterchef();

	const handleApprove = useCallback(async () => {
		const farmData = farmsConfig.find((f) => f.lpAddresses[process.env.REACT_APP_CHAIN_ID] === lpAddress);
		const logData = Object.assign(
			{},
			{
				lpAddress,
				senderAddress: account,
			},
			farmData ? { lpSymbol: farmData.lpSymbol } : null,
		);
		try {
			const tx = await approve(lpContract, masterChefContract, account);
			dispatch(fetchFarmUserDataAsync(account));
			logToRollbar('info', 'Approved farm success', logData);
			return tx;
		} catch (error) {
			if (error?.code !== 4001) {
				logToRollbar('error', 'Error: Function useApprove', { ...error, ...logData });
			}
			return false;
		}
	}, [account, dispatch, lpContract, lpAddress, masterChefContract]);

	return { onApprove: handleApprove };
};

// Approve a Pool
export const useSousApprove = (lpContract: Contract, sousId) => {
	const dispatch = useDispatch();
	const { account } = useWeb3React();
	const sousChefContract = useSousChef(sousId);

	const handleApprove = useCallback(async () => {
		try {
			const tx = await approve(lpContract, sousChefContract, account);
			dispatch(updateUserAllowance(sousId, account));
			return tx;
		} catch (e) {
			return false;
		}
	}, [account, dispatch, lpContract, sousChefContract, sousId]);

	return { onApprove: handleApprove };
};

// Approve the lottery
export const useLotteryApprove = () => {
	const { account } = useWeb3React();
	const cakeContract = useCake();
	const lotteryContract = useLottery();

	const handleApprove = useCallback(async () => {
		try {
			const tx = await approve(cakeContract, lotteryContract, account);
			return tx;
		} catch (e) {
			return false;
		}
	}, [account, cakeContract, lotteryContract]);

	return { onApprove: handleApprove };
};

// Approve an IFO
export const useIfoApprove = (tokenContract: Contract, spenderAddress: string) => {
	const { account } = useWeb3React();
	const onApprove = useCallback(async () => {
		const tx = await tokenContract.methods
			.approve(spenderAddress, ethers.constants.MaxUint256)
			.send({ from: account });
		return tx;
	}, [account, spenderAddress, tokenContract]);

	return onApprove;
};
