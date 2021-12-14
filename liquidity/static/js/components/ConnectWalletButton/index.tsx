import React from 'react';
import { useWeb3React } from '@web3-react/core';
import styled from 'styled-components';
import { Button, ButtonProps, useWalletModal, ConnectorNames } from '@pancakeswap-libs/uikit';
import { connectorsByName } from 'connectors';
import useI18n from 'hooks/useI18n';
import useAuth from 'hooks/useAuth';

const CancelButton = styled.div`
	width: 100%;
	height: 55px;
	background: #e9e9e9;
	border-radius: 15px;
	color: #bdbdbd;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 15px auto;
	cursor: pointer;
	font-weight: bold;
	font-size: 18px;
`;

const UnlockButton: React.FC<ButtonProps> = (props) => {
	const TranslateString = useI18n();
	const { account, deactivate } = useWeb3React();
	const { login } = useAuth();
	const handleLogin = (connectorId: ConnectorNames) => {
		login(connectorId);
	};

	const { onPresentConnectModal } = useWalletModal(handleLogin, deactivate, account as string);

	return <CancelButton onClick={onPresentConnectModal}>{TranslateString(292, 'Connect Wallet')}</CancelButton>;
};

export default UnlockButton;
