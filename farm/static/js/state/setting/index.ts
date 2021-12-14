import { createSlice } from '@reduxjs/toolkit';
import { Setting } from '../types';

const initialState: Setting = { spaceMode: false, muteMode: false };

export const settingSlice = createSlice({
	name: 'Setting',
	initialState,
	reducers: {
		setSpaceMode: (state: Setting, action) => {
			const { payload } = action;
			// eslint-disable-next-line no-param-reassign
			state.spaceMode = payload;
		},
		setMuteMode: (state: Setting, action) => {
			const { payload } = action;
			// eslint-disable-next-line no-param-reassign
			state.muteMode = payload;
		},
	},
});

// Actions
export const { setSpaceMode, setMuteMode } = settingSlice.actions;

export default settingSlice.reducer;
