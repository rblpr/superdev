import React from 'react';
import { Dialog } from 'primereact/dialog';
import { useMatchBreakpoints } from '@pancakeswap-libs/uikit';
import { useActiveWeb3React } from '../../hooks';
import ConfirmationPendingContent from './ConfirmationPendingContent';
import TransactionSubmittedContent from './TransactionSubmittedContent';

interface ConfirmationModalProps {
	isOpen: boolean;
	onDismiss: () => void;
	hash: string | undefined;
	content: () => React.ReactNode;
	attemptingTxn: boolean;
	pendingText: string;
	title?: string;
}

const TransactionConfirmationModal = ({
	isOpen,
	onDismiss,
	attemptingTxn,
	hash,
	pendingText,
	content,
	title,
}: ConfirmationModalProps) => {
	const { isXl } = useMatchBreakpoints();
	const isMobile = !isXl;

	const { chainId } = useActiveWeb3React();
	if (!chainId) return null;

	// confirmation screen
	return (
		<Dialog
			visible={isOpen}
			onHide={onDismiss}
			header={attemptingTxn ? 'Waiting for confirm in your wallet' : hash ? 'Transaction submitted' : title}
			className={`transfer-modal-desktop ${isMobile ? 'transfer-modal-mobile' : ''}`}
			position={isMobile ? 'bottom' : 'center'}
		>
			{attemptingTxn ? (
				<ConfirmationPendingContent onDismiss={onDismiss} pendingText={pendingText} />
			) : hash ? (
				<TransactionSubmittedContent chainId={chainId} hash={hash} onDismiss={onDismiss} />
			) : (
				content()
			)}
		</Dialog>
	);
};

export default TransactionConfirmationModal;
