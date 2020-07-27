import db from '../db/db';
import C from './constants';
import history from '../history';

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
		console.log(response)
		dispatch({
			type: C.FETCH_EMPLOYEE,
			payload: response.data
		})

	} catch (error) {
		console.log(error)
	}
};

export const createEmployee = (formValues) => async dispatch => {
	const response = await db.post('/employees', { ...formValues });
	console.log('respnse',response)
	history.push('/');

	dispatch({
		type: C.CREATE_EMPLOYEE,
		payload: response.data.data
	})
};

export const editEmployee = (formValues, id) => async dispatch => {
	const response = await db.patch(`/employees/${id}`, { ...formValues, id });
	history.push('/');

	dispatch({
		type: C.EDIT_EMPLOYEE,
		payload: response.data.data
	})
};

export const deleteEmployee = (id) => async dispatch => {
	await db.delete(`/employees/${id}`);
	history.push('/');

	dispatch({
		type: C.DELETE_EMPLOYEE,
		payload: id
	})
};
