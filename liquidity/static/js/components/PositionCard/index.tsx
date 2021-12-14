import React, { useState } from 'react';
import { JSBI, Pair, Percent } from '@wardenswap/sdk';
import { Button, Card as UIKitCard, CardBody, useMatchBreakpoints } from '@pancakeswap-libs/uikit';
import { darken } from 'polished';
import { ChevronDown, ChevronUp } from 'react-feather';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTotalSupply } from '../../data/TotalSupply';

import { useActiveWeb3React } from '../../hooks';
import { useTokenBalance } from '../../state/wallet/hooks';
import { currencyId } from '../../utils/currencyId';
import { unwrappedToken } from '../../utils/wrappedCurrency';
import Card from '../Card';
import { AutoColumn } from '../Column';
import AppBody from '../../pages/AppBody';
import CurrencyLogo from '../CurrencyLogo';
import DoubleCurrencyLogo from '../DoubleLogo';
import { RowBetween, RowFixed, RowSpace, RowFlat } from '../Row';
import { Dots } from '../swap/styleds';
import { useSettingMode } from '../../state/hook';

export const FixedHeightRow = styled(RowBetween)`
	height: 24px;
`;

export const HoverCard = styled(Card)`
	border-bottom: 1px solid var(--color-border-2);
`;

export const ActiveButton = styled(Button)`
	background: #18b2a1;
	height: 55px;
	border-radius: 15px;
	padding: 20px;
	text-align: center;
	color: #fff;
	font-weight: bold;
	font-size: 14px;
`;

export const RemoveButton = styled(Button)`
	background: #fb7979;
	height: 55px;
	border-radius: 15px;
	padding: 20px;
	text-align: center;
	color: #fff;
	font-weight: bold;
	font-size: 14px;
`;

interface PositionCardProps {
	pair: Pair;
	// eslint-disable-next-line react/no-unused-prop-types
	showUnwrapped?: boolean;
}

export function MinimalPositionCard({ pair, showUnwrapped = false }: PositionCardProps) {
	const { account } = useActiveWeb3React();

	const currency0 = showUnwrapped ? pair.token0 : unwrappedToken(pair.token0);
	const currency1 = showUnwrapped ? pair.token1 : unwrappedToken(pair.token1);

	const [showMore, setShowMore] = useState(false);

	const userPoolBalance = useTokenBalance(account ?? undefined, pair.liquidityToken);
	const totalPoolTokens = useTotalSupply(pair.liquidityToken);

	const [token0Deposited, token1Deposited] =
		!!pair &&
		!!totalPoolTokens &&
		!!userPoolBalance &&
		// this condition is a short-circuit in the case where useTokenBalance updates sooner than useTotalSupply
		JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
			? [
					pair.getLiquidityValue(pair.token0, totalPoolTokens, userPoolBalance, false),
					pair.getLiquidityValue(pair.token1, totalPoolTokens, userPoolBalance, false),
			  ]
			: [undefined, undefined];

	return (
		<>
			{userPoolBalance && (
				<div>
					<div
						style={{
							display: 'inline-flex',
							justifyContent: 'space-between',
							width: '100%',
							marginBottom: '37px',
						}}
					>
						<p style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--color-text)' }}>
							LP Tokens in your Wallet
						</p>
					</div>
					<div style={{ padding: '10px 0 15px 0', borderBottom: '1px solid var(--color-border-4)' }}>
						<RowSpace>
							<RowFlat justify="flex-start">
								<DoubleCurrencyLogo currency0={currency0} currency1={currency1} size={33} margin />
								<p
									style={{
										color: 'var(--color-text-2)',
										fontWeight: 500,
										fontSize: '15px',
										marginLeft: '8px',
									}}
								>
									{currency0.symbol}/{currency1.symbol}
								</p>
							</RowFlat>
							<p style={{ color: 'var(--color-text-2)', fontWeight: 'bold', fontSize: '15px' }}>
								{userPoolBalance ? userPoolBalance.toSignificant(4) : '-'}
							</p>
						</RowSpace>
					</div>
					<div style={{ padding: '10px 0 15px 0', borderBottom: '1px solid var(--color-border-4)' }}>
						<RowSpace>
							<RowFlat justify="flex-start">
								<CurrencyLogo currency={currency0} size="33px" style={{ marginRight: 8 }} />
								<p style={{ color: 'var(--color-text-2)', fontWeight: 500, fontSize: '15px' }}>
									{currency0.symbol}
								</p>
							</RowFlat>
							{token0Deposited && (
								<p style={{ color: 'var(--color-text-2)', fontWeight: 'bold', fontSize: '15px' }}>
									{token0Deposited?.toSignificant(6)}
								</p>
							)}
						</RowSpace>
					</div>
					<div style={{ padding: '10px 0 15px 0', borderBottom: '1px solid var(--color-border-4)' }}>
						<RowSpace>
							<RowFlat justify="flex-start">
								<CurrencyLogo currency={currency1} size="33px" style={{ marginRight: 8 }} />
								<p style={{ color: 'var(--color-text-2)', fontWeight: 500, fontSize: '15px' }}>
									{currency1.symbol}
								</p>
							</RowFlat>
							{token1Deposited && (
								<p style={{ color: 'var(--color-text-2)', fontWeight: 'bold', fontSize: '15px' }}>
									{token1Deposited?.toSignificant(6)}
								</p>
							)}
						</RowSpace>
					</div>
				</div>
			)}
		</>
	);
}

