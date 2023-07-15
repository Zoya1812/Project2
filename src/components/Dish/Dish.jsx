import React, { memo } from "react";
import { Button } from "../Button/Button";
import styles from "./style.module.css"
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux"
import { selectDishCount } from "../../store/cart/selector";
import { selectDishById } from "../../store/entities/dish/selector";
import { cartSlice } from "../../store/cart";
import { Link } from "react-router-dom";
import { SIZE } from "../../constants/size";
import { BUTTON_VIEW_VARIANT } from "../Button/constance";

export const Dish = ({ dishId, route, className }) => {
	const dish = useSelector((state) => selectDishById(state, { dishId }));
	const count = useSelector((state) => selectDishCount(state, { dishId }));
	const dispatch = useDispatch();
	
	if (!dish) {
		return null;
	}
	
	const decrement = () => dispatch(cartSlice.actions.decrementDish(dishId));
	const increment = () => dispatch(cartSlice.actions.incrementDish(dishId));
	
	const { name, ingredients } = dish;
	
	return (
		<div
		className={classnames(styles.root, className, {
			[styles.rootBig]: count > 4,
		})}
		>
		<div>
			{route ? (
			<Link to={route} className={classnames(styles.name, styles.link)}>
				{name}
			</Link>
			) : (
			<span className={styles.name}>{name}</span>
			)}
			<div>{ingredients?.join(", ")}</div>
		</div>
		<div className={styles.actions}>
			<Button viewVariant={BUTTON_VIEW_VARIANT.secondary} size={SIZE.m} onClick={decrement}>-</Button>
			<span className={styles.count}>{count}</span>
			<Button viewVariant={BUTTON_VIEW_VARIANT.secondary} size={SIZE.m} onClick={increment}>+</Button>
		</div>
		</div>
	);
	};
	
	export const DishWithMemo = memo(Dish);
	  