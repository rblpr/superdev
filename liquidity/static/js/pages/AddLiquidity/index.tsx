import React, { useCallback, useState, useMemo } from 'react';
import { BigNumber } from '@ethersproject/bignumber';
import { TransactionResponse } from '@ethersproject/providers';
import { Currency, currencyEquals, ETHER, TokenAmount, WETH, Pair } from '@wardenswap/sdk';
import {
	Button,
	Text as UIKitText,
	ChevronDownIcon,
	useWalletModal,
	ConnectorNames,
	useModal,
	useMatchBreakpoints,
} from '@pancakeswap-libs/uikit';
import { useSettingMode } from 'state/hook';
import { connectorsByName } from 'connectors';
import { RouteComponentProps } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import { LightCard } from 'components/Card';
import { AutoColumn } from 'components/Column';
import TransactionConfirmationModal, { ConfirmationModalContent } from 'components/TransactionConfirmationModal';
import CurrencyInputPanel from 'components/CurrencyInputPanel';
import DoubleCurrencyLogo from 'components/DoubleLogo';
import FullPositionCard from 'components/PositionCard';
import { RowBetween, RowFlat } from 'components/Row';

import { PairState, usePairs } from 'data/Reserves';
import { useActiveWeb3React } from 'hooks';
import { useCurrency } from 'hooks/Tokens';
import { ApprovalState, useApproveCallback } from 'hooks/useApproveCallback';
import styled from 'styled-components';
import { Field } from 'state/mint/actions';
import { useDerivedMintInfo, useMintActionHandlers, useMintState } from 'state/mint/hooks';
import { useTokenBalancesWithLoadingIndicator } from 'state/wallet/hooks';

import { useTransactionAdder } from 'state/transactions/hooks';
import {
	useIsExpertMode,
	useUserDeadline,
	useUserSlippageTolerance,
	toV2LiquidityToken,
	useTrackedTokenPairs,
} from 'state/user/hooks';
import { calculateGasMargin, calculateSlippageAmount, getRouterContract } from 'utils';
import { maxAmountSpend } from 'utils/maxAmountSpend';
import { wrappedCurrency } from 'utils/wrappedCurrency';
import { currencyId } from 'utils/currencyId';
import ConnectWalletButton from 'components/ConnectWalletButton';
import useI18n from 'hooks/useI18n';
import AppBody from '../AppBody';
import { Dots, Wrapper } from '../Pool/styleds';
import { MinimalPositionCard } from '../../components/PositionCard';
import { ConfirmAddModalBottom } from './ConfirmAddModalBottom';
import { PoolPriceBar } from './PoolPriceBar';
import { ROUTER_ADDRESS } from '../../constants';
import Header from '../../components/Header';
import ConnectWalletButtonOnMobile from '../../components/ConnectWalletButtonOnMobile';
import ContactInfo from '../../components/Header/ContactInfo';

import MenuModal from './MenuModal';

import '../style.scss';
// const Header = styled.div`
//   width: 100%;
//   display: inline-flex;
//   justify-content: space-between;
//   & > .col:first-child {
//     width: 130px;
//   }

//   ${({ theme }) => theme.mediaQueries.lg} {
//     align-items: center;
//     padding: 0;
//     & > .col:first-child {
//       width: 200px;
//     }
//     & > .col.hide-lg {
//       display: none;
//     }
//   }
// `

const Logo = styled.img`
	width: 130px;
	margin-top: 5px;
	margin-left: 5px;
	${({ theme }) => theme.mediaQueries.lg} {
		width: 200px;
		margin-top: 0;
		margin-left: 0;
	}
`;

const ArrowIcon = styled(ChevronDownIcon)`
	height: 25px;
	width: 30px;
	transform: rotate(180deg);
	${({ theme }) => theme.mediaQueries.lg} {
		height: 16px;
		transform: rotate(0deg);
	}
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
	background-color: var(--color-background-3);
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
	color: var(--color-text-invert);
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

const ActiveButton = styled.div`
	width: 100%;
	height: 55px;
	background: #82affb;
	border-radius: 15px;
	cursor: pointer;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 15px auto;
	font-weight: bold;
	font-size: 18px;
	cursor: pointer;
`;

const InActiveButton = styled.div`
	width: 100%;
	height: 55px;
	background: #e9e9e9;
	border-radius: 15px;
	color: #bdbdbd;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 15px auto;
	font-weight: bold;
	font-size: 18px;
	cursor: not-allowed;
