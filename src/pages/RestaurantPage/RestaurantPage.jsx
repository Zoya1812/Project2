import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RestaurantTabs } from "../../containers/RestaurantTabs/RestauraurantTabs"
import { loadRestaurantsIfNotExist } from "../../store/entities/restaurant/thunk/loadRestaurantsIfNotExist"
import {
  selectIsRestaurantLoaded,
  selectIsRestaurantLoading,
  selectRestaurantIds,
} from "../../store/entities/restaurant/selectors";

import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";

export const RestaurantPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsRestaurantLoading);

  useEffect(() => {
    dispatch(loadRestaurantsIfNotExist());
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div className={styles.root}>
      <div>
        <RestaurantTabs />
        <Outlet />
      </div>
    </div>
  );
};
