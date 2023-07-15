import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from "../selector"
import { REQUEST_STATUSES } from "../../../../constants/statuses";

export const loadDishById = createAsyncThunk(
'dish/loadDishById',
async(dishId, {getState, rejectWithValue}) => {
    const dish = selectDishById(getState(), { dishId });

    if(dish) {
        return rejectWithValue(REQUEST_STATUSES.earlyLoaded)
    }

const response = await fetch(`http://localhost:3001/api/products?productId=${dishId}`);

return await response.json();
}
)