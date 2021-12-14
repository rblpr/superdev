/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import farmsConfig from 'config/constants/farms';
import { QuoteToken } from 'config/constants/types';
import { PoolType } from '../../config/constants/types';
import fetchFarms from './fetchFarms';
import fetchFarmsPancake from './fetchFarmsPancake';
import {
	fetchFarmUserEarnings,
	fetchFarmUserAllowances,
	fetchFarmUserTokenBalances,
	fetchFarmUserStakedBalances,
} from './fetchFarmUser';
import { FarmsState, Farm } from '../types';

// TODO: Add pool pancake special case
const initialState: FarmsState = {
	data: [
		...farmsConfig,
		{
			pid: 999,
			lpSymbol: 'WAD-BNB LP',
			lpAddresses: {
				97: '',
				56: '0xf70a40749006c7952186666c92f32b8f5c2129f9',
			},
			tokenSymbol: 'WAD',
			tokenAddresses: {
				97: '',
				56: '0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc',
			},
			quoteTokenSymbol: QuoteToken.BNB,
			quoteTokenAdresses: {
				56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
			},
			poolType: PoolType.LP_PANCAKE,
  	}
	]
};

export const farmsSlice = createSlice({
	name: 'Farms',
	initialState,
	reducers: {
		setFarmsPublicData: (state, action) => {
			const liveFarmsData: Farm[] = action.payload;
			state.data = state.data.map((farm) => {
				const liveFarmData = liveFarmsData.find((f) => f.pid === farm.pid);
				return { ...farm, ...liveFarmData };
			});
		},
		setFarmUserData: (state, action) => {
			const { arrayOfUserDataObjects } = action.payload;
			arrayOfUserDataObjects.forEach((userDataEl) => {
				const { index } = userDataEl;
				state.data[index] = { ...state.data[index], userData: userDataEl };
			});
		},
	},
});

// Actions
export const { setFarmsPublicData, setFarmUserData } = farmsSlice.actions;

// Thunks
export const fetchFarmsPublicDataAsync = () => async (dispatch) => {
	const farms = await fetchFarms();
	const farmsPancake = await fetchFarmsPancake();
	const allData = [...farms, ...farmsPancake]
	dispatch(setFarmsPublicData(allData));
};
export const fetchFarmUserDataAsync = (account) => async (dispatch) => {
	const userFarmAllowances = await fetchFarmUserAllowances(account);
	const userFarmTokenBalances = await fetchFarmUserTokenBalances(account);
	const userStakedBalances = await fetchFarmUserStakedBalances(account);
	const userFarmEarnings = await fetchFarmUserEarnings(account);

	const arrayOfUserDataObjects = userFarmAllowances.map((farmAllowance, index) => {
		return {
			index,
			allowance: userFarmAllowances[index],
			tokenBalance: userFarmTokenBalances[index],
			stakedBalance: userStakedBalances[index],
			earnings: userFarmEarnings[index],
		};
	});

	dispatch(setFarmUserData({ arrayOfUserDataObjects }));
};

export default farmsSlice.reducer;
