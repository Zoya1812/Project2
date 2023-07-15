import { createAsyncThunk } from "@reduxjs/toolkit"
import { selectRestaurantReviewsById } from "../../restaurant/selectors"
import { selectReviewIds } from "../selector"
import { REQUEST_STATUSES } from "../../../../constants/statuses"

export const loadReviewsIfNotExist = createAsyncThunk(
	'review/loadReviewsIfNotExist',
	async(restaurantId, { getState, rejectWithValue }) => {

	const state = getState();
	const restaurantReviewsIds = selectRestaurantReviewsById(state, {restaurantId})
	const loadedReviewIds = selectReviewIds(state);

if (restaurantReviewsIds.every((restaurantReviewsId) => 
	loadedReviewIds.includes(restaurantReviewsId))) {
	// если каждый отзыв определенного ресторана равен всем загруженным сейчас отзывам, тогда ничего не загружать больше
	return rejectWithValue(REQUEST_STATUSES.earlyLoaded)
}

const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`)
return await response.json()
})