import { combineReducers } from 'redux';
import employeesReducer from './employeesReducer';

import { reducer as formReducer } from 'redux-form';

export default combineReducers({
	employees: employeesReducer,
	form: formReducer
})
