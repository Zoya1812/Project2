import React from "react";
import styles from "./style.module.css"
import { Rating } from "../Rating/Rating";
import { SIZE } from "../../constants/size";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../store/entities/review/selector";
import classNames from "classnames";
import { User } from "../User/User"; 

export const Review = ({ reviewId, className }) => {
	const review = useSelector((state) => 
	selectReviewById(state, {reviewId}))

  if (!review) {
    return null;
  }

const {text, rating, userId} = review;
return (
<div className={classNames(styles.root, className)}>
		<div className={styles.header}>
			<User userId={userId}/>
			<Rating value={rating} size={SIZE.s}/>
		</div>
		<div>{text}</div> 
</div>
)
}