import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useModal, IconButton, AddIcon, MinusIcon } from '@pancakeswap-libs/uikit';
import UnlockButton from 'components/UnlockButton';
import { useWeb3React } from '@web3-react/core';
import { useFarmUser } from 'state/hooks';
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard';
import useI18n from 'hooks/useI18n';
import { useApprove } from 'hooks/useApprove';
import { getBep20Contract } from 'utils/contractHelpers';
import { BASE_ADD_LIQUIDITY_URL } from 'config';
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts';
import { getBalanceNumber } from 'utils/formatBalance';
import useStake from 'hooks/useStake';
import useUnstake from 'hooks/useUnstake';
import useWeb3 from 'hooks/useWeb3';

import DepositModal from '../../DepositModal';
import WithdrawModal from '../../WithdrawModal';
import { ActionContainer, ActionTitles, ActionContent, Earned, Title, Subtle } from './styles';

const ActiveButton = styled.div`
	width: 180px;
	height: 45px;
	background: #82affb;
	border-radius: 15px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 15px auto;
	cursor: pointer;
	${({ theme }) => theme.mediaQueries.xs} {
		width: 80%;
	}

	${({ theme }) => theme.mediaQueries.sm} {
		width: 80%;
	}

	${({ theme }) => theme.mediaQueries.lg} {
		width: 180px;
	}
`;

const InActiveButton = styled.div`
	width: 180px;
	height: 45px;
	background: var(--color-background-4);
	border-radius: 15px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 15px auto;
	cursor: not-allowed;
	${({ theme }) => theme.mediaQueries.xs} {
		width: 80%;
	}

	${({ theme }) => theme.mediaQueries.sm} {
		width: 80%;
	}

	${({ theme }) => theme.mediaQueries.lg} {
		width: 180px;
	}
`;

const RowItem = styled.div`
	display: block;
	width: 100%;
	margin: 16px auto;
	${({ theme }) => theme.mediaQueries.lg} {
		display: inline-flex;
	}
`;

const DepositButton = styled.div`
	width: 180px;
	height: 45px;
	background: var(--color-background-4);
	border-radius: 15px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 15px auto;
	cursor: not-allowed;

	${({ theme }) => theme.mediaQueries.lg} {
		display: inline-flex;
		width: 130px;
		margin: 15px 10px;
	}
`;

const WithdrawButton = styled.div`
	width: 180px;
	height: 45px;
	background: #fb7979;
	border-radius: 15px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 15px auto;
	cursor: pointer;

	${({ theme }) => theme.mediaQueries.lg} {
		display: inline-flex;
		margin: 15px 10px;
		width: 130px;
	}
`;

const Container = styled.div`
	${({ theme }) => theme.mediaQueries.xs} {
		border: 1px solid var(--color-border-2);
		border-radius: 30px;
		margin: 30px;
	}

	${({ theme }) => theme.mediaQueries.sm} {
		border: 1px solid var(--color-border-2);
		border-radius: 30px;
		margin: 30px;
	}

	${({ theme }) => theme.mediaQueries.lg} {
		border: 0;
		border-radius: 0;
		margin: 0;
	}
`;

const Label = styled.div`
	font-size: 13px;
	background: var(--color-background-8);
	width: 100%;
	padding: 10px 0;
	text-align: center;
	border-right: 1px solid var(--color-border-5);
	color: var(--color-text);

	${({ theme }) => theme.mediaQueries.xs} {
		background: transparent;
		border-right: 0;
	}

	${({ theme }) => theme.mediaQueries.sm} {
		background: transparent;
		border-right: 0;
	}

	${({ theme }) => theme.mediaQueries.lg} {
		background: var(--color-background-8);
		border-right: 1px solid var(--color-border-5);
	}
`;

const Content = styled.div`
	border-right: 0;
	min-height: auto;
	width: 100%;
	padding: 30px 25px;
	text-align: center;

	${({ theme }) => theme.mediaQueries.lg} {
		border-right: 1px solid var(--color-border-5);
		min-height: 200px;
	}
`;

