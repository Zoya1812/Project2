import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantsFilteredByName } from "../../store/entities/restaurant/selectors";
import { loadRestaurantsIfNotExist } from "../../store/entities/restaurant/thunk/loadRestaurantsIfNotExist"
import { RestaurantLink } from "../RestaurantLink/RestaurantLink";

import styles from "./styles.module.css";

export const RestaurantList = ({ dishId }) => {
  const dispatch = useDispatch();
  const restaurantIds = useSelector((state) =>
  selectRestaurantsFilteredByName(state, { dishId })
  );

  useEffect(() => {
    dispatch(loadRestaurantsIfNotExist());
  }, []);

  return (
    <div>
      <h3>Доступно в:</h3>
      {restaurantIds.map((restaurantId) => (
        <RestaurantLink
          key={restaurantId}
          restaurantId={restaurantId}
          className={styles.restaurant}
        />
      ))}
    </div>
  );
};
