/* eslint-disable no-nested-ternary */
import React from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Skeleton } from 'primereact/skeleton';
import { registerToken } from 'utils/wallet';
import { usePriceCakeBusd, useSettingMode } from 'state/hooks';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { useWeb3React } from '@web3-react/core';
import useAuth from 'hooks/useAuth';
import './style.scss';

interface WalletProps {
	visible?: boolean;
	isMobile?: boolean;
	modalPosition?: string;
	sum?: number;
	balance?: number;
	onHide(): any;
}

enum DisplayWalletProvider {
	injected = 'MetaMask',
	walletconnect = 'Wallet Connect',
	bsc = 'Binance Chain Wallet',
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

const AccountModal: React.FC<WalletProps> = ({ visible, modalPosition, isMobile, onHide, sum, balance }) => {
	const { logout } = useAuth();
	const { account } = useWeb3React();
	const walletProvider = window.localStorage.getItem('connectorId');
	const cakePrice = usePriceCakeBusd();
	const { spaceMode } = useSettingMode();

	return (
		<Dialog
			header="Your Account"
			visible={visible}
			className={`user-wallet-modal-desktop ${isMobile ? 'user-wallet-modal-mobile' : ''}`}
			position={modalPosition}
			dismissableMask
			rtl
			onHide={onHide}
		>
			<p className="mt-1" />
			<div className="flex flex-col items-center space-y-8 md-max:space-y-2 h-full">
				<div className="wallet-box">
					<div className="flex flex-col items-center space-y-1">
						<div className="flex flex-row md-max:flex-col items-center">
							<Jazzicon diameter={40} seed={jsNumberForAddress(account)} />
							<div className="ml-3 md-max:ml-0 flex flex-col wallet-detail">
								<span className="wallet-detail--connected">
									{DisplayWalletProvider[walletProvider]} Connected
								</span>
								<div className="flex items-center">
									<span className="pr-0.5 wallet-detail--address">{truncate(account, 13)}</span>
									<Button
										className="p-button p-component p-button-icon-only p-button-rounded p-button-text p-button-plain"
										onClick={() => {
											if (navigator.clipboard) {
												navigator.clipboard.writeText(account);
											}
										}}
									>
										<img src={`/images/icon-copy${spaceMode ? '-space' : ''}.svg`} alt="copy" />
									</Button>
								</div>
							</div>
						</div>
						<div className="flex space-x-2 items-center">
							<button
								type="button"
								className="p-button p-component p-button-rounded p-button-text p-button-plain"
								onClick={() => window.open(`https://bscscan.com/address/${account}`, '_blank')}
							>
								<img src={`images/icon-bsc-link${spaceMode ? '-space' : ''}.svg`} alt="icon" />
								<span className="btn-text">BSC Scan</span>
							</button>
							<button
								type="button"
								className="p-button p-component p-button-rounded p-button-text p-button-plain"
								onClick={() => {
									logout();
									window.localStorage.removeItem('connectorId');
									onHide();
								}}
							>
								<img src={`images/icon-disconnect${spaceMode ? '-space' : ''}.svg`} alt="icon" />
								<span className="btn-text">Disconnect</span>
							</button>
						</div>
					</div>
				</div>
				<div className="wad-balance-wrap">
					<img alt="coin" src="/images/icon-warden.svg" className="w-50px" />
					{sum && balance ? (
						<span className="text-primary font-bold text-30 md-max:text-23 pt-2 pb-4">
							{(sum + balance).toLocaleString()} WAD
						</span>
					) : sum === 0 ? (
						<span className="text-primary font-bold text-30 md-max:text-23 pt-2 pb-4">
							{balance.toLocaleString()} WAD
						</span>
					) : (
						<Skeleton width="30%" height="2rem" style={{ margin: '20px' }} />
					)}
					<div className="flex justify-between text-15 font-medium text-primary mb-1 w-full">
						<div>Balance</div>
						{balance ? (
							<div>{balance.toLocaleString()} WAD</div>
						) : balance === 0 ? (
							<div>0 WAD</div>
						) : (
							<Skeleton v-else width="25%" />
						)}
					</div>
					<div className="flex justify-between text-15 font-medium text-primary mb-1 w-full">
						<span>Unclaimed</span>
						{sum ? (
							<span>{sum.toLocaleString()} WAD</span>
						) : sum === 0 ? (
							<span>0 WAD</span>
						) : (
							<Skeleton v-else width="18%" />
						)}
					</div>
					<div className="divider" />
					<div className="flex justify-between text-15 font-medium text-primary mb-1 w-full">
						<div>WAD Price</div>
						{cakePrice ? <div>$ {cakePrice.toFixed(3)}</div> : <Skeleton v-else width="18%" />}
					</div>
					<div
						role="presentation"
						className="flex text-15 font-medium text-primary mb-1 w-full"
						onClick={() =>
							registerToken(
								'0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc',
								'WAD',
								18,
								'https://image.wardenswap.finance/WAD-Token.png',
							)
						}
					>
						<span>Add WAD Token</span>
						<img src="/images/icon-add-wad-token.svg" className="ml-2 mouse-pointer" alt="wad token" />
					</div>
				</div>
			</div>
		</Dialog>
	);
};

export default AccountModal;
