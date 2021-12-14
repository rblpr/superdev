import React from 'react';
import styled from 'styled-components';
import BigNumber from 'bignumber.js';
import { Text, Button, Input, InputProps, Flex, Link } from '@pancakeswap-libs/uikit';
import useI18n from '../../hooks/useI18n';

interface ModalInputProps {
	max: string;
	symbol: string;
	onSelectMax?: () => void;
	onChange: (value) => void;
	placeholder?: string;
	value: string;
	addLiquidityUrl?: string;
	inputTitle?: string;
}

const getBoxShadow = ({ isWarning = false, theme }) => {
	if (isWarning) {
		return theme.shadows.warning;
	}

	return theme.shadows.inset;
};

const StyledTokenInput = styled.div<InputProps>`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.input};
	border-radius: 16px;
	box-shadow: ${getBoxShadow};
	color: ${({ theme }) => theme.colors.text};
	padding: 8px 16px 8px 0;
	width: 100%;
`;

const StyledInput = styled.input`
	font-size: 25px;
	font-weight: 500;
	color: var(--color-text-2);
	margin-left: 15px;
	border: none;
	width: 35%;
	${({ theme }) => theme.mediaQueries.lg} {
		width: 70%;
	}
`;

const StyledErrorMessage = styled(Text)`
	position: absolute;
	bottom: -22px;
	a {
		display: inline;
	}
`;

const IconImage = styled.img`
	width: 33px;
	height: 33px;
	position: absolute;
	left: 25px;
`;

const IconImage1 = styled.img`
	width: 33px;
	height: 33px;
	z-index: 10;
`;

const ValueSelect = styled.div`
	cursor: pointer;
	margin: 0 5px;
	border: 1px solid var(--color-border-2);
	border-radius: 10px;
	padding: 8px;
	width: 55px;
	text-align: center;
	font-weight: 500;
	font-size: 12px;
	color: var(--color-text-btn);
	background: var(--color-background-3);
`;

const ValueSelectActive = styled.div`
	cursor: pointer;
	margin: 0 5px;
	background: var(--color-background-9);
	border-radius: 10px;
	padding: 8px;
	width: 55px;
	text-align: center;
	font-weight: 500;
	font-size: 12px;
	color: var(--color-text-btn-hover);
`;
const ValueSelectDisabled = styled.div`
	cursor: not-allowed;
	margin: 0 5px;
	background: #eaeaea;
	border-radius: 10px;
	padding: 8px;
	width: 55px;
	text-align: center;
	font-weight: 500;
	font-size: 12px;
	color: #9e9e9e;
`;

const ModalInput: React.FC<ModalInputProps> = ({
	max,
	symbol,
	onChange,
	onSelectMax,
	value,
	addLiquidityUrl,
	inputTitle,
}) => {
	const TranslateString = useI18n();
	const isBalanceZero = max === '0' || !max;

	const displayBalance = isBalanceZero ? '0' : parseFloat(max).toFixed(4);
	const displayValue =
		value && value !== null && value !== '' ? parseFloat(value).toFixed(4) : parseFloat(max).toFixed(4);

	let images = [];
	const parts = symbol.split(' ');
	console.log('parts', parts);
	if (parts.length === 2) {
		images = parts[0].split('-');
	} else if (parts.length === 1) {
		images = [parts[0]];
	}

	const selectedList = [
		{ label: '25%', value: new BigNumber(parseFloat(max) * 0.25) },
		{ label: '50%', value: new BigNumber(parseFloat(max) * 0.5) },
		{ label: '75%', value: new BigNumber(parseFloat(max) * 0.75) },
		{ label: '100%', value: new BigNumber(max) },
	];
	return (
		<div style={{ position: 'relative' }}>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<p style={{ fontWeight: 700, fontSize: '15px' }}>{inputTitle}</p>
				<p style={{ fontSize: '13px', fontWeight: 400 }}>
					{TranslateString(1120, 'Balance')}: {displayBalance.toLocaleString()}
				</p>
			</div>
			<div
				style={{
					display: 'inline-flex',
					alignItems: 'center',
					padding: '19px 17px',
					border: '1px solid var(--color-border)',
					borderRadius: '15px',
					backgroundColor: 'var(--color-background-2)',
					width: '100%',
					marginTop: '6px',
				}}
			>
				<div style={{ position: 'relative', display: 'flex', width: '70px' }}>
					<IconImage1 src={`/images/farms/${images[0]}.png`} alt="icon" width={33} height={33} />
					{images[1] ? (
						<IconImage src={`/images/farms/${images[1]}.png`} alt="icon" width={33} height={33} />
					) : null}
				</div>
				<p style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--color-text-2)' }}>{symbol}</p>
				<StyledInput onChange={(e) => onChange(e.target.value)} placeholder="0" value={value} />
			</div>
			<div style={{ display: 'inline-flex', marginTop: '20px', justifyContent: 'center', width: '100%' }}>
				{selectedList.map((s) => {
					if (parseFloat(max) === 0) {
						return <ValueSelectDisabled onClick={() => null}>{s.label}</ValueSelectDisabled>;
					}

					if (s.value.toString() === value) {
						return <ValueSelectActive onClick={() => null}>{s.label}</ValueSelectActive>;
					}

					return <ValueSelect onClick={() => onChange(s.value.toString())}>{s.label}</ValueSelect>;
				})}
			</div>
			{/* <StyledTokenInput isWarning={isBalanceZero}>
        <Flex justifyContent="space-between" pl="16px">
          <Text fontSize="14px">{inputTitle}</Text>
          <Text fontSize="14px">
            {TranslateString(1120, 'Balance')}: {displayBalance.toLocaleString()}
          </Text>
        </Flex>
        <Flex alignItems="flex-end" justifyContent="space-around">
          <StyledInput onChange={onChange} placeholder="0" value={value} />
          <Button scale="sm" onClick={onSelectMax} mr="8px">
            {TranslateString(452, 'Max')}
          </Button>
          <Text fontSize="16px">{symbol}</Text>
        </Flex>
      </StyledTokenInput>
      {isBalanceZero && (
        <StyledErrorMessage fontSize="14px" color="failure">
          No tokens to stake:{' '}
          <Link fontSize="14px" bold={false} href={addLiquidityUrl} external color="failure">
            {TranslateString(999, 'get')} {symbol}
          </Link>
        </StyledErrorMessage>
      )} */}
		</div>
	);
};

export default ModalInput;
