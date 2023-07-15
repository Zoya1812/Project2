import React from "react";
import styles from "./button.styles.module.css"
import { SIZE } from "../../constants/size";
import { BUTTON_VIEW_VARIANT } from "./constance"; 
import classNames from "classnames";

export const Button = ({ 
	viewVariant=BUTTON_VIEW_VARIANT.primary, 
	children, 
	onClick, 
	disabled, 
	className, 
	size=SIZE,
}) => {

return (
	<button 
		className={classNames( 
			styles.root, 
			styles[size], 
			styles[viewVariant], 
			className,
			{
				[styles.disabled]: disabled
			},
			)}
			onClick={onClick} 
			disabled={disabled}
		>
			{children} 
	</button>

)}; 
