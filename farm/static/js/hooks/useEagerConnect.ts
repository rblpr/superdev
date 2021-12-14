import { useEffect } from 'react';
import { connectorLocalStorageKey, ConnectorNames } from '@pancakeswap-libs/uikit';
import useAuth from 'hooks/useAuth';

const useEagerConnect = () => {
	const { login } = useAuth();

	useEffect(() => {
		const connectorId = window.localStorage.getItem(connectorLocalStorageKey) as ConnectorNames;
		// Disable eager connect for BSC Wallet. Currently the BSC Wallet extension does not inject BinanceChain
		// into the Window object in time causing it to throw an error
		// TODO: Figure out an elegant way to listen for when the BinanceChain object is ready
		if (connectorId && connectorId !== ConnectorNames.BSC) {
			login(connectorId);
			// TOTO: Should find solution to detect mobile
			// @ts-ignore
		} else if (typeof window.ethereum !== 'undefined' && window.innerWidth <= 768) {
			login(ConnectorNames.Injected);
			window.localStorage.setItem('connectorId', ConnectorNames.Injected)
		}
	}, [login]);
};

export default useEagerConnect;
