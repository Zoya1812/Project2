import React from "react";

export const transformRestaurantsToTabs = (restaurants) => {
	return restaurants.map(({name}) => ({title:name}));
}
