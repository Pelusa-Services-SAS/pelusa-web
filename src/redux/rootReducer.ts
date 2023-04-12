// Libraries
import { combineReducers } from 'redux';

// Reducers
import authenticationReducer from '@redux/authentication/authentication.slice';

export const rootReducer = combineReducers({
	authentication: authenticationReducer,
});
