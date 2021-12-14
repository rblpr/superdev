import { useCallback } from 'react';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import { NoBscProviderError } from '@binance-chain/bsc-connector';
import { connectorLocalStorageKey, ConnectorNames } from '@pancakeswap-libs/uikit';
import { connectorsByName } from 'connectors';
import {
	NoEthereumProviderError,
	UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector';
import {
	UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
	WalletConnectConnector,
} from '@web3-react/walletconnect-connector';
import { useToast } from 'state/hook';

const useAuth = () => {
	const { activate, deactivate } = useWeb3React();
	const { toastError } = useToast();

	const login = useCallback((connectorID: ConnectorNames) => {
		const connector = connectorsByName[connectorID];
		if (connector) {
			activate(connector, async (error: Error) => {
				window.localStorage.removeItem('walletconnect');
				if (error instanceof UnsupportedChainIdError) {
					toastError('Unsupported Chain Id', 'Unsupported Chain Id Error. Check your chain Id.');
					window.localStorage.removeItem(connectorLocalStorageKey);
				} else if (error instanceof NoEthereumProviderError || error instanceof NoBscProviderError) {
					toastError('Provider Error', 'No provider was found');
					window.localStorage.removeItem(connectorLocalStorageKey);
				} else if (
					error instanceof UserRejectedRequestErrorInjected ||
					error instanceof UserRejectedRequestErrorWalletConnect
				) {
					if (connector instanceof WalletConnectConnector) {
						const walletConnector = connector as WalletConnectConnector;
						walletConnector.walletConnectProvider = null;
					}
					toastError('Authorization Error', 'Please authorize to access your account');
				} else {
					toastError(error.name, error.message);
					window.localStorage.removeItem(connectorLocalStorageKey);
				}
			});
		} else {
			toastError("Can't find connector", 'The connector config is wrong');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const logout = useCallback(() => {
		deactivate();
		window.localStorage.removeItem('walletconnect');
	}, [deactivate]);

	return { login, logout };
};

export default useAuth;
