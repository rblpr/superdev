import React from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Skeleton } from 'primereact/skeleton';
import { useUserDataInFarm } from 'hooks/farms';
import { useSettingMode } from 'state/hook';
// import { registerToken } from 'utils/wallet'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import useAuth from 'hooks/useAuth';
// import { usePriceCakeBusd } from '../../state/hook'
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

const AccountModal: React.FC<WalletProps> = ({ visible, modalPosition, isMobile, onHide }) => {
	const { logout } = useAuth();
	// const { account } = useActiveWeb3React()
	const { account, balance, sumEarning: sum, wadPriceUSD } = useUserDataInFarm();
	const { spaceMode } = useSettingMode();

	const walletProvider = window.localStorage.getItem('connectorId');

	const registerToken = async () => {
		if ('ethereum' in window) {
			const tokenAdded = await (window.ethereum as any).request({
				method: 'wallet_watchAsset',
				params: {
					type: 'ERC20',
					options: {
						address: '0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc',
						symbol: 'WAD',
						decimals: 18,
						image: 'https://image.wardenswap.finance/WAD-Token.png',
					},
				},
			});

			return tokenAdded;
		}
		return false;
	};

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
			<div className="flex flex-col items-center h-full space-y-8 md-max:space-y-2">
				<div className="wallet-box">
					<div className="flex flex-col items-center space-y-1">
						<div className="flex flex-row items-center md-max:flex-col">
							<Jazzicon diameter={40} seed={jsNumberForAddress(account)} />
							<div className="flex flex-col ml-3 md-max:ml-0 wallet-detail">
								<span className="wallet-detail--connected">
									{walletProvider && DisplayWalletProvider[walletProvider]} Connected
								</span>
								<div className="flex items-center">
									<span className="pr-0.5 wallet-detail--address">{truncate(account, 13)}</span>
									<Button
										className="p-button p-component p-button-icon-only p-button-rounded p-button-text p-button-plain"
										onClick={() => {
											if (account && navigator.clipboard) {
												navigator.clipboard.writeText(account);
											}
										}}
									>
										<img src={`/images/icon-copy${spaceMode ? '-space' : ''}.svg`} alt="copy" />
									</Button>
								</div>
							</div>
						</div>
						<div className="flex items-center space-x-2">
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
						<span className="pt-2 pb-4 font-bold text-primary text-30 md-max:text-23">
							{(sum + balance).toLocaleString()} WAD
						</span>
					) : sum === 0 ? (
						<span className="pt-2 pb-4 font-bold text-primary text-30 md-max:text-23">
							{balance.toLocaleString()} WAD
						</span>
					) : (
						<Skeleton width="30%" height="2rem" style={{ margin: '20px' }} />
					)}
					<div className="flex justify-between w-full mb-1 font-medium text-15 text-primary">
						<div>Balance</div>
						{balance ? (
							<div>{balance.toLocaleString()} WAD</div>
						) : balance === 0 ? (
							<div>0 WAD</div>
						) : (
							<Skeleton v-else width="25%" />
						)}
					</div>
					<div className="flex justify-between w-full mb-1 font-medium text-15 text-primary">
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
					<div className="flex justify-between w-full mb-1 font-medium text-15 text-primary">
						<div>WAD Price</div>
						{wadPriceUSD ? <div>{wadPriceUSD.toFixed(3)} WAD</div> : <Skeleton v-else width="18%" />}
					</div>
					<div
						role="presentation"
						className="flex w-full mb-1 font-medium text-15 text-primary"
						onClick={registerToken}
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
