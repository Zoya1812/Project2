import React, { useCallback, useEffect, useRef } from "react";
import { Dish } from "../Dish/Dish"
import { selectRestaurantMenuById } from "../../store/entities/restaurant/selectors";
import styles from "./styles.module.css"
import { useDispatch, useSelector } from "react-redux";
import { selectIsDishLoading } from "../../store/entities/dish/selector";
import { Button } from "../Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { loadDishesByRestaurantId } from "../../store/entities/dish/thunks/loadDishesByRestaurantId";
import { SIZE } from "../../constants/size";

export const Menu = () => {
const dispatch = useDispatch();
const {restaurantId}  = useParams();
const menu = useSelector((state) => 
	selectRestaurantMenuById(state, {restaurantId}))

const isLoading = useSelector(selectIsDishLoading);

const navigate = useNavigate();
	
useEffect(() => {
	dispatch(loadDishesByRestaurantId(restaurantId));
}, [restaurantId]);

if (isLoading) {
	return <span>Loading...</span>
}

return (
<div>
	<h3>Menu</h3>
	
	<div className={styles.dishes}>
		{menu.map((dishId) => (
		<Dish key={dishId} dishId={dishId} className={styles.dish}/>
	))} 
	</div>
	<Button className={styles.navigate} size={SIZE.m} onClick={() => navigate("/cart")}>
		Go to Order
	</Button>
</div>
)}