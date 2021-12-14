import React from 'react';
import { useSettingMode } from 'state/hooks';

interface ContactInfoProps {
	styleOption?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ styleOption }) => {
	const { spaceMode } = useSettingMode();

	return (
		<div className={`flex ${styleOption}`}>
			<a href="https://bit.ly/39dTjER" target="_blank" rel="noreferrer" className="m-2">
				<img
					alt="icon"
					className="cursor-pointer"
					src={`/images/icon-gitbook${spaceMode ? '-space' : ''}.svg`}
				/>
			</a>
			<a href="https://bit.ly/3urUUjQ" target="_blank" rel="noreferrer" className="m-2">
				<img
					alt="icon"
					className="cursor-pointer"
					src={`/images/icon-discord${spaceMode ? '-space' : ''}.svg`}
				/>
			</a>
			<a href="https://bit.ly/3hUkHLM" target="_blank" rel="noreferrer" className="m-2">
				<img
					alt="icon"
					className="cursor-pointer"
					src={`/images/icon-coinmarketcap${spaceMode ? '-space' : ''}.svg`}
				/>
			</a>
			<a href="https://bit.ly/2Vz7xfJ" target="_blank" rel="noreferrer" className="m-2">
				<img
					alt="icon"
					className="cursor-pointer"
					src={`/images/icon-coingecko${spaceMode ? '-space' : ''}.svg`}
				/>
			</a>
			<a href="https://bit.ly/39cZaun" target="_blank" rel="noreferrer" className="m-2">
				<img
					alt="icon"
					className="cursor-pointer"
					src={`/images/icon-twitter${spaceMode ? '-space' : ''}.svg`}
				/>
			</a>
			<a href="https://bit.ly/3d06D0Q" target="_blank" rel="noreferrer" className="m-2">
				<img
					alt="icon"
					className="cursor-pointer"
					src={`/images/icon-medium${spaceMode ? '-space' : ''}.svg`}
				/>
			</a>
			<a href="https://bit.ly/3wkmJeK" target="_blank" rel="noreferrer" className="m-2">
				<img
					alt="icon"
					className="cursor-pointer"
					src={`/images/icon-telegram${spaceMode ? '-space' : ''}.svg`}
				/>
			</a>
			<a href="https://bit.ly/39fgD59" target="_blank" rel="noreferrer" className="m-2">
				<img
					alt="icon"
					className="cursor-pointer"
					src={`/images/icon-github${spaceMode ? '-space' : ''}.svg`}
				/>
			</a>
		</div>
	);
};

export default ContactInfo;
