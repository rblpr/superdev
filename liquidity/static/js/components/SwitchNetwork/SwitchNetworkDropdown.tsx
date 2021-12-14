import React from 'react';
import SwitchNetworkList from './SwitchNetworkList'
import './style.scss';

interface SwitchNetworkProps {
	closeToggle?: any;
}

const SwitchNetworkDropdown: React.FC<SwitchNetworkProps> = () => {
	return (
    <div className='dropdown-container'>
      <SwitchNetworkList/>
    </div>
	);
};



export default SwitchNetworkDropdown;
