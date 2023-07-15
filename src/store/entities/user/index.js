import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";
import { loadUsersIfNotExist } from "./thunk/loadUsersIfNotExist";

const userEntityAadapter = createEntityAdapter();

export const userSlice = createSlice({
	name: "user",
	initialState: userEntityAadapter.getInitialState({
		loadingStatus: REQUEST_STATUSES.idle,
	}),
	extraReducers: (builder) => 
	builder
	.addCase(loadUsersIfNotExist.pending, (state) => {
		state.loadingStatus = REQUEST_STATUSES.pending;
	})
	.addCase(loadUsersIfNotExist.fulfilled, (state, {payload}) => {
		userEntityAadapter.setAll(state, payload);
		state.loadingStatus = REQUEST_STATUSES.success;
	})
	.addCase(loadUsersIfNotExist.rejected, (state, {payload}) => {

		state.loadingStatus = 
		payload === REQUEST_STATUSES.earlyLoaded
		? REQUEST_STATUSES.success
		: REQUEST_STATUSES.failed;
	}),
})
