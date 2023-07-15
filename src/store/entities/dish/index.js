import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../constants/statuses";
import { loadDishesByRestaurantId } from "./thunks/loadDishesByRestaurantId";
import { loadDishes } from "./thunks/loadDishes"; 
import { loadDishById } from "./thunks/loadDishById";

// здесь описывается их поведение
export const dishEntityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
	name: "dish",
	initialState: dishEntityAdapter.getInitialState({
		loadingStatus: REQUEST_STATUSES.idle,
	}),
	extraReducers: (build) => 
	build

	.addCase(loadDishesByRestaurantId.pending, (state) => {
		state.loadingStatus = REQUEST_STATUSES.pending
	})

	.addCase(loadDishesByRestaurantId.fulfilled, (state, {payload}) => {
		dishEntityAdapter.upsertMany(state, payload);
		state.loadingStatus = REQUEST_STATUSES.success
	})

	.addCase(loadDishesByRestaurantId.rejected, (state, {payload}) => {
		state.loadingStatus =
		payload === REQUEST_STATUSES.earlyLoaded
		? REQUEST_STATUSES.success
		: REQUEST_STATUSES.failed;
	})

	.addCase(loadDishes.pending, (state) => {
		state.loadingStatus = REQUEST_STATUSES.pending
	})

	.addCase(loadDishes.fulfilled, (state, { payload }) => {
		dishEntityAdapter.upsertMany(state, payload);
		state.loadingStatus = REQUEST_STATUSES.success;
	})

	.addCase(loadDishes.rejected, (state) => {
		state.loadingStatus = REQUEST_STATUSES.failed
	})

	.addCase(loadDishById.pending, (state) => {
		state.loadingStatus = REQUEST_STATUSES.pending;
	})

	.addCase(loadDishById.fulfilled, (state, {payload}) => {
		dishEntityAdapter.upsertOne(state, payload)
		state.loadingStatus = REQUEST_STATUSES.success;
	})

	.addCase(loadDishById.rejected, (state, {payload}) => {
		state.loadingStatus = 
		payload === REQUEST_STATUSES.earlyLoaded
		? REQUEST_STATUSES.success
		: REQUEST_STATUSES.failed;
	})
})
