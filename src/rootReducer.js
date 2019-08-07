import data from './data.json'
import { ADD, REMOVE } from "./actionTypes";

const INITIAL_STATE = {
	products: data.products,
	cart: {},
	cartValue: 0.0,
	// discountApplied: false,
	// discountAmount: 0
}

function rootReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ADD: {
			const cartCopy = {...state.cart};
			cartCopy[action.id] = (cartCopy[action.id] || 0) + 1;
			return {
				...state,
				cart: cartCopy,
				// cartValue:
			};
		}
		case REMOVE:{
			const cartCopy = {...state.cart};
			if(!cartCopy[action.id]) return state;
			cartCopy[action.id]-- ;
			if(cartCopy[action.id] == 0)
				delete cartCopy[action.id];
			return {
				...state,
				cart: cartCopy,
				// cartValue:
			}
		}
		default:
			return state;
	}
  
}

export default rootReducer;
