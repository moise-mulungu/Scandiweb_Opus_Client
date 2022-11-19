import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import productsReducer from './products/products';
import categoriesReducer from './categories/categories';
import productReducer from './product/product';

const reducer = combineReducers({
  booksReducer,
  categoriesReducer,
  productsReducer,
  productReducer,
});

const configureStore = createStore(reducer, applyMiddleware(thunk));
export default configureStore;
