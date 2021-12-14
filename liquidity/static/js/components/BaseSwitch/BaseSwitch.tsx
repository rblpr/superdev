import React from 'react';
import './style.scss';

interface BaseSwitchProps {
	name: string;
	checked?: boolean;
	onToggle(): any;
}

const BaseSwitch: React.FC<BaseSwitchProps> = ({ name, checked, onToggle }) => {
	return (
		<div className="onoffswitch">
			<input
				type="checkbox"
				name="onoffswitch"
				className="onoffswitch-checkbox"
				id={name}
				checked={checked}
				onChange={onToggle}
			/>
			<>{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
			<label className="onoffswitch-label" htmlFor={name}>
				<span className="onoffswitch-inner" />
				<span className="onoffswitch-switch" />
			</label>
		</div>
	);
};

export default BaseSwitch;
