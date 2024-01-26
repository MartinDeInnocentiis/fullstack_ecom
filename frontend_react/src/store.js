import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import {productListReducer, productDetailsReducer} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart:{cartItems: cartItemsFromStorage}
}


const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
 
export default store;



