import React from "react"
import { useSelector } from "react-redux"
import { selectRestaurantsFilteredByName } from "../../store/entities/restaurant/selectors"
import { Tabs } from "../../components/Tabs/Tabs"
import { useSearchParams } from "react-router-dom"
import styles from "./stylee.module.css"
import { SIZE } from "../../constants/size"

export const RestaurantTabs = () => {
	// и туда же включаем поискую строку по поиску ресторана 
	const [searchParams, setSearchParams] = useSearchParams();
	const restaurants = useSelector(state => 
		selectRestaurantsFilteredByName(state, {
			searchValue: searchParams.get("search") || "",
		}))

	const restaurantTabs = restaurants.map(({ id, name }) => ({
		id,
		title: name,
	}))

	return (
	<div>
		<input 
		className={styles.input}
			value={searchParams.get('search') || ''} 
			onChange={(event) => setSearchParams({search: event.target.value})}
		/>
		<Tabs  tabs={restaurantTabs}	/>
	</div>
)} 