`;

const Divider = styled.div`
	position: absolute;
	bottom: -23px;
	width: calc(100vw - 100px);
	display: flex;
	justify-content: center;
	& > div {
		width: 45px;
		height: 45px;
		border-radius: 30px;
		background: #202251;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	${({ theme }) => theme.mediaQueries.sm} {
		width: 445px;
	}
`;

export default function AddLiquidity({
	match: {
		params: { currencyIdA, currencyIdB },
	},
	history,
}: RouteComponentProps<{ currencyIdA?: string; currencyIdB?: string }>) {
	const { account, chainId, library } = useActiveWeb3React();
	const currencyA = useCurrency(currencyIdA);
	const currencyB = useCurrency(currencyIdB);
	const TranslateString = useI18n();
	const { spaceMode } = useSettingMode();

	const oneCurrencyIsWETH = Boolean(
		chainId &&
			((currencyA && currencyEquals(currencyA, WETH[chainId])) ||
				(currencyB && currencyEquals(currencyB, WETH[chainId]))),
	);
	const expertMode = useIsExpertMode();

	// mint state
	const { independentField, typedValue, otherTypedValue } = useMintState();
	const {
		dependentField,
		currencies,
		pair,
		pairState,
		currencyBalances,
		parsedAmounts,
		price,
		noLiquidity,
		liquidityMinted,
		poolTokenPercentage,
		error,
	} = useDerivedMintInfo(currencyA ?? undefined, currencyB ?? undefined);
	const { onFieldAInput, onFieldBInput } = useMintActionHandlers(noLiquidity);

	const isValid = !error;

	// modal and loading
	const [showConfirm, setShowConfirm] = useState<boolean>(false);
	const [attemptingTxn, setAttemptingTxn] = useState<boolean>(false); // clicked confirm

	// txn values
	const [deadline] = useUserDeadline(); // custom from users settings
	const [allowedSlippage] = useUserSlippageTolerance(); // custom from users
	const [txHash, setTxHash] = useState<string>('');

	// get formatted amounts
	const formattedAmounts = {
		[independentField]: typedValue,
		[dependentField]: noLiquidity ? otherTypedValue : parsedAmounts[dependentField]?.toSignificant(6) ?? '',
	};

	// get the max amounts user can add
	const maxAmounts: { [field in Field]?: TokenAmount } = [Field.CURRENCY_A, Field.CURRENCY_B].reduce(
		(accumulator, field) => {
			return {
				...accumulator,
				[field]: maxAmountSpend(currencyBalances[field]),
			};
		},
		{},
	);

	const atMaxAmounts: { [field in Field]?: TokenAmount } = [Field.CURRENCY_A, Field.CURRENCY_B].reduce(
		(accumulator, field) => {
			return {
				...accumulator,
				[field]: maxAmounts[field]?.equalTo(parsedAmounts[field] ?? '0'),
			};
		},
		{},
	);

	// fetch the user's balances of all tracked V2 LP tokens
	const trackedTokenPairs = useTrackedTokenPairs();
	const tokenPairsWithLiquidityTokens = useMemo(
		() => trackedTokenPairs.map((tokens) => ({ liquidityToken: toV2LiquidityToken(tokens), tokens })),
		[trackedTokenPairs],
	);
	const liquidityTokens = useMemo(() => tokenPairsWithLiquidityTokens.map((tpwlt) => tpwlt.liquidityToken), [
		tokenPairsWithLiquidityTokens,
	]);
	const [v2PairsBalances, fetchingV2PairBalances] = useTokenBalancesWithLoadingIndicator(
		account ?? undefined,
		liquidityTokens,
	);

	// fetch the reserves for all V2 pools in which the user has a balance
	const liquidityTokensWithBalances = useMemo(
		() =>
			tokenPairsWithLiquidityTokens.filter(({ liquidityToken }) =>
				v2PairsBalances[liquidityToken.address]?.greaterThan('0'),
			),
		[tokenPairsWithLiquidityTokens, v2PairsBalances],
	);

	const v2Pairs = usePairs(liquidityTokensWithBalances.map(({ tokens }) => tokens));
	const v2IsLoading =
		fetchingV2PairBalances ||
		v2Pairs?.length < liquidityTokensWithBalances.length ||
		v2Pairs?.some((V2Pair) => !V2Pair);

	const allV2PairsWithLiquidity = v2Pairs
		.map(([, _pair]) => _pair)
		.filter((v2Pair): v2Pair is Pair => Boolean(v2Pair));

	// check whether the user has approved the router on the tokens
	const [approvalA, approveACallback] = useApproveCallback(parsedAmounts[Field.CURRENCY_A], ROUTER_ADDRESS);
	const [approvalB, approveBCallback] = useApproveCallback(parsedAmounts[Field.CURRENCY_B], ROUTER_ADDRESS);

	const addTransaction = useTransactionAdder();

	async function onAdd() {
		if (!chainId || !library || !account) return;
		const router = getRouterContract(chainId, library, account);

		const { [Field.CURRENCY_A]: parsedAmountA, [Field.CURRENCY_B]: parsedAmountB } = parsedAmounts;
		if (!parsedAmountA || !parsedAmountB || !currencyA || !currencyB) {
			return;
		}

		const amountsMin = {
			[Field.CURRENCY_A]: calculateSlippageAmount(parsedAmountA, noLiquidity ? 0 : allowedSlippage)[0],
			[Field.CURRENCY_B]: calculateSlippageAmount(parsedAmountB, noLiquidity ? 0 : allowedSlippage)[0],
		};

		const deadlineFromNow = Math.ceil(Date.now() / 1000) + deadline;

		let estimate;
		let method: (...args: any) => Promise<TransactionResponse>;
		let args: Array<string | string[] | number>;
		let value: BigNumber | null;
		if (currencyA === ETHER || currencyB === ETHER) {
			const tokenBIsETH = currencyB === ETHER;
			estimate = router.estimateGas.addLiquidityETH;
			method = router.addLiquidityETH;
			args = [
				wrappedCurrency(tokenBIsETH ? currencyA : currencyB, chainId)?.address ?? '', // token
				(tokenBIsETH ? parsedAmountA : parsedAmountB).raw.toString(), // token desired
				amountsMin[tokenBIsETH ? Field.CURRENCY_A : Field.CURRENCY_B].toString(), // token min
				amountsMin[tokenBIsETH ? Field.CURRENCY_B : Field.CURRENCY_A].toString(), // eth min
				account,
				deadlineFromNow,
			];
			value = BigNumber.from((tokenBIsETH ? parsedAmountB : parsedAmountA).raw.toString());
		} else {
			estimate = router.estimateGas.addLiquidity;
			method = router.addLiquidity;
			args = [
				wrappedCurrency(currencyA, chainId)?.address ?? '',
				wrappedCurrency(currencyB, chainId)?.address ?? '',
				parsedAmountA.raw.toString(),
				parsedAmountB.raw.toString(),
				amountsMin[Field.CURRENCY_A].toString(),
				amountsMin[Field.CURRENCY_B].toString(),
				account,
				deadlineFromNow,
			];
			value = null;
		}

		setAttemptingTxn(true);
		// const aa = await estimate(...args, value ? { value } : {})
		await estimate(...args, value ? { value } : {})
			.then((estimatedGasLimit) =>
				method(...args, {
					...(value ? { value } : {}),
					gasLimit: calculateGasMargin(estimatedGasLimit),
				}).then((response) => {
					setAttemptingTxn(false);

					addTransaction(response, {
						summary: `Add ${parsedAmounts[Field.CURRENCY_A]?.toSignificant(3)} ${
							currencies[Field.CURRENCY_A]?.symbol
						} and ${parsedAmounts[Field.CURRENCY_B]?.toSignificant(3)} ${
							currencies[Field.CURRENCY_B]?.symbol
						}`,
					});

					setTxHash(response.hash);
				}),
			)
			.catch((e) => {
				setAttemptingTxn(false);
				// we only care if the error is something _other_ than the user rejected the tx
				if (e?.code !== 4001) {
					console.error(e);
				}
			});
	}

	const modalHeader = () => {
		return noLiquidity ? (
			<AutoColumn gap="20px">
				<LightCard mt="20px" borderRadius="20px">
					<RowFlat>
						<DoubleCurrencyLogo
							currency0={currencies[Field.CURRENCY_A]}
							currency1={currencies[Field.CURRENCY_B]}
							size={isMobile ? 25 : 33}
							margin
						/>
						<div style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '17px' }}>
							{`${currencies[Field.CURRENCY_A]?.symbol} - ${currencies[Field.CURRENCY_B]?.symbol}`}
						</div>
					</RowFlat>
				</LightCard>
			</AutoColumn>
		) : (
			<AutoColumn gap="20px">
				<p
					style={{
						fontSize: isMobile ? '35px' : '48px',
						color: 'var(--color-text-2)',
						fontWeight: 'bold',
						textAlign: 'center',
						marginTop: isMobile ? '10px' : '30px',
					}}
				>
					{liquidityMinted?.toSignificant(6)}
				</p>
				<RowFlat>
					<DoubleCurrencyLogo
						currency0={currencies[Field.CURRENCY_A]}
						currency1={currencies[Field.CURRENCY_B]}
						size={isMobile ? 25 : 33}
						margin
					/>
					<div style={{ fontSize: isMobile ? '13px' : '18px', fontWeight: 'bold', marginLeft: '17px' }}>
						{`${currencies[Field.CURRENCY_A]?.symbol}/${currencies[Field.CURRENCY_B]?.symbol}`}
					</div>
				</RowFlat>
				{/* <Row>
          <UIKitText fontSize="24px">
            {`${currencies[Field.CURRENCY_A]?.symbol}/${currencies[Field.CURRENCY_B]?.symbol} Pool Tokens`}
          </UIKitText>
        </Row>
        <UIKitText small textAlign="left" padding="8px 0 0 0 " style={{ fontStyle: 'italic' }}>
          {`Output is estimated. If the price changes by more than ${
            allowedSlippage / 100
          }% your transaction will revert.`}
        </UIKitText> */}
			</AutoColumn>
		);
	};

	const modalBottom = () => {
		return (
			<ConfirmAddModalBottom
				price={price}
				currencies={currencies}
				parsedAmounts={parsedAmounts}
				noLiquidity={noLiquidity}
				onAdd={onAdd}
				poolTokenPercentage={poolTokenPercentage}
			/>
		);
	};

	const pendingText = `Supplying ${parsedAmounts[Field.CURRENCY_A]?.toSignificant(6)} ${
		currencies[Field.CURRENCY_A]?.symbol
	} and ${parsedAmounts[Field.CURRENCY_B]?.toSignificant(6)} ${currencies[Field.CURRENCY_B]?.symbol}`;

	const handleCurrencyASelect = useCallback(
		(currA: Currency) => {
			const newCurrencyIdA = currencyId(currA);
			if (newCurrencyIdA === currencyIdB) {
				history.push(`/${currencyIdB}/${currencyIdA}`);
			} else {
				history.push(`/${newCurrencyIdA}/${currencyIdB}`);
			}
		},
		[currencyIdB, history, currencyIdA],
	);
	const handleCurrencyBSelect = useCallback(
		(currB: Currency) => {
			const newCurrencyIdB = currencyId(currB);
			if (currencyIdA === newCurrencyIdB) {
				if (currencyIdB) {
					history.push(`/${currencyIdB}/${newCurrencyIdB}`);
				} else {
					history.push(`/${newCurrencyIdB}`);
				}
			} else {
				history.push(`/${currencyIdA || 'ETH'}/${newCurrencyIdB}`);
			}
		},
		[currencyIdA, history, currencyIdB],
	);

	const handleDismissConfirmation = useCallback(() => {
		setShowConfirm(false);
		// if there was a tx hash, we want to clear the input
		if (txHash) {
			onFieldAInput('');
		}
		setTxHash('');
	}, [onFieldAInput, txHash]);

	const selectedAList = [
		{ label: '25%', value: Number(maxAmounts[Field.CURRENCY_A]?.toExact()) * 0.25 ?? 0 },
		{ label: '50%', value: Number(maxAmounts[Field.CURRENCY_A]?.toExact()) * 0.5 ?? 0 },
		{ label: '75%', value: Number(maxAmounts[Field.CURRENCY_A]?.toExact()) * 0.75 ?? 0 },
		{ label: '100%', value: maxAmounts[Field.CURRENCY_A]?.toExact() ?? 0 },
	];

	const selectedBList = [
		{ label: '25%', value: Number(maxAmounts[Field.CURRENCY_B]?.toExact()) * 0.25 ?? 0 },
		{ label: '50%', value: Number(maxAmounts[Field.CURRENCY_B]?.toExact()) * 0.5 ?? 0 },
		{ label: '75%', value: Number(maxAmounts[Field.CURRENCY_B]?.toExact()) * 0.75 ?? 0 },
		{ label: '100%', value: maxAmounts[Field.CURRENCY_B]?.toExact() ?? 0 },
	];

	const { isXl } = useMatchBreakpoints();
	const isMobile = !isXl;
	return (
		<>
			<div id="app" className="main-app">
				<Header />
				<ConnectWalletButtonOnMobile isCorrectNetwork />
				<div className="main-container">
					<div className="best-rate-swap-container">
						<div className="mb-6 best-rate-swap-box">
							<div style={{ marginBottom: '37px' }}>
								<p style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--color-text)' }}>
									Add Liquidity
								</p>
							</div>
							<Wrapper>
								<TransactionConfirmationModal
									isOpen={showConfirm}
									onDismiss={handleDismissConfirmation}
									attemptingTxn={attemptingTxn}
									hash={txHash}
									title={
										noLiquidity
											? TranslateString(1154, 'Confirm Supply')
											: TranslateString(1156, 'You will receive')
									}
									content={() => (
										<ConfirmationModalContent
											title={
												noLiquidity
													? TranslateString(1154, 'Confirm Supply')
													: TranslateString(1156, 'You will receive')
											}
											onDismiss={handleDismissConfirmation}
											topContent={modalHeader}
											bottomContent={modalBottom}
										/>
									)}
									pendingText={pendingText}
								/>
								<div>
									<div>
										<CurrencyInputPanel
											value={formattedAmounts[Field.CURRENCY_A]}
											onUserInput={onFieldAInput}
											onMax={() => {
												onFieldAInput(maxAmounts[Field.CURRENCY_A]?.toExact() ?? '');
											}}
											onCurrencySelect={(e) => {
												handleCurrencyASelect(e);
												onFieldAInput('');
											}}
											showMaxButton={!atMaxAmounts[Field.CURRENCY_A]}
											currency={currencies[Field.CURRENCY_A]}
											id="add-liquidity-input-tokena"
											showCommonBases={false}
										/>
										<div
											style={{
												display: 'inline-flex',
												marginTop: '20px',
												justifyContent: 'center',
												width: '100%',
												color: 'var(--color-text)',
											}}
										>
											{selectedAList.map((s) => {
												if (
													maxAmounts[Field.CURRENCY_A]?.toExact() === '0' ||
													!maxAmounts[Field.CURRENCY_A]?.toExact()
												) {
													return (
														<ValueSelectDisabled onClick={() => null}>
															{s.label}
														</ValueSelectDisabled>
													);
												}

												if (Number(s.value) === Number(formattedAmounts[Field.CURRENCY_A])) {
													return (
														<ValueSelectActive onClick={() => null}>
															{s.label}
														</ValueSelectActive>
													);
												}

												return (
													<ValueSelect
														onClick={() => {
															onFieldAInput(s.value.toString());
														}}
													>
														{s.label}
													</ValueSelect>
												);
											})}
										</div>
									</div>
									<div className="divider" style={{ background: 'var(--color-border-2)' }}>
										<img src="/images/plus.png" className="circle-swap" alt="icon" />
									</div>
									<div>
										<CurrencyInputPanel
											value={formattedAmounts[Field.CURRENCY_B]}
											onUserInput={onFieldBInput}
											onCurrencySelect={(e) => {
												handleCurrencyBSelect(e);
												onFieldBInput('');
											}}
											onMax={() => {
												onFieldBInput(maxAmounts[Field.CURRENCY_B]?.toExact() ?? '');
											}}
											showMaxButton={!atMaxAmounts[Field.CURRENCY_B]}
											currency={currencies[Field.CURRENCY_B]}
											id="add-liquidity-input-tokenb"
											showCommonBases={false}
										/>
										<div
											style={{
												display: 'inline-flex',
												marginTop: '20px',
												justifyContent: 'center',
												width: '100%',
											}}
										>
											{selectedBList.map((s) => {
												if (
													maxAmounts[Field.CURRENCY_B]?.toExact() === '0' ||
													!maxAmounts[Field.CURRENCY_B]?.toExact()
												) {
													return (
														<ValueSelectDisabled onClick={() => null}>
															{s.label}
														</ValueSelectDisabled>
													);
												}

												if (Number(s.value) === Number(formattedAmounts[Field.CURRENCY_B])) {
													return (
														<ValueSelectActive onClick={() => null}>
															{s.label}
														</ValueSelectActive>
													);
												}

												return (
													<ValueSelect
														onClick={() => {
															onFieldBInput(s.value.toString());
														}}
													>
														{s.label}
													</ValueSelect>
												);
											})}
										</div>
									</div>
									<div style={{ marginTop: '34px' }}>
										{!account ? (
											<ConnectWalletButton width="100%" />
										) : (
											<AutoColumn gap="md">
												{(approvalA === ApprovalState.NOT_APPROVED ||
													approvalA === ApprovalState.PENDING ||
													approvalB === ApprovalState.NOT_APPROVED ||
													approvalB === ApprovalState.PENDING) &&
													isValid && (
														<RowBetween>
															{approvalA !== ApprovalState.APPROVED && (
																<Button
																	onClick={approveACallback}
																	disabled={approvalA === ApprovalState.PENDING}
																	style={{
																		width:
																			approvalB !== ApprovalState.APPROVED
																				? '48%'
																				: '100%',
																	}}
																>
																	{approvalA === ApprovalState.PENDING ? (
																		<Dots>
																			Approving{' '}
																			{currencies[Field.CURRENCY_A]?.symbol}
																		</Dots>
																	) : (
																		`Approve ${
																			currencies[Field.CURRENCY_A]?.symbol
																		}`
																	)}
																</Button>
															)}
															{approvalB !== ApprovalState.APPROVED && (
																<Button
																	onClick={approveBCallback}
																	disabled={approvalB === ApprovalState.PENDING}
																	style={{
																		width:
																			approvalA !== ApprovalState.APPROVED
																				? '48%'
																				: '100%',
																		height: '55px',
																	}}
																>
																	{approvalB === ApprovalState.PENDING ? (
																		<Dots>
																			Approving{' '}
																			{currencies[Field.CURRENCY_B]?.symbol}
																		</Dots>
																	) : (
																		`Approve ${
																			currencies[Field.CURRENCY_B]?.symbol
																		}`
																	)}
																</Button>
															)}
														</RowBetween>
													)}
												{currencies[Field.CURRENCY_A] &&
												currencies[Field.CURRENCY_B] &&
												!error ? (
													<ActiveButton
														onClick={() => {
															if (expertMode) {
																onAdd();
															} else {
																setShowConfirm(true);
															}
														}}
													>
														{error ?? 'Supply'}
													</ActiveButton>
												) : (
													<InActiveButton>{error ?? 'Supply'}</InActiveButton>
												)}
											</AutoColumn>
										)}
									</div>
								</div>
							</Wrapper>
						</div>
						{pair && !noLiquidity && pairState !== PairState.INVALID ? (
							<div className="mb-6 best-rate-swap-box">
								<MinimalPositionCard showUnwrapped={oneCurrencyIsWETH} pair={pair} />
							</div>
						) : null}
						<div className="best-rate-swap-box">
							<div style={{ marginBottom: '37px' }}>
								<p style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--color-text)' }}>
									Your Liquidity
								</p>
							</div>
							<Wrapper>
								{!account ? (
									<LightCard padding="40px">
										<img
											src="/images/empty_lp.png"
											style={{ width: '100px', height: '100px', margin: '0 auto' }}
											alt="empty"
										/>
										<p
											style={{
												textAlign: 'center',
												color: 'var(--color-background-11)',
												fontSize: '18px',
												fontWeight: 'bold',
												marginTop: '6px',
											}}
										>
											{TranslateString(156, 'Connect to a wallet to view your liquidity.')}
										</p>
									</LightCard>
								) : v2IsLoading ? (
									<LightCard padding="40px">
										<p>
											<Dots>Loading</Dots>
										</p>
									</LightCard>
								) : allV2PairsWithLiquidity?.length > 0 ? (
									<>
										{allV2PairsWithLiquidity.map((v2Pair) => (
											<FullPositionCard key={v2Pair.liquidityToken.address} pair={v2Pair} />
										))}
									</>
								) : (
									<LightCard padding="40px">
										<img
											src="/images/empty_lp.png"
											style={{ width: '100px', height: '100px', margin: '0 auto' }}
											alt="empty"
										/>
										<p
											style={{
												textAlign: 'center',
												color: '#E0E0E0',
												fontSize: '18px',
												fontWeight: 'bold',
												marginTop: '6px',
											}}
										>
											{TranslateString(104, 'Empty Liquidity')}
										</p>
									</LightCard>
								)}
							</Wrapper>
						</div>
					</div>
				</div>
				<div className="footer-container">
					<div className="md-max:hidden">
						<ContactInfo />
					</div>
					<div className="flex space-x-3 md-max:flex-col md-max:items-center md-max:space-x-0 md-max:space-y-4">
						<div className="flex">
							<div className="flex items-center flex-none mr-3">
								<img className="float-left" src="/images/icon-pass-audit.svg" alt="icon" />
								<span className="whitespace-no-wrap">Audited by</span>
							</div>
							<img
								className="float-left"
								src={`/images/icon-certik${spaceMode ? '-space' : ''}.svg`}
								alt="icon"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
