import React from 'react';
import styled from 'styled-components';
import { useWalletModal } from '@pancakeswap-libs/uikit';
import useAuth from 'hooks/useAuth';
import useI18n from 'hooks/useI18n';

const ActiveButton = styled.div`
	width: 80%;
	height: 45px;
	background: #82affb;
	border-radius: 15px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
	margin-top: 32px;
	cursor: pointer;

	${({ theme }) => theme.mediaQueries.lg} {
		width: 180px;
	}
`;

const UnlockButton = (props) => {
	const TranslateString = useI18n();
	const { login, logout } = useAuth();
	const { onPresentConnectModal } = useWalletModal(login, logout);

	return (
		<ActiveButton onClick={onPresentConnectModal} {...props}>
			{TranslateString(292, 'Unlock Wallet')}
		</ActiveButton>
	);
};

export default UnlockButton;
