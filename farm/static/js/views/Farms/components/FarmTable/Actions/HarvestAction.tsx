import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useWeb3React } from '@web3-react/core';
import BigNumber from 'bignumber.js';
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard';
import { getBalanceNumber } from 'utils/formatBalance';
import { useHarvest } from 'hooks/useHarvest';
import useI18n from 'hooks/useI18n';
import { usePriceCakeBusd } from 'state/hooks';
import { useCountUp } from 'react-countup';

import { ActionContainer, ActionTitles, Title, Subtle, ActionContent, Earned, Staked } from './styles';

const Button = styled.div`
	width: 180px;
	height: 45px;
	background: var(--color-background-4);
	border-radius: 15px;
	color: #bdbdbd;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 15px auto;
	cursor: pointer;
`;

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
	background: transparent;
	width: 100%;
	padding: 10px 0;
	text-align: center;
	border-right: 0;
	color: var(--color-text);

	${({ theme }) => theme.mediaQueries.lg} {
		background: var(--color-background-8);
		border-right: 1px solid var(--color-border-5);
	}
`;

const Content = styled.div`
	min-height: auto;
	width: 100%;
	padding: 30px 25px;
	border-right: 0;
	text-align: center;

	${({ theme }) => theme.mediaQueries.lg} {
		border-right: 1px solid var(--color-border-5);
		min-height: 200px;
	}
`;

const HarvestAction: React.FunctionComponent<FarmWithStakedValue> = ({ pid, userData }) => {
	const earningsBigNumber = userData ? new BigNumber(userData.earnings) : null;
	const cakePrice = usePriceCakeBusd();
	let earnings = null;
	let earningsBusd = 0;
	let displayBalance = '0';

	if (earningsBigNumber) {
		earnings = getBalanceNumber(earningsBigNumber);
		earningsBusd = new BigNumber(earnings).multipliedBy(cakePrice).toNumber();
		displayBalance = earnings.toLocaleString();
	}

	const [pendingTx, setPendingTx] = useState(false);
	const { account } = useWeb3React();
	const { onReward } = useHarvest(pid);
	const TranslateString = useI18n();

	const { countUp, update } = useCountUp({
		start: 0,
		end: earningsBusd,
		duration: 1,
		separator: ',',
		decimals: 3,
	});
	const updateValue = useRef(update);

	useEffect(() => {
		updateValue.current(earningsBusd);
	}, [earningsBusd, updateValue]);

	return (
		<Container>
			<Label>WAD Earned</Label>
			<Content>
				<p style={{ color: 'var(--color-text-2)', fontSize: '25px' }}>{displayBalance}</p>
				<p style={{ color: 'var(--color-text-4)', fontSize: '12px', fontWeight: 400, marginTop: '5px' }}>
					(~ ${countUp})
				</p>
				{!earnings || pendingTx || !account ? (
					<Button>Harvest</Button>
				) : (
					<ActiveButton
						onClick={async () => {
							setPendingTx(true);
							await onReward();
							setPendingTx(false);
						}}
					>
						Harvest
					</ActiveButton>
				)}
			</Content>
		</Container>
	);
};

export default HarvestAction;
