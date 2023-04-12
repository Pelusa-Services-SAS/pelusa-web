// Libraries
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

// Types
import { type IAuthenticationState } from './types';

const initialState: IAuthenticationState = {
	user: null,
	token: '',
	isAuthenticated: false,
	failedRequest: null,
};

export const authenticationSlice = createSlice({
	name: 'authentication',
	initialState,
	reducers: {
		setAuthenticated: (state, action: PayloadAction<IAuthenticationState>) => {
			state.isAuthenticated = action.payload.isAuthenticated;
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.failedRequest = '';
		},
		setFailedRequest: (state, action: PayloadAction<string | null>) => {
			state.failedRequest = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setAuthenticated, setFailedRequest } =
	authenticationSlice.actions;

export default authenticationSlice.reducer;
