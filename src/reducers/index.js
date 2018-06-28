import { combineReducers } from 'redux';
import { mainReducer } from './mainReducer';
import { gibddReducer } from './gibddReducer';

export default combineReducers({
    mainRed: mainReducer,
    gibddRed: gibddReducer,
});