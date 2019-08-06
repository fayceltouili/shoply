import data from './data.json'
import { ADD, REMOVE } from "./actionTypes";


const INITIAL_STATE = {products: data.products, cart: []};

function rootReducer(state = INITIAL_STATE, action) {
	console.log('reducer', action.item)
	switch (action.type) {
		case ADD:
			return {...state, cart:[ ...state.cart, { ...action.item} ]};

		case REMOVE:
			return { ...state, cart: state.cart.filter(item => item.id !== action.id) };

		default:
			return state;
	}
  
}

export default rootReducer;
