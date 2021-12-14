import React from 'react';
import { Dialog } from 'primereact/dialog';
import useAuth from 'hooks/useAuth';
import './style.scss';

interface WalletProps {
	visible?: boolean;
	isMobile?: boolean;
	modalPosition?: string;
	onHide(): any;
}

enum ConnectorNames {
	Injected = 'injected',
	WalletConnect = 'walletconnect',
	BSC = 'bsc',
}

const ConnectWalletModal: React.FC<WalletProps> = ({ visible, modalPosition, isMobile, onHide }) => {
	const { login } = useAuth();
	const onLogin = (key) => {
		login(key);
		window.localStorage.setItem('connectorId', key);
		onHide();
	};
	return (
		<div id="connection-wallet-modal">
			<Dialog
				header="Connect Wallet"
				visible={visible}
				className={`wallet-modal-desktop ${isMobile ? 'wallet-modal-mobile' : ''}`}
				position={modalPosition}
				dismissableMask
				onHide={onHide}
			>
				<div className="grid grid-flow-row auto-rows-max gap-4">
					{!isMobile && (
						<div
							role="presentation"
							onClick={() => onLogin(ConnectorNames.BSC)}
							className="border-2 rounded-lg text-left p-3 w-full grid grid-cols-6 cursor-pointer wallet-btn"
							style={{ border: '2px solid' }}
						>
							<div className="col-start-1 ...">
								<img src="/images/icon-bsc.svg" style={{ width: '30px' }} alt="icon" />
							</div>
							<div className="col-span-4 ... font-medium">Binance Chain Wallet</div>
						</div>
					)}
					{!isMobile ? (
						<div
							role="presentation"
							onClick={() => onLogin(ConnectorNames.Injected)}
							className="border-2 rounded-lg text-left p-3 w-full grid grid-cols-6 cursor-pointer wallet-btn"
							style={{ border: '2px solid' }}
						>
							<div className="col-start-1 ...">
								<img src="/images/icon-metamask.svg" style={{ width: '30px' }} alt="icon" />
							</div>
							<div className="col-span-4 ... font-medium">MetaMask</div>
						</div>
					) : (
						<div
							role="presentation"
							onClick={() => onLogin(ConnectorNames.WalletConnect)}
							className="border-2 rounded-lg text-left p-3 w-full grid grid-cols-6 cursor-pointer wallet-btn"
							style={{ border: '2px solid' }}
						>
							<div className="col-start-1 ...">
								<img src="/images/icon-metamask.svg" style={{ width: '30px' }} alt="icon" />
							</div>
							<div className="col-span-4 ... font-medium">MetaMask</div>
						</div>
					)}
					<div
						role="presentation"
						onClick={() => onLogin(ConnectorNames.WalletConnect)}
						className="border-2 rounded-lg text-left p-3 w-full grid grid-cols-6 cursor-pointer wallet-btn"
						style={{ border: '2px solid' }}
					>
						<div className="col-start-1 ...">
							<img src="/images/icon-walletconnect.svg" style={{ width: '30px' }} alt="icon" />
						</div>
						<div className="col-span-4 ... font-medium">WalletConnect</div>
					</div>
					<div
						role="presentation"
						onClick={() => onLogin(ConnectorNames.WalletConnect)}
						className="border-2 rounded-lg text-left p-3 w-full grid grid-cols-6 cursor-pointer wallet-btn"
						style={{ border: '2px solid' }}
					>
						<div className="col-start-1 ...">
							<img src="/images/icon-trust-wallet.svg" style={{ width: '30px' }} alt="icon" />
						</div>
						<div className="col-span-4 ... font-medium">Trust Wallet</div>
					</div>
				</div>
			</Dialog>
		</div>
	);
};

export default ConnectWalletModal;
