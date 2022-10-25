import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import productsReducer from './products/products';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({
  booksReducer,
  categoriesReducer,
  productsReducer,
});

const configureStore = createStore(reducer, applyMiddleware(thunk));
export default configureStore;
