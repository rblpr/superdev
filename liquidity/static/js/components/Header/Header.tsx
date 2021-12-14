import React, { useState } from 'react';
import styled from 'styled-components';
import { Sidebar } from 'primereact/sidebar';
import { useSettingMode } from 'state/hook';
import ConnectWalletButton from './ConnectWalletButton';
import ContactInfo from './ContactInfo';
import SettingModal from '../SettingModal';
import SwitchNetworkModal from '../SwitchNetworkModal';
import SwitchNetworkAndConnectWalletModal from '../SwitchNetwork/SwitchNetworkAndConnectWalletModal';
import './style.scss';

interface HeaderProps {
	sum?: number;
	balance?: number;
	price?: number;
}

const Right = styled.div`
	display: flex;
	position: relative;
`;

const ImgSetting = styled.img`
	width: 30px;
	cursor: pointer;
	margin-right: 16px;
`;

const Header: React.FC<HeaderProps> = ({ sum, balance }) => {
	const [show, setShow] = useState(false);
	const [showSetting, setShowSetting] = useState(false);
	const [showSelectChain, setShowSelectChain] = useState(false);
	const { spaceMode, muteMode } = useSettingMode();
	const query = `?t=${spaceMode ? '1' : '0'}&s=${muteMode ? '1' : '0'}`;
	const isAlpha = process.env.REACT_APP_ENV === 'alpha';

	return (
		<>
			<div>
				<div className="header-container is-desktop">
					<a
						href={`https://${isAlpha ? 'alpha' : 'www'}.wardenswap.finance/#/best-rate-swap${query}`}
						className="router-link-active"
					>
						<img
							className="logo"
							src={`/images/farms/warden-logo-1-5-aegis${spaceMode ? '-space' : ''}.svg`}
							alt="logo"
						/>
					</a>
					<div className="navbar-manu">
						<a
							href={`https://${isAlpha ? 'alpha' : 'www'}.wardenswap.finance/#/best-rate-swap${query}`}
							className="navbar-item"
						>
							<span className="navbar-text">Best Rate Swap</span>
						</a>
						<a
							href={`https://${isAlpha ? 'alpha-' : ''}liquidity.wardenswap.finance${query}`}
							className="navbar-item"
						>
							<span className="navbar-text active">Liquidity</span>
						</a>
						<a
							href={`https://${isAlpha ? 'alpha-' : ''}farm.wardenswap.finance${query}/#/farm`}
							className="navbar-item"
						>
							<span className="navbar-text">Farms</span>
						</a>
						<a
							href={`https://${isAlpha ? 'alpha-' : ''}farm.wardenswap.finance${query}`}
							className="navbar-item"
						>
							<span className="navbar-text">Info</span>
						</a>
						 <a
 							href={`https://${isAlpha ? 'alpha' : 'www'}.wardenswap.finance/nft`}
 							target="_blank"
 							rel="noreferrer"
 							className="navbar-item"
 						>
 							<span className="navbar-text">NFT</span>
 						</a>
					</div>
					<ConnectWalletButton isCorrectNetwork sum={sum} balance={balance} />
				</div>
				<div className="header-container is-mobile">
					<a href={`https://${isAlpha ? 'alpha' : 'www'}.wardenswap.finance/#/best-rate-swap${query}`}>
						<img
							className="logo"
							src={`/images/farms/warden-logo-1-5-aegis${spaceMode ? '-space' : ''}.svg`}
							alt="logo"
						/>
					</a>
					<Right>
						<ImgSetting
							className="inline"
							src="/images/icon-selected-bsc.svg"
							alt="selected-chain"
							onClick={() => {
								setShowSelectChain(true);
							}}
						/>
						<ImgSetting
							src={`/images/icon-setting${spaceMode ? '-space' : ''}.svg`}
							alt="setting"
							onClick={() => {
								setShowSetting(true);
							}}
						/>
						<button
							style={{ border: 0, background: 'transparent' }}
							type="button"
							onClick={() => setShow(true)}
						>
							<img
								src={`/images/icon-hamberger-menu${spaceMode ? '-space' : ''}.svg`}
								alt="menu"
								style={{ width: '30px' }}
							/>
						</button>
					</Right>
					<Sidebar visible={show} baseZIndex={1000} position="right" onHide={() => setShow(false)}>
						<a href="/" onClick={() => false} className="router-link-active">
							<img
								className="logo"
								style={{ height: '63px' }}
								src={`/images/farms/warden-logo-1-5-aegis${spaceMode ? '-space' : ''}.svg`}
								alt="logo"
							/>
						</a>
						<a href={`https://${isAlpha ? 'alpha' : 'www'}.wardenswap.finance/#/best-rate-swap${query}`}>
							<span
								className="flex items-center p-4 hover:bg-indigo-500 hover:text-white text-primary"
								style={{ paddingTop: '50px' }}
							>
								<span className="mr-2"> </span>
								<span>Best Rate Swap</span>
							</span>
						</a>
						<a href={`https://${isAlpha ? 'alpha-' : ''}liquidity.wardenswap.finance${query}`}>
							<span className="flex items-center p-4 hover:bg-indigo-500 hover:text-white text-primary">
								<span className="mr-2"> </span>
								<span>Liquidity</span>
							</span>
						</a>
						<a href={`https://${isAlpha ? 'alpha-' : ''}farm.wardenswap.finance/#/farm${query}`}>
							<span className="flex items-center p-4 hover:bg-indigo-500 hover:text-white text-primary">
								<span className="mr-2"> </span>
								<span>Farms</span>
							</span>
						</a>
						<a href={`https://${isAlpha ? 'alpha-' : ''}farm.wardenswap.finance${query}`}>
							<span className="flex items-center p-4 hover:bg-indigo-500 hover:text-white text-primary">
								<span className="mr-2"> </span>
								<span>Info</span>
							</span>
						</a>
						<a
 							href={`https://${isAlpha ? 'alpha' : 'www'}.wardenswap.finance/nft`}
 							target="_blank"
 							rel="noreferrer"
 						>
 							<span className="flex items-center p-4 hover:bg-indigo-500 hover:text-white text-primary opacity-75 cursor-not-allowed">
 								<span className="mr-2"> </span>
 								<span>NFT</span>
 							</span>
 						</a>
						<ContactInfo styleOption="flex-wrap mt-3 w-200px" />
					</Sidebar>
				</div>
			</div>
			<SettingModal
				visible={showSetting}
				isMobile={false}
				modalPosition="center"
				onHide={() => setShowSetting(false)}
			/>
			<SwitchNetworkAndConnectWalletModal visible={showSelectChain} onHide={() => setShowSelectChain(false)} />
		</>
	);
};

export default Header;
