import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";
import {loadRestaurantsIfNotExist} from "./thunk/loadRestaurantsIfNotExist"

const restaurantEntityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({

name: "restaurant",

initialState: restaurantEntityAdapter.getInitialState({
	// оно по умолчанию включает в себя entities: .., ids:..; а если надо добавить еще, то вписать вот так :
	status: REQUEST_STATUSES.idle,
}), 
extraReducers: (build) => 
	build
	.addCase(loadRestaurantsIfNotExist.pending, (state) => {
	state.status = REQUEST_STATUSES.pending;
	})
	.addCase(loadRestaurantsIfNotExist.rejected, (state, { payload }) => {
		state.status = 
		payload === REQUEST_STATUSES.earlyLoaded
		? REQUEST_STATUSES.success
		: REQUEST_STATUSES.failed; 
	})
	.addCase(loadRestaurantsIfNotExist.fulfilled, (state, {payload}) => {
		restaurantEntityAdapter.setAll(state, payload)
		state.status = REQUEST_STATUSES.success;
	})
})