const Staked: React.FunctionComponent<FarmWithStakedValue> = ({
	pid,
	lpSymbol,
	lpAddresses,
	quoteTokenAdresses,
	tokenAddresses,
}) => {
	const TranslateString = useI18n();
	const { account } = useWeb3React();
	const [requestedApproval, setRequestedApproval] = useState(false);
	const { allowance, tokenBalance, stakedBalance } = useFarmUser(pid);
	const { onStake } = useStake(pid);
	const { onUnstake } = useUnstake(pid);
	const [showDepositModal, setShowDepositModal] = useState(false);
	const [showWithdrawModal, setShowWithdrawModal] = useState(false);
	const web3 = useWeb3();

	const isApproved = account && allowance && allowance.isGreaterThan(0);


	const lpAddress = lpAddresses[process.env.REACT_APP_CHAIN_ID];

	const isMockPancakePool = lpAddress === '0xf70a40749006c7952186666c92f32b8f5c2129f9' // WAD-BNB

	const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, tokenAddresses });
	const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`;
	const rawStakedBalance = getBalanceNumber(stakedBalance);
	const displayBalance = rawStakedBalance.toLocaleString();

	const lpContract = getBep20Contract(lpAddress, web3);

	const { onApprove } = useApprove(lpContract, lpAddress);

	const handleApprove = useCallback(async () => {
		try {
			setRequestedApproval(true);
			await onApprove();
			setRequestedApproval(false);
		} catch (e) {
			console.error(e);
		}
	}, [onApprove]);

	if (!account) {
		return (
			<Container>
				<Label>Farming</Label>
				<Content>
					<p style={{ color: 'var(--color-text-2)', fontSize: '25px' }}>{displayBalance}</p>
					<div style={{ width: '100%', margin: '0 auto' }}>
						<UnlockButton width="100%" />
					</div>
				</Content>
			</Container>
		);
	}

	if (isApproved) {
		if (rawStakedBalance) {
			return (
				<>
					<DepositModal
						visible={showDepositModal}
						max={tokenBalance}
						onConfirm={onStake}
						tokenName={lpSymbol}
						addLiquidityUrl={addLiquidityUrl}
						onHide={() => setShowDepositModal(false)}
					/>
					<WithdrawModal
						visible={showWithdrawModal}
						onHide={() => setShowWithdrawModal(false)}
						max={stakedBalance}
						onConfirm={onUnstake}
						tokenName={lpSymbol}
					/>
					<Container>
						<Label>Farming</Label>
						<Content>
							<p style={{ color: 'var(--color-text-2)', fontSize: '25px' }}>{displayBalance}</p>
							<RowItem>
								<DepositButton onClick={() => setShowDepositModal(false)}>Deposit</DepositButton>
								<WithdrawButton onClick={() => setShowWithdrawModal(true)}>Withdraw</WithdrawButton>
							</RowItem>
						</Content>
					</Container>
				</>
			);
		}

		return (
			<>
				<DepositModal
					visible={showDepositModal}
					max={tokenBalance}
					onConfirm={onStake}
					tokenName={lpSymbol}
					addLiquidityUrl={addLiquidityUrl}
					onHide={() => setShowDepositModal(false)}
				/>
				<Container>
					<Label>Farming</Label>
					<Content>
						<p style={{ color: 'var(--color-text-2)', fontSize: '25px' }}>{lpSymbol}</p>
						<div style={{ width: '100%', margin: '12px auto' }}>
							<DepositButton onClick={() => setShowDepositModal(false)}>Deposit</DepositButton>
						</div>
					</Content>
				</Container>
			</>
		);
	}
	if (isMockPancakePool) {
		return (
			<Container>
				<Label>Farming</Label>
				<Content>
					<p style={{ color: 'var(--color-text-2)', fontSize: '25px' }}>{displayBalance}</p>
					<div style={{ width: '100%', margin: '32px auto' }}>
						<InActiveButton>Enable</InActiveButton>
					</div>
				</Content>
			</Container>
		);
	}

	return (
		<Container>
			<Label>Farming</Label>
			<Content>
				<p style={{ color: 'var(--color-text-2)', fontSize: '25px' }}>{displayBalance}</p>
				<div style={{ width: '100%', margin: '32px auto' }}>
					<ActiveButton onClick={handleApprove}>Enable</ActiveButton>
				</div>
			</Content>
		</Container>
	);
};

export default Staked;
