import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex } from '@pancakeswap-libs/uikit';
import { useDetectClickOutside } from "react-detect-click-outside";
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { useWeb3React } from '@web3-react/core';
import { useSettingMode } from 'state/hook';
import ConnectWalletModal from '../ConnectWalletModal';
import AccountModal from '../AccountModal';
import SettingModal from '../SettingModal';
import SwitchNetworkDropdown from '../SwitchNetwork/SwitchNetworkDropdown';
import './style.scss';

interface WalletProps {
	isCorrectNetwork?: boolean;
	sum?: number;
	balance?: number;
}

const Wrapper = styled.div`
	display: flex;
`;

const ImgSetting = styled.img`
	margin-left: 8px;
	cursor: pointer;
`;

const truncate = (fullStr, strLen) => {
	if (fullStr.length <= strLen) return fullStr;
	const separator = '...';

	const sepLen = separator.length;
	const charsToShow = strLen - sepLen;
	const frontChars = Math.ceil(charsToShow / 2);
	const backChars = Math.floor(charsToShow / 2);

	return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars);
};

const ConnectWalletButton: React.FC<WalletProps> = ({ isCorrectNetwork, sum, balance }) => {
	const [show, setShow] = useState(false);
	const [showAccount, setAccountShow] = useState(false);
	const [showSetting, setShowSetting] = useState(false);

	const { account } = useWeb3React();
	const { spaceMode } = useSettingMode();
	const [toggleDropdown, setToggleDropdown] = useState(false);

	const handleToggle = (e) => {
    e.preventDefault();
    setToggleDropdown((prevState) => !prevState);
  }
	const closeToggle = () => {
    setToggleDropdown(false);
  };

	const ref = useDetectClickOutside({ onTriggered: closeToggle });

	return (
		<Wrapper className="space-x-2">
			<ConnectWalletModal visible={show} isMobile={false} modalPosition="center" onHide={() => setShow(false)} />
			<SettingModal
				visible={showSetting}
				isMobile={false}
				modalPosition="center"
				onHide={() => setShowSetting(false)}
			/>
			{account && (
				<AccountModal
					visible={showAccount}
					isMobile={false}
					modalPosition="center"
					onHide={() => setAccountShow(false)}
					sum={sum}
					balance={balance}
				/>
			)}
			{!account ? (
				<button
					type="button"
					className="btn-container connct-wallet"
					onClick={() => {
						setShow(true);
					}}
				>
					Connect wallet
				</button>
			) : (
				<button
					type="button"
					className="btn-container wallet-account"
					onClick={() => {
						setAccountShow(true);
					}}
				>
					<Flex style={{ flex: '1 0 auto' }}>
						<Jazzicon diameter={25} seed={jsNumberForAddress(account)} />
					</Flex>

					<span className="ml-1">{truncate(account, 13)}</span>
					<img src={`/images/icon-shape${spaceMode ? '-space' : ''}.svg`} className="shape" alt="icon" />
				</button>
			)}
			{!isCorrectNetwork && (
				<button type="button" className="btn-container wrong-network">
					<img src="/images/icon-wrong-network.svg" alt="wrong-network" />
					<span>Wrong Network</span>
				</button>
			)}
			<ImgSetting
				className="inline"
				src="/images/icon-selected-bsc.svg"
				alt="selected-chain"
				onClick={handleToggle}
				ref={ref}
			/>
			<ImgSetting
				src={`/images/icon-setting${spaceMode ? '-space' : ''}.svg`}
				alt="setting"
				onClick={() => {
					setShowSetting(true);
				}}
			/>
			<div className="switch-network-position">
				{toggleDropdown && <SwitchNetworkDropdown />}
			</div>
		</Wrapper>
	);
};

export default ConnectWalletButton;
