import React, { useState } from 'react';
import { useMatchBreakpoints, ConnectorNames } from '@pancakeswap-libs/uikit';
import { getProviderInfo } from 'web3modal'
import { Dialog } from 'primereact/dialog';
import { useSettingMode } from 'state/hooks';
import SwitchNetworkList from './SwitchNetworkList'
import useActiveWeb3React from '../../hooks/useActiveWeb3React'
import useAuth from '../../hooks/useAuth';
import './style.scss';

interface SwitchNetworkProps {
	visible?: boolean;
	onHide(): any;
}

const SwitchNetworkModal: React.FC<SwitchNetworkProps> = ({ visible, onHide }) => {
  const [walletName, setWalletName] = useState('');
  const web3ReactContext = useActiveWeb3React();
	const { isXl } = useMatchBreakpoints();
	const isMobile = !isXl;
  const walletProvider = window.localStorage.getItem('connectorId');

	const { spaceMode, muteMode } = useSettingMode();
	const query = `&t=${spaceMode ? '1' : '0'}&s=${muteMode ? '1' : '0'}`;

	const isAlpha = process.env.REACT_APP_ENV === 'alpha';

  const handleWalletName = async () => {
		const provider = await web3ReactContext?.connector?.getProvider()
		const { name } = getProviderInfo(provider)
		setWalletName(name)
	}

  const { login } = useAuth();
	const onLogin = (key) => {
		login(key);
    onHide();
	};

	handleWalletName()

  const walleTypes = [
    {
      iconPath: '/images/icon-metamask.svg',
      displayText: 'MetaMask',
      walletNameSupport: 'MetaMask',
      walletProvider: ConnectorNames.Injected,
    },
    {
      iconPath: '/images/icon-walletconnect.svg',
      displayText: 'WalletConnect',
      walletProvider: ConnectorNames.WalletConnect,
    },
    {
      iconPath: '/images/icon-safepal.svg',
      displayText: 'SafePal',
      walletNameSupport: 'Web3',
      walletProvider: ConnectorNames.Injected,
    },
    {
      iconPath: '/images/icon-trust-wallet.svg',
      displayText: 'Trust Wallet',
      walletNameSupport: 'Trust',
      walletProvider: ConnectorNames.Injected,
    }
  ]
	return (
		<Dialog
			header="Select Network"
			visible={visible}
			className="select-network-modal-mobile"
			position={isMobile ? 'bottom' : 'center'}
			dismissableMask
			onHide={onHide}
		>
			<SwitchNetworkList/>
      <div className="divider mt-4"/>
      <div>
        <p className="text-center text-15 font-medium my-4">Select Wallet</p>
        <div className="flex justify-evenly space-x-2">
            {walleTypes.map(wallet => {
              return (
                <div
                  role="presentation"
                  onClick={() => onLogin(wallet.walletProvider)}
                  className="flex flex-col justify-center items-center space-y-2"
                >
                  <div className="icon-wallet-wrapper">
                    <img src={wallet.iconPath } alt="icon-wallet"/>
                    <img
                      src="/images/icon-check.svg"
                      alt="icon-check"
                      className={`w-20px absolute icon-check-walet-position icon-check-display
                        ${ walletProvider === wallet.walletProvider &&
                          (wallet.walletNameSupport ? wallet.walletNameSupport === walletName: true ) ? 'visible': ''
                        }
                      `}
                    />
                  </div>
                <div className="text-11 font-medium">{ wallet.displayText }</div>
                </div>
              )
            })}
        </div>
      </div>
		</Dialog>
	);
};

export default SwitchNetworkModal;
