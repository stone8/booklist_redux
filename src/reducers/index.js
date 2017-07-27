import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'
import ActiveBookReducer from './reducer_active_book';

//gloabal app state
// any key provided to the combineReducer ends up key in global state
// 
const rootReducer = combineReducers({
  books: BooksReducer, // value of ourput of book reducer
  activeBook: ActiveBookReducer
});
export default rootReducer;
