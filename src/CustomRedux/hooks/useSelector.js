import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/context";

export const useSelector = (select) => {

	const store = useContext(StoreContext)
	const [render, setRender] = useState(() => select(store.getState()));

	useEffect(() => {
		store.subscribe((state) => setRender(select(state)));

		return () => store.unsubscribe((state) => setRender(select(state)));
	},	[store])

	return render;
}