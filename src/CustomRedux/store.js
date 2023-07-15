class Store {
	
	state={};

	subscribers = new Map();
	// список заказа

	rootReducer;
	// корневой список обработки действий

	constructor(rootReducer){
		this.rootReducer = rootReducer;
		this.state = this.rootReducer(); 
		// возврат первоначального состояния если его запустили без action
	}

	subscribe(callback){
		this.subscribers.set(callback, callback)
		callback(this.state) 
	}
	// добавить блюдо
	// в callback лежит (state) => setRender(state)

	unsubscribe(callback){
		if(this.subscribers.has(callback)) { 
			this.subscribers.delete(callback)
		}}
	// убрать блюдо
	
	sendChanges() {
		this.subscribers.forEach((callback) => 
		callback(this.state))
	}
	// перебор названия заказанных блюд => возврат их списка с состоянием

	dispatch(action) {
		this.state = this.rootReducer(this.state, action) 
		// получение текущего состояния в редюсер и действие которое нужно выполнить 
		// получение результата действия как новое текущее состояние
		this.sendChanges(); 
	}

	getState() {
		return this.state;
	}
}

export const createStore = ( () => {
	let store;
	return (rootReducer) => {
		if(!store) {
			store = new Store(rootReducer)
		}
		return store;
	}
}) ();