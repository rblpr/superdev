import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { kebabCase } from 'lodash';
import BigNumber from 'bignumber.js';
import { Toast, toastTypes } from '@pancakeswap-libs/uikit';
import { getMute, getTheme, toggleMute, toggleTheme } from 'utils/helper';
import THEME from 'enums/theme';
import { State, Farm } from './types';
import { push as pushToast, remove as removeToast, clear as clearToast, setMuteMode, setSpaceMode } from './actions';

const ZERO = new BigNumber(0);

export const useFarmFromPid = (pid): Farm | undefined => {
	const farm = useSelector((state: State) => state.farms.data.find((f) => f.pid === pid));
	return farm;
};

export const usePriceBnbBusd = (): BigNumber => {
	const pid = 2; // BUSD-BNB LP
	const farm = useFarmFromPid(pid);
	return farm ? new BigNumber(1).div(farm.tokenPriceVsQuote ?? 0) : ZERO;
};

export const usePriceCakeBusd = (): BigNumber => {
	const pid = 1; // WAD-BNB LP
	const bnbPriceUSD = usePriceBnbBusd();
	const farm = useFarmFromPid(pid);
	return farm ? bnbPriceUSD.times(farm.tokenPriceVsQuote ?? 0) : ZERO;
	// return ZERO
};

// Toasts
export const useToast = () => {
	const dispatch = useDispatch();
	const helpers = useMemo(() => {
		const push = (toast: Toast) => dispatch(pushToast(toast));

		return {
			toastError: (title: string, description?: string) => {
				return push({ id: kebabCase(title), type: toastTypes.DANGER, title, description });
			},
			toastInfo: (title: string, description?: string) => {
				return push({ id: kebabCase(title), type: toastTypes.INFO, title, description });
			},
			toastSuccess: (title: string, description?: string) => {
				return push({ id: kebabCase(title), type: toastTypes.SUCCESS, title, description });
			},
			toastWarning: (title: string, description?: string) => {
				return push({ id: kebabCase(title), type: toastTypes.WARNING, title, description });
			},
			push,
			remove: (id: string) => dispatch(removeToast(id)),
			clear: () => dispatch(clearToast()),
		};
	}, [dispatch]);

	return helpers;
};

// Setting
export const useSetting = () => {
	const dispatch = useDispatch();

	let _theme;
	const theme = getTheme();
	let t = window.location.search.split('t=')[1];
	if (t) t = t.slice(0, 1);
	if (t) {
		_theme = t === '1' ? THEME.SPACE_MODE : THEME.LIGHT_MODE;

		if (_theme !== theme) {
			toggleTheme();
		}
	} else {
		_theme = getTheme();
	}

	let _mute;
	const mute = getMute();
	let s = window.location.search.split('s=')[1];
	if (s) s = s.slice(0, 1);
	if (s) {
		_mute = s === '1';

		if (_mute !== mute) {
			toggleMute();
		}
	} else {
		_mute = getMute();
	}

	const isSpaceMode = theme === THEME.SPACE_MODE;
	dispatch(setMuteMode(!!mute));
	dispatch(setSpaceMode(isSpaceMode));
	document.body.setAttribute('data-theme', theme);
};

export const useSettingMode = () => {
	return useSelector((state: State) => state.setting);
};
