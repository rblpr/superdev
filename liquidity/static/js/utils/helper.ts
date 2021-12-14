import SETTING from '../enums/setting';
import THEME from '../enums/theme';

export function getMute() {
	const mute = localStorage.getItem(SETTING.MUTE);
	return mute ? JSON.parse(mute) : false;
}

export function toggleMute() {
	const mute = !getMute();
	localStorage.setItem(SETTING.MUTE, JSON.stringify(mute));
}

export function getTheme() {
	const theme = localStorage.getItem(SETTING.THEME);
	return theme ? JSON.parse(theme) : THEME.LIGHT_MODE;
}

export function toggleTheme() {
	let theme = getTheme();
	theme = theme === THEME.LIGHT_MODE ? THEME.SPACE_MODE : THEME.LIGHT_MODE;

	localStorage.setItem(SETTING.THEME, JSON.stringify(theme));
}
