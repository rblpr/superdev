import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Dialog } from 'primereact/dialog';
import { useMatchBreakpoints } from '@pancakeswap-libs/uikit';
import './style.scss';
import { setSpaceMode, setMuteMode } from 'state/setting';
import { getMute, getTheme, toggleMute, toggleTheme } from 'utils/helper';
import THEME from '../../enums/theme';
import { State } from '../../state/types';

// components
import BaseSwitch from '../BaseSwitch';

interface SettingProps {
	visible?: boolean;
	isMobile?: boolean;
	modalPosition?: string;
	onHide(): any;
}

const Divider = styled.div`
	height: 1px;
	width: 100%;
	background-color: var(--color-border-2);
`;

const SettingModal: React.FC<SettingProps> = ({ visible, onHide }) => {
	const dispatch = useDispatch();
	const { spaceMode, muteMode } = useSelector((state: State) => state.setting);

	const { isXl } = useMatchBreakpoints();
	const isMobile = !isXl;

	const onToggleMute = () => {
		toggleMute();

		const mute = getMute();
		dispatch(setMuteMode(mute));

		if (!mute) {
			const audio = document.getElementById('bgMusic') as HTMLAudioElement;

			if (audio) {
				audio.play();
			}
		}
	};

	const onToggleTheme = () => {
		toggleTheme();

		const theme = getTheme();
		const isSpaceMode = theme === THEME.SPACE_MODE;
		dispatch(setSpaceMode(isSpaceMode));

		document.body.setAttribute('data-theme', theme);
		window.history.pushState('', '', '/');
	};

	return (
		<Dialog
			header="Settings"
			visible={visible}
			className={`settings-modal-desktop ${isMobile ? 'settings-modal-mobile' : ''}`}
			position={isMobile ? 'bottom' : 'center'}
			dismissableMask
			onHide={onHide}
		>
			<div className="setting-item">
				<div className="setting-item-img">
					<img src={spaceMode ? '/images/space_mode-space.svg' : '/images/space_mode.svg'} alt="space" />
				</div>
				<div className="setting-item-text">
					<h4>Space Mode</h4>
					<p>
						When your eyes are burning, we would like to invite you to join us on a space trip.
						<img className="inline" src="/images/icon-smile.svg" alt="smile" />
					</p>
				</div>
				<div>
					<BaseSwitch name="theme" checked={spaceMode} onToggle={onToggleTheme} />
				</div>
			</div>

			<Divider />

			<div className="setting-item">
				<div className="setting-item-img">
					<img src={spaceMode ? '/images/sound_mode-space.svg' : '/images/sound_mode.svg'} alt="sound" />
				</div>
				<div className="setting-item-text">
					<h4>Silent Mode</h4>
					<p>
						If you are annoyed by the “pew pew” noise during token exchange. You can turn off the sound
						<img className="inline" src="/images/icon-mute.svg" alt="mute" />
					</p>
				</div>
				<div>
					<BaseSwitch name="sound" checked={muteMode} onToggle={onToggleMute} />
				</div>
			</div>
		</Dialog>
	);
};

export default SettingModal;
