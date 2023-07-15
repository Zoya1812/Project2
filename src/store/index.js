import { combineReducers, createStore } from "redux"
import { logger } from "./middleware/logger"
import { configureStore } from "@reduxjs/toolkit"
import { restaurantSlice } from "./entities/restaurant"
import { reviewsSlice } from "./entities/review"
import { userSlice } from "./entities/user"
import { dishSlice } from "./entities/dish"
import { cartSlice } from "./cart" 

const rootReducer = combineReducers({
	cart: cartSlice.reducer,
	restaurant: restaurantSlice.reducer,
	review: reviewsSlice.reducer,
	user: userSlice.reducer,
	dish: dishSlice.reducer,
})


export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => 
	getDefaultMiddleware().concat([logger]),
	// к массиву дефолтных мидлвар присоединяем массив мидлвар, которые мы сам сделали

})

console.log('state', store.getState())