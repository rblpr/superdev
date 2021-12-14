import React, { useState } from 'react';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { useWeb3React } from '@web3-react/core';
import { useSettingMode } from 'state/hooks';
import ConnectWalletModal from '../ConnectWalletModal';
import SwitchNetworkAndConnectWalletModal from '../SwitchNetwork/SwitchNetworkAndConnectWalletModal';
import AccountModal from '../AccountModal';
import './style.scss';

interface WalletProps {
	isCorrectNetwork?: boolean;
	sum?: number;
	balance?: number;
}

const truncate = (fullStr, strLen) => {
	if (fullStr.length <= strLen) return fullStr;
	const separator = '...';

	const sepLen = separator.length;
	const charsToShow = strLen - sepLen;
	const frontChars = Math.ceil(charsToShow / 2);
	const backChars = Math.floor(charsToShow / 2);

	return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars);
};

const ConnectWalletButtonOnMobile: React.FC<WalletProps> = ({ isCorrectNetwork, sum, balance }) => {
	const [show, setShow] = useState(false);
	const [showAccount, setAccountShow] = useState(false);
	const { account } = useWeb3React();
	const { spaceMode } = useSettingMode();

	return (
		<div className="hidden md-max:block">
			<ConnectWalletModal visible={show} isMobile modalPosition="bottom" onHide={() => setShow(false)} />
			<SwitchNetworkAndConnectWalletModal visible={show} onHide={() => setShow(false)} />
			{account && (
				<AccountModal
					visible={showAccount}
					isMobile
					modalPosition="bottom"
					onHide={() => setAccountShow(false)}
					sum={sum}
					balance={balance}
				/>
			)}
			{!account ? (
				<button
					type="button"
					className="display-only-mobile btn-container-mobile connect-wallet"
					onClick={() => setShow(true)}
				>
					Connect Wallet
				</button>
			) : (
				<button
					type="button"
					className="btn-container-mobile wallet-account display-only-mobile"
					onClick={() => setAccountShow(true)}
				>
					<div className="flex items-center">
						<Jazzicon diameter={40} seed={jsNumberForAddress(account)} />
						<span className="ml-3" style={{ color: 'var(--color-text-6)' }}>
							{truncate(account, 13)}
						</span>
					</div>
					<img
						src={`/images/icon-shape${spaceMode ? '-space' : ''}.svg`}
						className="transform rotate-180"
						alt="icon"
					/>
				</button>
			)}
			{!isCorrectNetwork && (
				<button type="button" className="display-only-mobile btn-container-mobile wrong-network">
					<img src="/images/icon-wrong-network.svg" alt="wrong-network" />
					<span>Wrong Network</span>
				</button>
			)}
		</div>
	);
};

export default ConnectWalletButtonOnMobile;
