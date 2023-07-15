import { REQUEST_STATUSES } from "../../../constants/statuses";

export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantById = ( state, { restaurantId}) => 
selectRestaurantModule(state).entities[restaurantId];

export const selectRestaurantIds = (state) =>
selectRestaurantModule(state).ids;

export const selectRestaurants = (state) =>
Object.values(selectRestaurantModule(state).entities);

export const selectRestaurantsFilteredByName = (state, {searchValue}) =>
Object.values(selectRestaurantModule(state).entities).filter(
	({ name }) => name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
);

export const selectRestaurantMenuById = (state, { restaurantId }) => 
selectRestaurantById(state, { restaurantId })?.menu;

export const selectRestaurantReviewsById = (state, { restaurantId }) => 
selectRestaurantById(state, { restaurantId })?.reviews;

export const selectRestaurantLoadingStatus = (state) => 
selectRestaurantModule(state).status;

export const selectIsRestaurantLoading = (state) => 
selectRestaurantLoadingStatus(state) === REQUEST_STATUSES.pending;

export const selectIsRestaurantLoaded = (state) => 
selectRestaurantLoadingStatus(state) === REQUEST_STATUSES.success;