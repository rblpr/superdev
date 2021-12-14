import SETTING from '../enums/setting';
import THEME from '../enums/theme';

export function getMute() {
	let mute = localStorage.getItem(SETTING.MUTE);
	mute = JSON.parse(mute);

	return mute || false;
}

export function toggleMute() {
	const mute = !getMute();
	localStorage.setItem(SETTING.MUTE, JSON.stringify(mute));
}

export function getTheme() {
	let theme = localStorage.getItem(SETTING.THEME);
	theme = JSON.parse(theme);

	return theme || THEME.LIGHT_MODE;
}

export function toggleTheme() {
	let theme = getTheme();
	theme = theme === THEME.LIGHT_MODE ? THEME.SPACE_MODE : THEME.LIGHT_MODE;

	localStorage.setItem(SETTING.THEME, JSON.stringify(theme));
}
