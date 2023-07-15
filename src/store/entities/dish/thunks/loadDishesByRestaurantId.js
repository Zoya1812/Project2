import { createAsyncThunk } from "@reduxjs/toolkit";
import { dishSlice } from "..";
import { selectRestaurantMenuById } from "../../restaurant/selectors";
import { selectDishIds } from "../selector";
import { REQUEST_STATUSES } from "../../../../constants/statuses";

export const loadDishesByRestaurantId = createAsyncThunk(
"dish/loadDishesByRestaurantId",
async (restaurantId, { getState, rejectWithValue }) => {

    const state = getState();
    const restaurantDishIds = selectRestaurantMenuById(state, { restaurantId });
    const loadedDishIds = selectDishIds(state);

    if (restaurantDishIds.every((restaurantDishId) => 
        loadedDishIds.includes(restaurantDishId)
        )
        ) {
            return rejectWithValue(REQUEST_STATUSES.earlyLoaded)  
        }

        const response = await fetch(
            `http://localhost:3001/api/products?restaurantId=${restaurantId}/`
        )
        return await response.json()
}
)