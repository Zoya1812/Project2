import { MAX_RATING } from "./constants"
import Star from "./img/star.svg"
import GoldStart from "./img/star-gold.svg"
import { SIZE } from "../../constants/size"
import classnames from "classnames"
import styles from "./styles.module.css"
import React from "react"


export const Rating = ({
	maxRating = MAX_RATING,
	value,
	className,
	size = SIZE.s, 
	onChange,
}) => {
	return (
		<div className={className}>
			{maxRating > 0 && 
			new Array(maxRating)
			.fill(null)
			.map((_, index) => (
				<img
				src={index >= value? Star : GoldStart }
				className={classnames(styles.star, styles[size])}
				alt={index > value? "black":"gold"}
				onClick={() => onChange?.(index + 1)}
				/>
			))
			}
		</div>
	)
} 