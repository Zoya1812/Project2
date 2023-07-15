import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "../selectors"
import { REQUEST_STATUSES } from "../../../../constants/statuses";

// здесь используем асик сакту потому что она выполняется асихронно, сразу 
export const loadRestaurantsIfNotExist = createAsyncThunk(
"restaurant",
//от этого названия потом будет создаваться название действия restaurant/pending..
async (_, {getState, rejectWithValue}) => {
	// встроенные thunk значения

	const restaurantIds = selectRestaurantIds(getState());

	if (restaurantIds.length){
		return rejectWithValue(REQUEST_STATUSES.earlyLoaded);
	}
	
	// если данные у нас были загружены ранее, выдать earlyLoaded. Если нет, то следующий код 
	const response = await fetch("http://localhost:3001/api/restaurants/");
	return await response.json()
})