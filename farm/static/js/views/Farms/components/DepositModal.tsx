import BigNumber from 'bignumber.js';
import styled from 'styled-components';
import React, { useCallback, useMemo, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { useMatchBreakpoints } from '@pancakeswap-libs/uikit';
import ModalActions from 'components/ModalActions';
import ModalInput from 'components/ModalInput';
import useI18n from 'hooks/useI18n';
import { getFullDisplayBalance } from 'utils/formatBalance';
import getBscScanLink from 'utils/getBscScanLink';
import { useSettingMode } from 'state/hooks';

interface DepositModalProps {
	max: BigNumber;
	onConfirm: (amount: string) => Promise<any>;
	onDismiss?: () => void;
	tokenName?: string;
	addLiquidityUrl?: string;
	visible?: boolean;
	onHide(): any;
}

const ActiveButton = styled.div`
	width: 100%;
	height: 55px;
	background: #18b2a1;
	border-radius: 15px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 15px auto;
	cursor: pointer;
	font-weight: bold;
	font-size: 18px;

	${({ theme }) => theme.mediaQueries.lg} {
		width: 90%;
	}
`;
const CancelButton = styled.div`
	width: 100%;
	height: 55px;
	background: var(--color-background-4);
	border-radius: 15px;
	color: #bdbdbd;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 15px auto;
	cursor: pointer;
	font-weight: bold;
	font-size: 18px;

	${({ theme }) => theme.mediaQueries.lg} {
		width: 90%;
	}
`;

const DepositModal: React.FC<DepositModalProps> = ({
	visible,
	onHide,
	max,
	onConfirm,
	onDismiss,
	tokenName = '',
	addLiquidityUrl,
}) => {
	const fullBalance = useMemo(() => {
		return getFullDisplayBalance(max);
	}, [max]);
	const [val, setVal] = useState(fullBalance);
	const [pendingTx, setPendingTx] = useState(false);
	const [isDone, setDone] = useState(false);
	const [txHash, setTxHash] = useState('');
	const TranslateString = useI18n();

	const handleSelectMax = useCallback(() => {
		setVal(fullBalance);
	}, [fullBalance, setVal]);

	const handleChange = useCallback(
		(value) => {
			setVal(value);
		},
		[setVal],
	);

	const { spaceMode } = useSettingMode();
	const { isXl } = useMatchBreakpoints();
	const isMobile = !isXl;

	const getContent = () => {
		if (pendingTx) {
			return (
				<div className="flex flex-col items-center h-full">
					<p style={{ fontSize: '15px', color: 'var(--color-text-2)' }}>
						Waiting for confirmation from your wallet
					</p>
					<img src={`/images/farms/loading${spaceMode ? '-space' : ''}.svg`} alt="loading" />
					<p style={{ fontWeight: 500, fontSize: '16px', textAlign: 'center', color: 'var(--color-text-2)' }}>
						Deposit {val} {tokenName}
					</p>
					<p
						style={{
							fontSize: '13px',
							color: 'var(--color-text-2)',
							textAlign: 'center',
							marginTop: '5px',
						}}
					>
						Waiting for confirmation from your wallet
					</p>
				</div>
			);
		}
		if (isDone) {
			return (
				<div className="flex flex-col items-center h-full">
					<img src="/images/swap-status-success.svg" alt="loading" className="w-260px" />
					<div className="flex mouser-over">
						<a
							className="flex mr-3"
							target="_blank"
							rel="noreferrer"
							href={getBscScanLink(txHash, 'transaction')}
						>
							<span className="text-18 text-primary mr-1">View on BSC Scan</span>
							<img src="/images/icon-bsc-link-on-modal.svg" className="w-24px" alt="icon" />
						</a>
					</div>
				</div>
			);
		}

		return (
			<div>
				<ModalInput
					value={val}
					onSelectMax={handleSelectMax}
					onChange={handleChange}
					max={fullBalance}
					symbol={tokenName}
					addLiquidityUrl={addLiquidityUrl}
					inputTitle={TranslateString(1070, 'Stake')}
				/>
				<ModalActions>
					{pendingTx || fullBalance === '0' || val === '0' ? (
						<CancelButton
							onClick={async () => {
								setPendingTx(true);
								await onConfirm(val);
								setPendingTx(false);
								setDone(true);
							}}
						>
							{pendingTx ? TranslateString(488, 'Pending Confirmation') : TranslateString(464, 'Deposit')}
						</CancelButton>
					) : (
						<ActiveButton
							onClick={async () => {
								setPendingTx(true);
								const result = await onConfirm(val);
								setTxHash(result.transactionHash);
								setPendingTx(false);
								setDone(true);
							}}
						>
							{pendingTx ? TranslateString(488, 'Pending Confirmation') : TranslateString(464, 'Deposit')}
						</ActiveButton>
					)}
					<CancelButton onClick={onHide}>{TranslateString(462, 'Cancel')}</CancelButton>
				</ModalActions>
			</div>
		);
	};
	return (
		<div id={pendingTx ? 'pendingModal' : 'transferModal'}>
			<Dialog
				visible={visible}
				className={`transfer-modal-desktop ${isMobile ? 'transfer-modal-mobile' : ''}`}
				position={isMobile ? 'bottom' : 'center'}
				header={pendingTx ? '' : TranslateString(1068, 'Stake LP tokens')}
				onHide={() => {
					setDone(false);
					onHide();
				}}
			>
				{getContent()}
				{/* <LinkExternal href={addLiquidityUrl} style={{ alignSelf: 'center' }}>
          {TranslateString(999, 'Get')} {tokenName}
        </LinkExternal> */}
			</Dialog>
		</div>
	);
};

export default DepositModal;
