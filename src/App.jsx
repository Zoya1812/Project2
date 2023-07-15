import React from "react";
import { RestaurantPage } from "./pages/RestaurantPage/RestaurantPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CartPage } from "./pages/CartPage/CartPage";
import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/HomePage/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Restaurant } from "./components/Restaurant/Restaurant";
import { Menu } from "./components/Menu/Menu";
import { Reviews } from "./components/Reviews/Reviews";
import { DishPage } from "./pages/Dish/DishPage";
import { DishesPage } from "./pages/Dishes/DishesPage";

export const App = () => {
return (
<BrowserRouter>
<div>
	<Header/>
	<Routes>
		<Route index element={<HomePage/>}/>
		<Route path="restaurants" element={<RestaurantPage/>}>
			<Route index element={<span> Select restaurant</span>}/>
			<Route path=":restaurantId" element={<Restaurant/>}>
			{/* если мы переходим на Restaurant без уточнения menu или reviews, то нас вчегда редиректит на menu */}
				<Route index element={<Navigate to="menu" replace/>}/>
				<Route path="menu" element={<Menu/>}/>
				<Route path="reviews" element={<Reviews/>}/>
			</Route>
		</Route>
		<Route path="cart" element={<CartPage/>}/>
		<Route path="redirect" element={<Navigate to="/" replace/>}/>
		<Route path="dish/:dishId" element={<DishPage/>}/>
		<Route path="dishes" element={<DishesPage/>}/>
		<Route path="*" element={<NotFoundPage/>}/>
	</Routes>
</div>
</BrowserRouter>
)}
