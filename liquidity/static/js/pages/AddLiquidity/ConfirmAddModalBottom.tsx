import { Currency, CurrencyAmount, Fraction, Percent } from '@wardenswap/sdk';
import React from 'react';
import styled from 'styled-components';
import { useMatchBreakpoints } from '@pancakeswap-libs/uikit';
import { TranslateString } from 'utils/translateTextHelpers';
import { useSettingMode } from 'state/hook';
import { RowBetween, RowFixed } from '../../components/Row';
import CurrencyLogo from '../../components/CurrencyLogo';
import { Field } from '../../state/mint/actions';

const ActiveButton = styled.div`
	cursor: pointer;
	width: 100%;
	height: 55px;
	background: #82affb;
	border-radius: 15px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 15px auto 0;
	font-weight: bold;
	font-size: 18px;
`;

export function ConfirmAddModalBottom({
	noLiquidity,
	price,
	currencies,
	parsedAmounts,
	poolTokenPercentage,
	onAdd,
}: {
	noLiquidity?: boolean;
	price?: Fraction;
	currencies: { [field in Field]?: Currency };
	parsedAmounts: { [field in Field]?: CurrencyAmount };
	poolTokenPercentage?: Percent;
	onAdd: () => void;
}) {
	const { isXl } = useMatchBreakpoints();
	const isMobile = !isXl;
	const { spaceMode } = useSettingMode();

	return (
		<>
			<div style={{ borderBottom: '1px solid var(--color-border-7)', padding: '20px 0' }}>
				<RowBetween>
					<RowFixed width={isMobile ? '50%' : '35%'}>
						<RowBetween>
							<CurrencyLogo
								size="25px"
								currency={currencies[Field.CURRENCY_A]}
								style={{ marginRight: '8px' }}
							/>
							<p
								style={{
									fontSize: isMobile ? '13px' : '15px',
									fontWeight: 'bold',
									color: 'var(--color-text-2)',
								}}
							>
								{currencies[Field.CURRENCY_A]?.symbol} Deposited
							</p>
						</RowBetween>
					</RowFixed>
					<p
						style={{
							fontSize: isMobile ? '13px' : '15px',
							fontWeight: 'bold',
							color: 'var(--color-text-2)',
						}}
					>
						{parsedAmounts[Field.CURRENCY_A]?.toSignificant(6)}
					</p>
				</RowBetween>
				<RowBetween>
					<div style={{ display: 'inline-block', textAlign: 'right', width: isMobile ? '50%' : '35%' }}>
						<p style={{ fontSize: '13px', color: 'var(--color-text-4)', fontWeight: 'bold' }}>{`1 ${
							currencies[Field.CURRENCY_A]?.symbol
						}`}</p>
					</div>
					<p
						style={{ fontSize: '13px', color: 'var(--color-text-4)', fontWeight: 'bold' }}
					>{`${price?.invert().toSignificant(4)} ${currencies[Field.CURRENCY_A]?.symbol}`}</p>
				</RowBetween>
			</div>
			<div style={{ borderBottom: '1px solid var(--color-border-7)', paddingBottom: '20px' }}>
				<RowBetween>
					<RowFixed width={isMobile ? '50%' : '35%'}>
						<RowBetween>
							<CurrencyLogo
								size="25px"
								currency={currencies[Field.CURRENCY_B]}
								style={{ marginRight: '8px' }}
							/>
							<p
								style={{
									fontSize: isMobile ? '13px' : '15px',
									fontWeight: 'bold',
									color: 'var(--color-text-2)',
								}}
							>
								{currencies[Field.CURRENCY_B]?.symbol} Deposited
							</p>
						</RowBetween>
					</RowFixed>
					<p
						style={{
							fontSize: isMobile ? '13px' : '15px',
							fontWeight: 'bold',
							color: 'var(--color-text-2)',
						}}
					>
						{parsedAmounts[Field.CURRENCY_B]?.toSignificant(6)}
					</p>
				</RowBetween>
				<RowBetween>
					<div style={{ display: 'inline-block', textAlign: 'right', width: isMobile ? '50%' : '35%' }}>
						<p style={{ fontSize: '13px', color: 'var(--color-text-4)', fontWeight: 'bold' }}>{`1 ${
							currencies[Field.CURRENCY_B]?.symbol
						}`}</p>
					</div>
					<p
						style={{ fontSize: '13px', color: 'var(--color-text-4)', fontWeight: 'bold' }}
					>{`${price?.invert().toSignificant(4)} ${currencies[Field.CURRENCY_B]?.symbol}`}</p>
				</RowBetween>
			</div>
			<RowBetween>
				<RowFixed width={isMobile ? '50%' : '35%'}>
					<RowBetween>
						<img src={`/images/org${spaceMode ? '-space' : ''}.svg`} alt="org" width="24px" height="24px" />
						<p
							style={{
								fontSize: isMobile ? '13px' : '15px',
								fontWeight: 'bold',
								color: 'var(--color-text-2)',
							}}
						>
							Share of Pool
						</p>
					</RowBetween>
				</RowFixed>
				<p style={{ fontSize: isMobile ? '13px' : '15px', fontWeight: 'bold', color: '#18B2A1' }}>
					{noLiquidity ? '100' : poolTokenPercentage?.toSignificant(4)}%
				</p>
			</RowBetween>
			<ActiveButton onClick={onAdd}>{noLiquidity ? 'Create Pool & Supply' : 'Confirm Supply'}</ActiveButton>
		</>
	);
}

export default ConfirmAddModalBottom;
