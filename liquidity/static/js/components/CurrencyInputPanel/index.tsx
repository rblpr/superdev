import React, { useState, useCallback } from 'react';
import { Currency, Pair } from '@wardenswap/sdk';
import { Button, ChevronDownIcon, Text, useMatchBreakpoints } from '@pancakeswap-libs/uikit';
import styled from 'styled-components';
import { darken } from 'polished';
import useI18n from 'hooks/useI18n';
import { useCurrencyBalance } from '../../state/wallet/hooks';
import CurrencySearchModal from '../SearchModal/CurrencySearchModal';
import CurrencyLogo from '../CurrencyLogo';
import DoubleCurrencyLogo from '../DoubleLogo';
import { RowBetween } from '../Row';
import { Input as NumericalInput } from '../NumericalInput';
import { useActiveWeb3React } from '../../hooks';

const InputRow = styled.div<{ selected: boolean; isPair: boolean }>`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	color: #b3b3b3;
	width: ${({ isPair }) => (isPair ? `40%` : '100%')};
	padding: ${({ selected }) => (selected ? '0.75rem 0.5rem 0.75rem 1rem' : '0.75rem 0.75rem 0.75rem 1rem')};

	${({ theme }) => theme.mediaQueries.lg} {
		width: ${({ isPair }) => (isPair ? `35%` : '100%')};
	}
`;
const CurrencySelect = styled.button<{ selected: boolean }>`
	align-items: center;
	height: 34px;
	width: 60%;
	font-size: 16px;
	font-weight: 500;
	background-color: transparent;
	color: ${({ selected, theme }) => (selected ? theme.colors.text : '#FFFFFF')};
	border-radius: 12px;
	outline: none;
	cursor: pointer;
	user-select: none;
	border: none;
	border-radius: 7px;
	padding: 0 0.5rem;

	:hover {
		background-color: var(--color-background-10);
	}

	${({ theme }) => theme.mediaQueries.lg} {
		width: 180px;
	}
`;
const LabelRow = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	color: ${({ theme }) => theme.colors.text};
	font-size: 0.75rem;
	line-height: 1rem;
	padding: 0.75rem 1rem 0 1rem;
	span:hover {
		cursor: pointer;
		color: ${({ theme }) => darken(0.2, theme.colors.textSubtle)};
	}
`;
const Aligner = styled.span`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const InputPanel = styled.div<{ hideInput?: boolean }>`
	display: flex;
	flex-flow: column nowrap;
	position: relative;
	z-index: 1;
`;
const Container = styled.div<{ hideInput: boolean }>`
	border: 1px solid var(--color-border);
	border-radius: 15px;
	display: flex;
	align-items: center;
	padding: 10px;
	background: var(--color-background-2);
`;
interface CurrencyInputPanelProps {
	value: string;
	onUserInput: (value: string) => void;
	onMax?: () => void;
	showMaxButton: boolean;
	label?: string;
	onCurrencySelect?: (currency: Currency) => void;
	currency?: Currency | null;
	disableCurrencySelect?: boolean;
	hideBalance?: boolean;
	pair?: Pair | null;
	hideInput?: boolean;
	otherCurrency?: Currency | null;
	id: string;
	showCommonBases?: boolean;
}
export default function CurrencyInputPanel({
	value,
	onUserInput,
	onMax,
	showMaxButton,
	label,
	onCurrencySelect,
	currency,
	disableCurrencySelect = false,
	hideBalance = false,
	pair = null, // used for double token logo
	hideInput = false,
	otherCurrency,
	id,
	showCommonBases,
}: CurrencyInputPanelProps) {
	const [modalOpen, setModalOpen] = useState(false);
	const { account } = useActiveWeb3React();
	const selectedCurrencyBalance = useCurrencyBalance(account ?? undefined, currency ?? undefined);
	const TranslateString = useI18n();
	const translatedLabel = label || TranslateString(132, 'Input');
	const handleDismissSearch = useCallback(() => {
		setModalOpen(false);
	}, [setModalOpen]);

	const { isXl } = useMatchBreakpoints();
	const isMobile = !isXl;

	return (
		<InputPanel id={id}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					marginBottom: '6px',
					color: 'var(--color-text-2)',
				}}
			>
				<p style={{ fontWeight: 700, fontSize: isMobile ? '15px' : '18px', color: 'var(--color-text-2)' }}>
					You {id === 'liquidity-remove' ? 'Remove' : 'Add'}
				</p>
				<Text
					onClick={onMax}
					fontSize="13px"
					style={{
						display: 'inline',
						cursor: 'pointer',
						color:
							!hideBalance && !!currency && selectedCurrencyBalance ? 'var(--color-text-2)' : '#969696',
					}}
				>
					{!hideBalance && !!currency && selectedCurrencyBalance
						? `Balance: ${selectedCurrencyBalance?.toSignificant(6)}`
						: 'Balance: 0.00  ($0.00)'}
				</Text>
			</div>
			<Container hideInput={hideInput}>
				<CurrencySelect
					selected={!!currency}
					className="open-currency-select-button"
					onClick={() => {
						if (!disableCurrencySelect) {
							setModalOpen(true);
						}
					}}
				>
					<Aligner>
						{pair ? (
							<DoubleCurrencyLogo currency0={pair.token0} currency1={pair.token1} size={33} margin />
						) : currency ? (
							<CurrencyLogo currency={currency} size="24px" style={{ marginRight: '8px' }} />
						) : null}
						{pair ? (
							<Text color="var(--color-text-2)" fontSize={isMobile ? '13px' : '15px'} fontWeight="bold">
								{pair?.token0.symbol} - {pair?.token1.symbol}
							</Text>
						) : (
							<Text color="var(--color-text-2)" fontSize={isMobile ? '13px' : '15px'} fontWeight="bold">
								{(currency && currency.symbol && currency.symbol.length > 20
									? `${currency.symbol.slice(0, 4)}...${currency.symbol.slice(
											currency.symbol.length - 5,
											currency.symbol.length,
									  )}`
									: currency?.symbol) || TranslateString(1196, 'Select')}
							</Text>
						)}
						{!disableCurrencySelect && <ChevronDownIcon color="var(--color-text-2)" />}
					</Aligner>
				</CurrencySelect>
				<InputRow
					style={hideInput ? { padding: '0', borderRadius: '8px' } : {}}
					isPair={pair !== null}
					selected={disableCurrencySelect}
				>
					{!hideInput && (
						<>
							<NumericalInput
								className="token-amount-input"
								style={{
									color: 'var(--color-text-2)',
									fontSize: '22px',
									fontWeight: 'normal',
									border: 0,
								}}
								value={value}
								onUserInput={(val) => {
									onUserInput(val);
								}}
							/>
							{/* {account && currency && showMaxButton && label !== 'To' && (
                <Button onClick={onMax} scale="sm" variant="text">
                  MAX
                </Button>
              )} */}
						</>
					)}
				</InputRow>
			</Container>
			{!disableCurrencySelect && onCurrencySelect && (
				<CurrencySearchModal
					isOpen={modalOpen}
					onDismiss={handleDismissSearch}
					onCurrencySelect={onCurrencySelect}
					selectedCurrency={currency}
					otherSelectedCurrency={otherCurrency}
					showCommonBases={showCommonBases}
				/>
			)}
		</InputPanel>
	);
}
