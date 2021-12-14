import React from 'react';
import styled from 'styled-components';

export interface LiquidityProps {
	liquidity: number;
}

const Label = styled.p`
	font-weight: 500;
	font-size: 10px;
	color: var(--color-text-2);
	margin-right: 5px;
	text-align: center;

	${({ theme }) => theme.mediaQueries.xs} {
		font-size: 10px;
	}

	${({ theme }) => theme.mediaQueries.sm} {
		font-size: 10px;
	}

	${({ theme }) => theme.mediaQueries.lg} {
		font-size: 14px;
	}
`;

const LiquidityWrapper = styled.div`
	min-width: 110px;
	font-weight: 600;
	text-align: center;

	${({ theme }) => theme.mediaQueries.sm} {
		text-align: center;
	}
`;

const Container = styled.div`
	display: flex;
	align-items: center;
	text-align: center;

	svg {
		margin-left: 14px;
	}

	${({ theme }) => theme.mediaQueries.sm} {
		svg {
			margin-left: 0;
		}
	}
`;

const Liquidity: React.FunctionComponent<LiquidityProps> = ({ liquidity }) => {
	const displayLiquidity = liquidity
		? `$${Number(liquidity).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
		: '-';

	return (
		<Container>
			<LiquidityWrapper>
				<Label>{displayLiquidity}</Label>
			</LiquidityWrapper>
		</Container>
	);
};

export default Liquidity;
