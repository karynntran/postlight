import db from '../db/db';
import C from './constants';

export const fetchEmployees = () => async dispatch => {
	try {
		const response = await db.get('/employees');
		dispatch({
			type: C.FETCH_EMPLOYEES,
			payload: response.data
		})

	} catch (error) {
		console.log(error)
	}
};


export const fetchEmployee = (id) => async dispatch => {
	try {
		const response = await db.get(`/employees/${id}`);
		dispatch({
			type: C.FETCH_EMPLOYEE,
			payload: response.data
		})

	} catch (error) {
		console.log(error)
	}
};