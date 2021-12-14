import React from 'react';
import styled from 'styled-components';
import { useFarmUser } from 'state/hooks';
import useI18n from 'hooks/useI18n';
import { getBalanceNumber } from 'utils/formatBalance';

export interface FarmProps {
	label: string;
	pid: number;
	multiplier: string;
}

const IconImage = styled.img`
	width: 15px;
	height: 15px;

	${({ theme }) => theme.mediaQueries.lg} {
		width: 33px;
		height: 33px;
	}
`;

const IconImage1 = styled.img`
	width: 15px;
	height: 15px;
	left: 4px;
	position: absolute;
	top: 15;
	z-index: 10;

	${({ theme }) => theme.mediaQueries.lg} {
		width: 33px;
		height: 33px;
		left: 6px;
	}
`;

const Container = styled.div`
	position: relative;
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	vertical-align: middle;
	@media (max-width: 575px) {
		flex-direction: row;
	}
`;

const WrapContent = styled.div`
	position: relative;
	padding-left: 16px;
	display: flex;
	align-items: center;
	vertical-align: middle;

	${({ theme }) => theme.mediaQueries.lg} {
		padding-left: 32px;
	}

	@media (max-width: 768px) {
		align-items: left;
	}
`

const Text = styled.p`
	color: var(--color-text-2);
	font-size: 12px;
	font-weight: 500;

	${({ theme }) => theme.mediaQueries.lg} {
		font-size: 14px;
		font-weight: 700;
	}
`;

const InactiveMultiplier = styled.div`
	width: 70px;
	height: 30px;
	background: #838386;
	padding-left: 7px;
	padding-right: 7px;
	border-radius: 11px;
	color: #fff;
	font-weight: bold;
	font-size: 13px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 52px;

	@media (max-width: 768px) {
		font-size: 12px;
		width: 65px;
		height: 25px;
		margin-left: 12px;
	}

	@media (max-width: 575px) {
		margin-left: 28px;
	}
`;
const Multiplier = styled.div`
	width: 40px;
	height: 30px;
	color: #fff;
	font-weight: bold;
	font-size: 13px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 15px;
`;

const MultiplierContainer = styled.div`
	position: relative;
	text-align: center;
	margin-left: 6px;
`
const MultiplierText = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 13px;
	font-weight: bold;
	color: #ffff
`

const Farm: React.FunctionComponent<FarmProps> = ({ label, pid, multiplier }) => {
	const { stakedBalance } = useFarmUser(pid);
	const TranslateString = useI18n();
	const rawStakedBalance = getBalanceNumber(stakedBalance);

	const images = label.split('-');
	const isToken = !label.includes('-');
	const showingLabel = isToken ? `${label}` : `${label} LP`;

	return (
		<Container>
			<WrapContent>
				{images.map((img, i) => {
					if (i === 0) {
						return <IconImage1 src={`/images/farms/${img}.png`} alt="icon" width={33} height={33} />;
					}
					return <IconImage src={`/images/farms/${img}.png`} alt="icon" width={33} height={33} />;
				})}
				<div style={{ marginLeft: isToken ? '18px' : '8px' }}>
					<Text>{showingLabel}</Text>
				</div>
			</WrapContent>
			{label === 'BNB-BIDR' ? <InactiveMultiplier>Inactive</InactiveMultiplier> : null }
		</Container>
	);
};

export default Farm;
