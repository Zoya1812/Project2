import React, { useEffect } from "react";
import { Review } from "../Review/Review"
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantReviewsById } from "../../store/entities/restaurant/selectors";
import styles from "./styles.module.css"
import { selectIsReviewsLoading } from "../../store/entities/review/selector";
import { loadReviewsIfNotExist } from "../../store/entities/review/thunk/loadReviewsIfNotExist";
import { useParams } from "react-router-dom";
import { loadUsersIfNotExist } from "../../store/entities/user/thunk/loadUsersIfNotExist";

export const Reviews = () => {
const dispatch = useDispatch();
const { restaurantId } = useParams();

const reviews = useSelector((state) => selectRestaurantReviewsById(state, {restaurantId}));
const isLoading = useSelector(selectIsReviewsLoading);

useEffect(() => {
    dispatch(loadReviewsIfNotExist(restaurantId));
  }, [restaurantId]);

  useEffect(() => {
    dispatch(loadUsersIfNotExist());
  }, []);

  useEffect(() => {
    dispatch(loadUsersIfNotExist());
  }, []);

	if(isLoading) {
		return <span>Loading...</span>
	}

return (
	<div>
		<h3>Reviews</h3>
		<div className={styles.reviews}>
			{reviews.map((id) => (
				<Review reviewId={id} className={styles.review}/>
			))}
		</div>
	</div>
)}