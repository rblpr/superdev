import React, { useCallback, useContext, useMemo, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { splitSignature } from '@ethersproject/bytes';
import { Link as HistoryLink } from 'react-router-dom';
import { Contract } from '@ethersproject/contracts';
import { TransactionResponse } from '@ethersproject/providers';
import { Currency, currencyEquals, ETHER, Percent, WETH, TokenAmount } from '@wardenswap/sdk';
import {
	useWalletModal,
	useModal,
	ChevronDownIcon,
	ConnectorNames,
	useMatchBreakpoints,
} from '@pancakeswap-libs/uikit';
import { useSettingMode } from 'state/hook';
import { connectorsByName } from 'connectors';
import { useWeb3React } from '@web3-react/core';
import { RouteComponentProps } from 'react-router';

import { BigNumber } from '@ethersproject/bignumber';
import ConnectWalletButton from 'components/ConnectWalletButton';
import useI18n from 'hooks/useI18n';
import { maxAmountSpend } from 'utils/maxAmountSpend';
import { AutoColumn, ColumnCenter } from '../../components/Column';
import TransactionConfirmationModal, { ConfirmationModalContent } from '../../components/TransactionConfirmationModal';
import CurrencyInputPanel from '../../components/CurrencyInputPanel';
import DoubleCurrencyLogo from '../../components/DoubleLogo';
import { AddRemoveTabs } from '../../components/NavigationTabs';
import { MinimalPositionCard } from '../../components/PositionCard';
import { RowBetween, RowFixed, RowFlat, RowSpace } from '../../components/Row';

import Slider from '../../components/Slider';
import CurrencyLogo from '../../components/CurrencyLogo';
import { ROUTER_ADDRESS } from '../../constants';
import { useActiveWeb3React } from '../../hooks';
import { useCurrency } from '../../hooks/Tokens';
import { usePairContract } from '../../hooks/useContract';

import { useTransactionAdder } from '../../state/transactions/hooks';
import { StyledInternalLink } from '../../components/Shared';
import { calculateGasMargin, calculateSlippageAmount, getRouterContract } from '../../utils';
import { currencyId } from '../../utils/currencyId';
import useDebouncedChangeHandler from '../../utils/useDebouncedChangeHandler';
import { wrappedCurrency } from '../../utils/wrappedCurrency';
import AppBody from '../AppBody';
import { ClickableText, Wrapper } from '../Pool/styleds';
import { useApproveCallback, ApprovalState } from '../../hooks/useApproveCallback';
import { Dots } from '../../components/swap/styleds';
import { useBurnActionHandlers, useDerivedBurnInfo, useBurnState } from '../../state/burn/hooks';

import { Field } from '../../state/burn/actions';
import { useUserDeadline, useUserSlippageTolerance } from '../../state/user/hooks';
import Header from '../../components/Header';
import ConnectWalletButtonOnMobile from '../../components/ConnectWalletButtonOnMobile';
import ContactInfo from '../../components/Header/ContactInfo';

import MenuModal from '../AddLiquidity/MenuModal';

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
	color: var(--color-text-invert);
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
	margin: 15px auto 0;
	font-weight: bold;
	font-size: 18px;
	cursor: pointer;
`;

const InActiveButton = styled.div`
	width: 100%;
	height: 55px;
	background: var(--color-text-btn-hover-2);
	border-radius: 15px;
	cursor: pointer;
	color: var(--color-text-btn-2);
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 15px auto 0;
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
		background: var(--color-text-2);
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	${({ theme }) => theme.mediaQueries.sm} {
		width: 445px;
	}
`;

const Body = styled.div`
	padding-left: 24px;
	padding-right: 24px;
`;

export default function RemoveLiquidity({
	history,
	match: {
		params: { currencyIdA, currencyIdB },
	},
}: RouteComponentProps<{ currencyIdA: string; currencyIdB: string }>) {
	const [currencyA, currencyB] = [useCurrency(currencyIdA) ?? undefined, useCurrency(currencyIdB) ?? undefined];
	const { account, chainId, library } = useActiveWeb3React();
	const { activate, deactivate } = useWeb3React();
	const TranslateString = useI18n();
	const [tokenA, tokenB] = useMemo(() => [wrappedCurrency(currencyA, chainId), wrappedCurrency(currencyB, chainId)], [
		currencyA,
		currencyB,
		chainId,
	]);

	const theme = useContext(ThemeContext);
	const { spaceMode } = useSettingMode();

	// burn state
	const { independentField, typedValue } = useBurnState();
	const { pair, parsedAmounts, error } = useDerivedBurnInfo(currencyA ?? undefined, currencyB ?? undefined);
	const { onUserInput: _onUserInput } = useBurnActionHandlers();
	const isValid = !error;

	// modal and loading
	const [showConfirm, setShowConfirm] = useState<boolean>(false);
	const [showDetailed, setShowDetailed] = useState<boolean>(false);
	const [attemptingTxn, setAttemptingTxn] = useState(false); // clicked confirm

	// txn values
	const [txHash, setTxHash] = useState<string>('');
	const [deadline] = useUserDeadline();
	const [allowedSlippage] = useUserSlippageTolerance();

	const formattedAmounts = {
		[Field.LIQUIDITY_PERCENT]: parsedAmounts[Field.LIQUIDITY_PERCENT].equalTo('0')
			? '0'
			: parsedAmounts[Field.LIQUIDITY_PERCENT].lessThan(new Percent('1', '100'))
			? '<1'
			: parsedAmounts[Field.LIQUIDITY_PERCENT].toFixed(0),
		[Field.LIQUIDITY]:
			independentField === Field.LIQUIDITY ? typedValue : parsedAmounts[Field.LIQUIDITY]?.toSignificant(6) ?? '',
		[Field.CURRENCY_A]:
			independentField === Field.CURRENCY_A
				? typedValue
				: parsedAmounts[Field.CURRENCY_A]?.toSignificant(6) ?? '',
		[Field.CURRENCY_B]:
			independentField === Field.CURRENCY_B
				? typedValue
				: parsedAmounts[Field.CURRENCY_B]?.toSignificant(6) ?? '',
	};

	const atMaxAmount = parsedAmounts[Field.LIQUIDITY_PERCENT]?.equalTo(new Percent('1'));
	// pair contract
	const pairContract: Contract | null = usePairContract(pair?.liquidityToken?.address);

	// allowance handling
	const [signatureData, setSignatureData] = useState<{ v: number; r: string; s: string; deadline: number } | null>(
		null,
	);
	const [approval, approveCallback] = useApproveCallback(parsedAmounts[Field.LIQUIDITY], ROUTER_ADDRESS);
	async function onAttemptToApprove() {
		if (!pairContract || !pair || !library) throw new Error('missing dependencies');
		const liquidityAmount = parsedAmounts[Field.LIQUIDITY];
		if (!liquidityAmount) throw new Error('missing liquidity amount');
		// try to gather a signature for permission
		const nonce = await pairContract.nonces(account);

		const deadlineForSignature: number = Math.ceil(Date.now() / 1000) + deadline;

		const EIP712Domain = [
			{ name: 'name', type: 'string' },
			{ name: 'version', type: 'string' },
			{ name: 'chainId', type: 'uint256' },
			{ name: 'verifyingContract', type: 'address' },
		];
		const domain = {
			name: 'Warden LPs',
			version: '1',
			chainId,
			verifyingContract: pair.liquidityToken.address,
		};
		const Permit = [
			{ name: 'owner', type: 'address' },
			{ name: 'spender', type: 'address' },
			{ name: 'value', type: 'uint256' },
			{ name: 'nonce', type: 'uint256' },
			{ name: 'deadline', type: 'uint256' },
		];
		const message = {
			owner: account,
			spender: ROUTER_ADDRESS,
			value: liquidityAmount.raw.toString(),
			nonce: nonce.toHexString(),
			deadline: deadlineForSignature,
		};
		const data = JSON.stringify({
			types: {
				EIP712Domain,
				Permit,
			},
			domain,
			primaryType: 'Permit',
			message,
		});

		library
			.send('eth_signTypedData_v4', [account, data])
			.then(splitSignature)
			.then((signature) => {
				setSignatureData({
					v: signature.v,
					r: signature.r,
					s: signature.s,
					deadline: deadlineForSignature,
				});
			})
			.catch((e) => {
				// for all errors other than 4001 (EIP-1193 user rejected request), fall back to manual approve
				if (e?.code !== 4001) {
					approveCallback();
				}
			});
	}

	// wrapped onUserInput to clear signatures
	const onUserInput = useCallback(
		(field: Field, val: string) => {
			setSignatureData(null);
			return _onUserInput(field, val);
		},
		[_onUserInput],
	);

	const onLiquidityInput = useCallback((val: string): void => onUserInput(Field.LIQUIDITY, val), [onUserInput]);
	const onCurrencyAInput = useCallback((val: string): void => onUserInput(Field.CURRENCY_A, val), [onUserInput]);
	const onCurrencyBInput = useCallback((val: string): void => onUserInput(Field.CURRENCY_B, val), [onUserInput]);

	// tx sending
	const addTransaction = useTransactionAdder();
	async function onRemove() {
		if (!chainId || !library || !account) throw new Error('missing dependencies');
		const { [Field.CURRENCY_A]: currencyAmountA, [Field.CURRENCY_B]: currencyAmountB } = parsedAmounts;
		if (!currencyAmountA || !currencyAmountB) {
			throw new Error('missing currency amounts');
		}
		const router = getRouterContract(chainId, library, account);

		const amountsMin = {
			[Field.CURRENCY_A]: calculateSlippageAmount(currencyAmountA, allowedSlippage)[0],
			[Field.CURRENCY_B]: calculateSlippageAmount(currencyAmountB, allowedSlippage)[0],
		};

		if (!currencyA || !currencyB) throw new Error('missing tokens');
		const liquidityAmount = parsedAmounts[Field.LIQUIDITY];
		if (!liquidityAmount) throw new Error('missing liquidity amount');

		const currencyBIsETH = currencyB === ETHER;
		const oneCurrencyIsETH = currencyA === ETHER || currencyBIsETH;
		const deadlineFromNow = Math.ceil(Date.now() / 1000) + deadline;

		if (!tokenA || !tokenB) throw new Error('could not wrap');

		let methodNames: string[];
		let args: Array<string | string[] | number | boolean>;
		// we have approval, use normal remove liquidity
		if (approval === ApprovalState.APPROVED) {
			// removeLiquidityETH
			if (oneCurrencyIsETH) {
				methodNames = ['removeLiquidityETH', 'removeLiquidityETHSupportingFeeOnTransferTokens'];
				args = [
					currencyBIsETH ? tokenA.address : tokenB.address,
					liquidityAmount.raw.toString(),
					amountsMin[currencyBIsETH ? Field.CURRENCY_A : Field.CURRENCY_B].toString(),
					amountsMin[currencyBIsETH ? Field.CURRENCY_B : Field.CURRENCY_A].toString(),
					account,
					deadlineFromNow,
				];
			}
			// removeLiquidity
			else {
				methodNames = ['removeLiquidity'];
				args = [
					tokenA.address,
					tokenB.address,
					liquidityAmount.raw.toString(),
					amountsMin[Field.CURRENCY_A].toString(),
					amountsMin[Field.CURRENCY_B].toString(),
					account,
					deadlineFromNow,
				];
			}
		}
		// we have a signataure, use permit versions of remove liquidity
		else if (signatureData !== null) {
			// removeLiquidityETHWithPermit
			if (oneCurrencyIsETH) {
				methodNames = [
					'removeLiquidityETHWithPermit',
					'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',
				];
				args = [
					currencyBIsETH ? tokenA.address : tokenB.address,
					liquidityAmount.raw.toString(),
					amountsMin[currencyBIsETH ? Field.CURRENCY_A : Field.CURRENCY_B].toString(),
					amountsMin[currencyBIsETH ? Field.CURRENCY_B : Field.CURRENCY_A].toString(),
					account,
					signatureData.deadline,
					false,
					signatureData.v,
					signatureData.r,
					signatureData.s,
				];
			}
			// removeLiquidityETHWithPermit
			else {
				methodNames = ['removeLiquidityWithPermit'];
				args = [
					tokenA.address,
					tokenB.address,
					liquidityAmount.raw.toString(),
					amountsMin[Field.CURRENCY_A].toString(),
					amountsMin[Field.CURRENCY_B].toString(),
					account,
					signatureData.deadline,
					false,
					signatureData.v,
					signatureData.r,
					signatureData.s,
				];
			}
		} else {
			throw new Error('Attempting to confirm without approval or a signature. Please contact support.');
		}
		const safeGasEstimates: (BigNumber | undefined)[] = await Promise.all(
			methodNames.map((methodName, index) =>
				router.estimateGas[methodName](...args)
					.then(calculateGasMargin)
					.catch((e) => {
						console.error(`estimateGas failed`, index, methodName, args, e);
						return undefined;
					}),
			),
		);

		const indexOfSuccessfulEstimation = safeGasEstimates.findIndex((safeGasEstimate) =>
			BigNumber.isBigNumber(safeGasEstimate),
		);

		// all estimations failed...
		if (indexOfSuccessfulEstimation === -1) {
			console.error('This transaction would fail. Please contact support.');
		} else {
			const methodName = methodNames[indexOfSuccessfulEstimation];
			const safeGasEstimate = safeGasEstimates[indexOfSuccessfulEstimation];

			setAttemptingTxn(true);
			await router[methodName](...args, {
				gasLimit: safeGasEstimate,
			})
				.then((response: TransactionResponse) => {
					setAttemptingTxn(false);

					addTransaction(response, {
						summary: `Remove ${parsedAmounts[Field.CURRENCY_A]?.toSignificant(3)} ${
							currencyA?.symbol
						} and ${parsedAmounts[Field.CURRENCY_B]?.toSignificant(3)} ${currencyB?.symbol}`,
					});

					setTxHash(response.hash);
				})
				.catch((e: Error) => {
					setAttemptingTxn(false);
					// we only care if the error is something _other_ than the user rejected the tx
					console.error(e);
				});
		}
	}

	const { isXl } = useMatchBreakpoints();
	const isMobile = !isXl;

	function modalHeader() {
		return (
			<AutoColumn gap="15px">
				<p
					style={{
						fontSize: '48px',
						color: 'var(--color-text-2)',
						fontWeight: 'bold',
						textAlign: 'center',
						marginTop: '30px',
					}}
				>
					{parsedAmounts[Field.LIQUIDITY]?.toSignificant(6)}
				</p>
				<RowFlat>
					<DoubleCurrencyLogo currency0={currencyA} currency1={currencyB} size={isMobile ? 25 : 33} margin />
					<div style={{ fontSize: isMobile ? '12px' : '18px', fontWeight: 'bold', marginLeft: '17px' }}>
						{`${currencyA?.symbol} - ${currencyB?.symbol}`}
					</div>
				</RowFlat>
			</AutoColumn>
			// <AutoColumn gap="md" style={{ marginTop: '20px' }}>
			//   <RowBetween align="flex-end">
			//     <Text fontSize="24px">{parsedAmounts[Field.CURRENCY_A]?.toSignificant(6)}</Text>
			//     <RowFixed gap="4px">
			//       <CurrencyLogo currency={currencyA} size="24px" />
			//       <Text fontSize="24px" style={{ marginLeft: '10px' }}>
			//         {currencyA?.symbol}
			//       </Text>
			//     </RowFixed>
			//   </RowBetween>
			//   <RowFixed>
			//     <Plus size="16" color={theme.colors.textSubtle} />
			//   </RowFixed>
			//   <RowBetween align="flex-end">
			//     <Text fontSize="24px">{parsedAmounts[Field.CURRENCY_B]?.toSignificant(6)}</Text>
			//     <RowFixed gap="4px">
			//       <CurrencyLogo currency={currencyB} size="24px" />
			//       <Text fontSize="24px" style={{ marginLeft: '10px' }}>
			//         {currencyB?.symbol}
			//       </Text>
			//     </RowFixed>
			//   </RowBetween>

			//   <Text small color="textSubtle" textAlign="left" padding="12px 0 0 0" style={{ fontStyle: 'italic' }}>
			//     {`Output is estimated. If the price changes by more than ${
			//       allowedSlippage / 100
			//     }% your transaction will revert.`}
			//   </Text>
			// </AutoColumn>
		);
	}

	function modalBottom() {
		return (
			<>
				<div style={{ borderBottom: '1px solid var(--color-border-7)', padding: '0 0 20px 0' }}>
					<RowBetween>
						<RowFixed>
							<RowBetween>
								<CurrencyLogo currency={currencyA} style={{ marginRight: '8px' }} />
								<p
									style={{
										fontSize: isMobile ? '13px' : '15px',
										fontWeight: 'bold',
										color: 'var(--color-text-2)',
									}}
								>
									{currencyA?.symbol} Withdraw
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
						<div style={{ display: 'inline-block', textAlign: 'right', width: '35%' }}>
							<p
								style={{ fontSize: '13px', color: '#767676', fontWeight: 'bold' }}
							>{`1 ${currencyA?.symbol}`}</p>
						</div>
						{pair && (
							<p style={{ fontSize: '13px', color: '#767676', fontWeight: 'bold' }}>{`${
								tokenA ? pair.priceOf(tokenA).toSignificant(6) : '-'
							} ${currencyA?.symbol}`}</p>
						)}
					</RowBetween>
				</div>
				<div style={{ borderBottom: '1px solid var(--color-border-7)', paddingBottom: '20px' }}>
					<RowBetween>
						<RowFixed>
							<RowBetween>
								<CurrencyLogo currency={currencyB} style={{ marginRight: '8px' }} />
								<p
									style={{
										fontSize: isMobile ? '13px' : '15px',
										fontWeight: 'bold',
										color: 'var(--color-text-2)',
									}}
								>
									{currencyB?.symbol} Withdraw
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
						<div style={{ display: 'inline-block', textAlign: 'right', width: '35%' }}>
							<p
								style={{ fontSize: '13px', color: '#767676', fontWeight: 'bold' }}
							>{`1 ${currencyB?.symbol}`}</p>
						</div>
						{pair && (
							<p style={{ fontSize: '13px', color: '#767676', fontWeight: 'bold' }}>{`${
								tokenB ? pair.priceOf(tokenB).toSignificant(6) : '-'
							} ${currencyB?.symbol}`}</p>
						)}
					</RowBetween>
				</div>
				{!(approval === ApprovalState.APPROVED || signatureData !== null) ? (
					<InActiveButton>{TranslateString(1136, 'Confirm')}</InActiveButton>
				) : (
					<ActiveButton onClick={onRemove}>{TranslateString(1136, 'Confirm')}</ActiveButton>
				)}
				{/* <RowBetween>
          <Text color="textSubtle">{`LP ${currencyA?.symbol}/${currencyB?.symbol}`} Burned</Text>
          <RowFixed>
            <DoubleCurrencyLogo currency0={currencyA} currency1={currencyB} margin />
            <Text>{parsedAmounts[Field.LIQUIDITY]?.toSignificant(6)}</Text>
          </RowFixed>
        </RowBetween>
        {pair && (
          <>
            <RowBetween>
              <Text color="textSubtle">{TranslateString(1182, 'Price')}</Text>
              <Text>
                1 {currencyA?.symbol} = {tokenA ? pair.priceOf(tokenA).toSignificant(6) : '-'} {currencyB?.symbol}
              </Text>
            </RowBetween>
            <RowBetween>
              <div />
              <Text>
                1 {currencyB?.symbol} = {tokenB ? pair.priceOf(tokenB).toSignificant(6) : '-'} {currencyA?.symbol}
              </Text>
            </RowBetween>
          </>
        )}
        <Button disabled={!(approval === ApprovalState.APPROVED || signatureData !== null)} onClick={onRemove}>
          {TranslateString(1136, 'Confirm')}
        </Button> */}
			</>
		);
	}

	const pendingText = `Removing ${parsedAmounts[Field.CURRENCY_A]?.toSignificant(6)} ${
		currencyA?.symbol
	} and ${parsedAmounts[Field.CURRENCY_B]?.toSignificant(6)} ${currencyB?.symbol}`;

	const liquidityPercentChangeCallback = useCallback(
		(value: number) => {
			onUserInput(Field.LIQUIDITY_PERCENT, value.toString());
		},
		[onUserInput],
	);

	const oneCurrencyIsETH = currencyA === ETHER || currencyB === ETHER;
	const oneCurrencyIsWETH = Boolean(
		chainId &&
			((currencyA && currencyEquals(WETH[chainId], currencyA)) ||
				(currencyB && currencyEquals(WETH[chainId], currencyB))),
	);

	const handleSelectCurrencyA = useCallback(
		(currency: Currency) => {
			if (currencyIdB && currencyId(currency) === currencyIdB) {
				history.push(`/remove/${currencyId(currency)}/${currencyIdA}`);
			} else {
				history.push(`/remove/${currencyId(currency)}/${currencyIdB}`);
			}
		},
		[currencyIdA, currencyIdB, history],
	);
	const handleSelectCurrencyB = useCallback(
		(currency: Currency) => {
			if (currencyIdA && currencyId(currency) === currencyIdA) {
				history.push(`/remove/${currencyIdB}/${currencyId(currency)}`);
			} else {
				history.push(`/remove/${currencyIdA}/${currencyId(currency)}`);
			}
		},
		[currencyIdA, currencyIdB, history],
	);

	const handleDismissConfirmation = useCallback(() => {
		setShowConfirm(false);
		setSignatureData(null); // important that we clear signature data to avoid bad sigs
		// if there was a tx hash, we want to clear the input
		if (txHash) {
			onUserInput(Field.LIQUIDITY_PERCENT, '0');
		}
		setTxHash('');
	}, [onUserInput, txHash]);

	const [innerLiquidityPercentage, setInnerLiquidityPercentage] = useDebouncedChangeHandler(
		Number.parseInt(parsedAmounts[Field.LIQUIDITY_PERCENT].toFixed(0)),
		liquidityPercentChangeCallback,
	);

	const truncate = (fullStr, strLen) => {
		if (fullStr.length <= strLen) return fullStr;
		const separator = '...';

		const sepLen = separator.length;
		const charsToShow = strLen - sepLen;
		const frontChars = Math.ceil(charsToShow / 2);
		const backChars = Math.floor(charsToShow / 2);

		return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars);
	};

	return (
		<>
			<div id="app" className="main-app">
				<Header />
				<ConnectWalletButtonOnMobile isCorrectNetwork />
				<div className="main-container">
					<div className="best-rate-swap-container">
						<div className="mb-6 best-rate-swap-box">
							<div style={{ marginBottom: '37px', display: 'flex', justifyContent: 'space-between' }}>
								<p style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--color-text)' }}>
									Remove LP Tokens
								</p>
								<HistoryLink to="/">
									<img src={`/images/icon-close${spaceMode ? '-space' : ''}.svg`} alt="close" />
								</HistoryLink>
							</div>
							<Wrapper>
								<TransactionConfirmationModal
									isOpen={showConfirm}
									onDismiss={handleDismissConfirmation}
									attemptingTxn={attemptingTxn}
									hash={txHash || ''}
									title={TranslateString(1156, 'Confirm Remove')}
									content={() => (
										<ConfirmationModalContent
											title={TranslateString(1156, 'Confirm Remove')}
											onDismiss={handleDismissConfirmation}
											topContent={modalHeader}
											bottomContent={modalBottom}
										/>
									)}
									pendingText={pendingText}
								/>
								<div>
									<CurrencyInputPanel
										value={formattedAmounts[Field.LIQUIDITY]}
										onUserInput={onLiquidityInput}
										onMax={() => {
											onUserInput(Field.LIQUIDITY_PERCENT, '100');
										}}
										showMaxButton={!atMaxAmount}
										disableCurrencySelect
										currency={pair?.liquidityToken}
										pair={pair}
										id="liquidity-remove"
									/>
									<div
										style={{
											display: 'inline-flex',
											marginTop: '20px',
											justifyContent: 'center',
											width: '100%',
										}}
									>
										{formattedAmounts[Field.LIQUIDITY_PERCENT] === '25' ? (
											<ValueSelectActive>25%</ValueSelectActive>
										) : (
											<ValueSelect onClick={() => onUserInput(Field.LIQUIDITY_PERCENT, '25')}>
												25%
											</ValueSelect>
										)}
										{formattedAmounts[Field.LIQUIDITY_PERCENT] === '50' ? (
											<ValueSelectActive>50%</ValueSelectActive>
										) : (
											<ValueSelect onClick={() => onUserInput(Field.LIQUIDITY_PERCENT, '50')}>
												50%
											</ValueSelect>
										)}
										{formattedAmounts[Field.LIQUIDITY_PERCENT] === '75' ? (
											<ValueSelectActive>75%</ValueSelectActive>
										) : (
											<ValueSelect onClick={() => onUserInput(Field.LIQUIDITY_PERCENT, '75')}>
												75%
											</ValueSelect>
										)}
										{formattedAmounts[Field.LIQUIDITY_PERCENT] === '100' ? (
											<ValueSelectActive>100%</ValueSelectActive>
										) : (
											<ValueSelect onClick={() => onUserInput(Field.LIQUIDITY_PERCENT, '100')}>
												100%
											</ValueSelect>
										)}
									</div>
								</div>
								<div className="divider">
									<img src="/images/minus.png" className="circle-swap" alt="icon" />
								</div>
								<div>
									<div
										style={{
											display: 'flex',
											justifyContent: 'space-between',
											marginBottom: '32px',
										}}
									>
										<p
											style={{
												color: 'var(--color-text-2)',
												fontWeight: 'bold',
												fontSize: '18px',
											}}
										>
											You Receive
										</p>
									</div>
									<AutoColumn gap="10px">
										<RowFlat justify="flex-start" mb="15px">
											<RowFlat justify="flex-start" width="35%">
												<CurrencyLogo
													size="33px"
													currency={currencyA}
													style={{ marginRight: '8px' }}
												/>
												<p
													style={{
														fontSize: '16px',
														fontWeight: 'bold',
														color: 'var(--color-text-2)',
														marginRight: '26px',
													}}
												>
													{currencyA?.symbol}
												</p>
											</RowFlat>
											<p
												style={{
													fontSize: '25px',
													fontWeight: 'bold',
													color: 'var(--color-text-2)',
												}}
											>
												{formattedAmounts[Field.CURRENCY_A] || '-'}
											</p>
										</RowFlat>
										<RowFlat justify="flex-start">
											<RowFlat justify="flex-start" width="35%">
												<CurrencyLogo
													size="33px"
													currency={currencyB}
													style={{ marginRight: '8px' }}
												/>
												<p
													style={{
														fontSize: '16px',
														fontWeight: 'bold',
														color: 'var(--color-text-2)',
														marginRight: '26px',
													}}
												>
													{currencyB?.symbol}
												</p>
											</RowFlat>
											<p
												style={{
													fontSize: '25px',
													fontWeight: 'bold',
													color: 'var(--color-text-2)',
												}}
											>
												{formattedAmounts[Field.CURRENCY_B] || '-'}
											</p>
										</RowFlat>
										{/* {chainId && (oneCurrencyIsWETH || oneCurrencyIsETH) ? (
                      <RowBetween style={{ justifyContent: 'flex-end' }}>
                        {oneCurrencyIsETH ? (
                          <StyledInternalLink
                            to={`/remove/${currencyA === ETHER ? WETH[chainId].address : currencyIdA}/${
                              currencyB === ETHER ? WETH[chainId].address : currencyIdB
                            }`}
                          >
                            {TranslateString(1188, 'Receive WBNB')}
                          </StyledInternalLink>
                        ) : oneCurrencyIsWETH ? (
                          <StyledInternalLink
                            to={`/remove/${
                              currencyA && currencyEquals(currencyA, WETH[chainId]) ? 'BNB' : currencyIdA
                            }/${currencyB && currencyEquals(currencyB, WETH[chainId]) ? 'BNB' : currencyIdB}`}
                          >
                            {TranslateString(1190, 'Receive BNB')}
                          </StyledInternalLink>
                        ) : null}
                      </RowBetween>
                    ) : null} */}
									</AutoColumn>
								</div>
								{pair && (
									<div>
										<div style={{ padding: '30px 30px', borderBottom: '1px solid #EAEAEA' }}>
											<RowSpace>
												<p
													style={{
														fontSize: '15px',
														fontWeight: 500,
														color: 'var(--color-text-2)',
														marginRight: '26px',
													}}
												>
													{currencyA?.symbol} per {currencyB?.symbol}
												</p>
												<p
													style={{
														fontSize: '15px',
														fontWeight: 'bold',
														color: 'var(--color-text-2)',
														marginRight: '26px',
													}}
												>
													{tokenA && pair ? pair.priceOf(tokenA).toSignificant(6) : '-'}{' '}
													{currencyB?.symbol}
												</p>
											</RowSpace>
										</div>
										<div style={{ padding: '30px 30px', borderBottom: '1px solid #EAEAEA' }}>
											<RowSpace>
												<p
													style={{
														fontSize: '15px',
														fontWeight: 500,
														color: 'var(--color-text-2)',
														marginRight: '26px',
													}}
												>
													{currencyB?.symbol} per {currencyA?.symbol}
												</p>
												<p
													style={{
														fontSize: '15px',
														fontWeight: 'bold',
														color: 'var(--color-text-2)',
														marginRight: '26px',
													}}
												>
													{tokenB && pair ? pair.priceOf(tokenB).toSignificant(6) : '-'}{' '}
													{currencyA?.symbol}
												</p>
											</RowSpace>
										</div>
									</div>
								)}
								<Body style={{ marginTop: '34px' }}>
									<div style={{ position: 'relative' }}>
										{!account ? (
											<ConnectWalletButton width="100%" />
										) : (
											<div>
												{approval !== ApprovalState.NOT_APPROVED || signatureData !== null ? (
													<InActiveButton>
														{approval === ApprovalState.PENDING ? (
															<Dots>Approving</Dots>
														) : approval === ApprovalState.APPROVED ||
														  signatureData !== null ? (
															'Approved'
														) : (
															'Approve'
														)}
													</InActiveButton>
												) : (
													<ActiveButton onClick={onAttemptToApprove}>Approve</ActiveButton>
												)}
												{!isValid ||
												(signatureData === null && approval !== ApprovalState.APPROVED) ? (
													<InActiveButton>{error || 'Remove LP Token'}</InActiveButton>
												) : (
													<ActiveButton
														onClick={() => {
															if (
																!isValid ||
																(signatureData === null &&
																	approval !== ApprovalState.APPROVED)
															) {
																return false;
															}
															setShowConfirm(true);
															return true;
														}}
													>
														{error || 'Remove LP Token'}
													</ActiveButton>
												)}
											</div>
										)}
									</div>
								</Body>
							</Wrapper>
						</div>
						{pair ? (
							<div className="best-rate-swap-box">
								<MinimalPositionCard showUnwrapped={oneCurrencyIsWETH} pair={pair} />
							</div>
						) : null}
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
