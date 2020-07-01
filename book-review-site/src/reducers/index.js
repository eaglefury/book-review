import bookReducer from './book-reducer';
import {
    combineReducers
} from 'redux';

const allReducer = combineReducers({
    books: bookReducer
});

export default allReducer;