import React from 'react';
import { useSettingMode } from 'state/hooks';
import './style.scss';

interface SwitchNetworkProps {
  padding?: string;
}

const SwitchNetworkList: React.FC<SwitchNetworkProps> = ({ padding ='8px 25px' }) => {

	const { spaceMode, muteMode } = useSettingMode();
	const query = `&t=${spaceMode ? '1' : '0'}&s=${muteMode ? '1' : '0'}`;

	const isAlpha = process.env.REACT_APP_ENV === 'alpha';

	return (
    <div>
      <div
        className="flex flex-col network-btn-wrap2"
        style={{ padding }}
      >
        <div className="flex items-center">
          <div className="relative mr-5">
            <img
              src='/images/icon-bsc-round.svg'
              alt="icon-network"
              width="25"
            />
            <img
              src="/images/icon-check.svg"
              alt="icon-check"
              className="w-15px absolute icon-check-position"
            />
          </div>
          <span className="network-active">
            Binance Smart Chain
          </span>
        </div>
      </div>
      <a
        className="flex flex-col network-btn-wrap2"
        style={{ padding }}
        href={`https://${
        isAlpha ? 'alpha' : 'www'
      }.wardenswap.finance/#/best-rate-swap?network=polygon${query}`}
      >
        <div className="flex items-center">
          <div className="relative mr-5">
            <img
              src='/images/icon-polygon-round.svg'
              alt="icon-network"
              width="25"
            />
          </div>
          <span>
            Polygon
          </span>
        </div>
      </a>
      <a
        className="flex flex-col network-btn-wrap2"
        style={{ padding }}
        href={`https://${
        isAlpha ? 'alpha' : 'www'
      }.wardenswap.finance/#/best-rate-swap?network=arbitrum${query}`}
      >
        <div className="flex items-center">
          <div className="relative mr-5">
            <img
              src='/images/icon-arbitrum-round.svg'
              alt="icon-network"
              width="25"
            />
          </div>
          <span>
            Arbitrum
          </span>
        </div>
      </a>
    </div>
	);
};

export default SwitchNetworkList;
