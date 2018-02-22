import { combineReducers } from 'redux';
import authReducer from './authReducer';
import btcReducer from './btcReducer';

const rootReducer = combineReducers({
    userAuth: authReducer,
    btcReducer: btcReducer
});

export default rootReducer