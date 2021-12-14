import React from 'react';
import styled from 'styled-components';

export interface EarnedProps {
	earnings: number;
	pid: number;
}

const Label = styled.div`
	display: block;
	font-weight: 500;
	font-size: 10px;
	line-height: 11px;
	color: var(--color-text-5);
	margin-bottom: 5px;
	text-align: center;

	${({ theme }) => theme.mediaQueries.sm} {
		display: none;
	}
`;

const Amount = styled.div<{ earned: number }>`
	color: ${({ earned }) => (earned ? 'var(--color-text-2)' : 'var(--color-text-3)')};
	font-size: 14px;
	display: block;
	align-items: center;
	text-align: center;

	${({ theme }) => theme.mediaQueries.lg} {
		color: ${({ earned }) => (earned ? 'var(--color-text-2)' : 'var(--color-text-3)')};
	}
`;

const Earned: React.FunctionComponent<EarnedProps> = ({ earnings }) => {
	const displayBalance = earnings !== null ? earnings.toLocaleString() : '0';

	return (
		<>
			<Label>Earn</Label>
			<Amount earned={earnings}>{displayBalance}</Amount>
		</>
	);
};

export default Earned;
