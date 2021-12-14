import { Currency } from '@wardenswap/sdk';
import React from 'react';
import styled from 'styled-components';
import CurrencyLogo from '../CurrencyLogo';

const Wrapper = styled.div<{ margin: boolean; sizeraw: number }>`
	position: relative;
	display: flex;
	flex-direction: row;
	margin-right: ${({ sizeraw, margin }) => margin && `${(sizeraw / 2.5 + 8).toString()}px`};
`;

interface DoubleCurrencyLogoProps {
	margin?: boolean;
	size?: number;
	currency0?: Currency;
	currency1?: Currency;
}

const HigherLogo = styled(CurrencyLogo)`
	z-index: 10;
`;
const CoveredLogo = styled(CurrencyLogo)<{ sizeraw: number }>`
	position: absolute;
	left: ${({ sizeraw }) => `${(sizeraw / 2).toString()}px`};
`;

export default function DoubleCurrencyLogo({
	currency0,
	currency1,
	size = 16,
	margin = false,
}: DoubleCurrencyLogoProps) {
	return (
		<Wrapper sizeraw={size} margin={margin}>
			{currency0 && <HigherLogo currency={currency0} size={`${size.toString()}px`} style={{ zIndex: 1 }} />}
			{currency1 && (
				<CoveredLogo
					currency={currency1}
					size={`${size.toString()}px`}
					style={{ position: 'absolute', left: `${(size / 1.5).toString()}px` }}
					sizeraw={size}
				/>
			)}
		</Wrapper>
	);
}
