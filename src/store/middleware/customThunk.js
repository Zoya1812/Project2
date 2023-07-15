export const customThunk = (store) => (next) => (action) => {
	if(typeof action !== 'function') {
		return next(action);
	}

	action(store.dispatch.bind(store), store.getState.bind(store))
	// если это все же функция, тогда связываем со стором  метод dispatch и getState

}