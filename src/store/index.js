import { applyMiddleware, combineReducers, createStore } from 'redux';
import { categoryReducer, productReducer } from './reducers';

// import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  products: productReducer,
  category: categoryReducer,
//   cart: cartReducer,
//   orders: ordersReducer,
});

export default createStore(rootReducer);