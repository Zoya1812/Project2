import { Link } from "react-router-dom"
import React from "react"
import Logo from "./img/logo (1).svg"
import styles from "./styles.module.css"

export const Header = () => {
return(
	<header className={styles.root}>
		<Link to='/' className={styles.logo}>
		<img src={Logo}/>
		</Link>

		<Link to="/restaurants" className={styles.link}> 
		Restaurants 
		</Link>

		<Link to="/cart" className={styles.link}>
		Cart 
		</Link>
		<Link to="/dishes" className={styles.link}>
        Dishes
      </Link>
	</header>
)
}