import {combineReducers} from 'redux';

import favouriteReducer from './favourite-reducer';
import listReducer from './list-reducer';

const rootReducer = combineReducers({
  favouriteReducer,
  listReducer,
});

export default rootReducer;
