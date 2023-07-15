import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/entities/restaurant/selectors";
import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import classNames from "classnames";
import styles from "./styles.module.css"

const tabs = ["Menu", "Reviews"];

export const Restaurant = () => {
const { restaurantId } = useParams();
const restaurant = useSelector(state => 
	selectRestaurantById(state, { restaurantId }));

	if(!restaurant){
		return null;
	}

	const { name } = restaurant;

	return(
	<div>
		<h2 className={styles.restaurantName}>{name}</h2>
		<div>
			{tabs.map((tab) => (
				<NavLink
				key={tab}
				to={tab}
				
				className={({ isActive }) => 
					classNames(styles.tab, { [styles.active]: isActive })
					}>
					{tab}
				</NavLink>
			))}
		</div>
		<Outlet/>
	</div>
)};