export default function FullPositionCard({ pair }: PositionCardProps) {
	const { account } = useActiveWeb3React();
	const { spaceMode } = useSettingMode();

	const currency0 = unwrappedToken(pair.token0);
	const currency1 = unwrappedToken(pair.token1);

	const [showMore, setShowMore] = useState(false);

	const userPoolBalance = useTokenBalance(account ?? undefined, pair.liquidityToken);
	const totalPoolTokens = useTotalSupply(pair.liquidityToken);

	const poolTokenPercentage =
		!!userPoolBalance && !!totalPoolTokens && JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
			? new Percent(userPoolBalance.raw, totalPoolTokens.raw)
			: undefined;

	const [token0Deposited, token1Deposited] =
		!!pair &&
		!!totalPoolTokens &&
		!!userPoolBalance &&
		// this condition is a short-circuit in the case where useTokenBalance updates sooner than useTotalSupply
		JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
			? [
					pair.getLiquidityValue(pair.token0, totalPoolTokens, userPoolBalance, false),
					pair.getLiquidityValue(pair.token1, totalPoolTokens, userPoolBalance, false),
			  ]
			: [undefined, undefined];

	const truncate = (fullStr, strLen) => {
		if (fullStr.length <= strLen) return fullStr;
		const separator = '...';

		const sepLen = separator.length;
		const charsToShow = strLen - sepLen;
		const frontChars = Math.ceil(charsToShow / 2);
		const backChars = Math.floor(charsToShow / 2);

		return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars);
	};

	const { isXl } = useMatchBreakpoints();
	const isMobile = !isXl;

	return (
		<HoverCard>
			<FixedHeightRow onClick={() => setShowMore(!showMore)} style={{ cursor: 'pointer' }}>
				<RowSpace>
					<RowFixed width={isMobile ? '67%' : '100%'}>
						<RowFlat justify="flex-start">
							<DoubleCurrencyLogo currency0={currency0} currency1={currency1} margin size={20} />
							<p style={{ color: 'var(--color-text-2)', fontSize: '15px', fontWeight: 'bold' }}>
								{!currency0 || !currency1 ? (
									<Dots>Loading</Dots>
								) : (
									`${currency0.symbol} - ${currency1.symbol}`
								)}
							</p>
							<div
								style={{
									color: 'white',
									background: '#FFB703',
									marginLeft: '10px',
									width: '25px',
									height: '25px',
									borderRadius: '25px',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								+
							</div>
						</RowFlat>
					</RowFixed>
					{!isMobile && (
						<RowFlat width="80%">
							<p style={{ color: 'var(--color-text-2)', fontSize: '15px', fontWeight: 500 }}>
								{truncate(pair.liquidityToken.address, 13)}
							</p>
							<img
								src={`/images/farms/external-link${spaceMode ? '-space' : ''}.svg`}
								width="23px"
								height="23px"
								alt="link"
								style={{ marginLeft: '5px' }}
							/>
						</RowFlat>
					)}
					{showMore ? (
						<ChevronUp
							size={isMobile ? '24' : '36'}
							style={{ marginLeft: '10px' }}
							color="var(--color-primary)"
						/>
					) : (
						<ChevronDown
							size={isMobile ? '24' : '36'}
							style={{ marginLeft: '10px' }}
							color="var(--color-primary)"
						/>
					)}
				</RowSpace>
			</FixedHeightRow>
			{showMore && (
				<AutoColumn gap="8px">
					{isMobile && (
						<RowFlat justify="flex-start" mt="15px">
							<p style={{ color: 'var(--color-text-2)', fontSize: '15px', fontWeight: 500 }}>
								{truncate(pair.liquidityToken.address, 13)}
							</p>
							<img
								src="/images/farms/external-link.png"
								width="23px"
								height="23px"
								alt="link"
								style={{ marginLeft: '5px' }}
							/>
						</RowFlat>
					)}
					<FixedHeightRow>
						<p style={{ color: 'var(--color-text-2)', fontSize: '15px', fontWeight: 500 }}>LP Tokens</p>
						<p style={{ color: 'var(--color-text-2)', fontSize: '15px', fontWeight: 'bold' }}>
							{userPoolBalance ? userPoolBalance.toSignificant(4) : '-'}
						</p>
					</FixedHeightRow>
					<FixedHeightRow>
						<p style={{ color: 'var(--color-text-2)', fontSize: '15px', fontWeight: 500 }}>Share of Pool</p>
						<p style={{ color: '#18B2A1', fontSize: '15px', fontWeight: 'bold' }}>
							{poolTokenPercentage ? `${poolTokenPercentage.toFixed(2)}%` : '-'}
						</p>
					</FixedHeightRow>
					<FixedHeightRow>
						<p style={{ color: 'var(--color-text-2)', fontSize: '15px', fontWeight: 500 }}>
							{currency0.symbol} Deposited
						</p>
						{token0Deposited ? (
							<p style={{ color: 'var(--color-text-2)', fontSize: '15px', fontWeight: 'bold' }}>
								{token0Deposited?.toSignificant(6)}
							</p>
						) : (
							'-'
						)}
					</FixedHeightRow>
					<FixedHeightRow>
						<p style={{ color: 'var(--color-text-2)', fontSize: '15px', fontWeight: 500 }}>
							{currency1.symbol} Deposited
						</p>
						{token1Deposited ? (
							<p style={{ color: 'var(--color-text-2)', fontSize: '15px', fontWeight: 'bold' }}>
								{token1Deposited?.toSignificant(6)}
							</p>
						) : (
							'-'
						)}
					</FixedHeightRow>
					{isMobile ? (
						<div style={{ display: 'grid', width: '100%' }}>
							<ActiveButton
								as={Link}
								to={`/add/${currencyId(currency0)}/${currencyId(currency1)}`}
								style={{ width: '100%', margin: '20px 0' }}
							>
								Add LP Tokens
							</ActiveButton>
							<RemoveButton
								as={Link}
								style={{ width: '100%' }}
								to={`/remove/${currencyId(currency0)}/${currencyId(currency1)}`}
							>
								Remove LP Tokens
							</RemoveButton>
						</div>
					) : (
						<RowBetween marginTop="10px">
							<ActiveButton
								as={Link}
								to={`/add/${currencyId(currency0)}/${currencyId(currency1)}`}
								style={{ width: '48%' }}
							>
								Add LP Tokens
							</ActiveButton>
							<RemoveButton
								as={Link}
								style={{ width: '48%' }}
								to={`/remove/${currencyId(currency0)}/${currencyId(currency1)}`}
							>
								Remove LP Tokens
							</RemoveButton>
						</RowBetween>
					)}
				</AutoColumn>
			)}
		</HoverCard>
	);
}
