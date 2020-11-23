import { FETCH_PRODUCTS } from '../actions/index';
import { initialState } from './index'


export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
        const newState = { ...state }
        return {...newState, products: action.payload}
    default:
      return state;
  }
};