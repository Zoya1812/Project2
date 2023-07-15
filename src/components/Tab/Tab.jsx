import React from "react"
import { Button } from "../Button/Button"
import { NavLink } from "react-router-dom"

export const Tab = ({to, title, className}) => {
return (
	<NavLink to={to}  className={className}>

	{ ({ isActive }) => <Button disabled={isActive}>{title}</Button>}
	</NavLink>
	)} 