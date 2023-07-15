import React from "react"
import { StoreContext } from "./context"

export const StoreProvider = ({store, children}) => {

	return (
	<StoreContext.Provider value={store}> {children}
	</StoreContext.Provider>
	)
}