import counter from './counter';
import login from './login';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counter,
    login
});

export default rootReducer;