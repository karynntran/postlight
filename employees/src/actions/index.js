import faker from 'faker';
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

export const createEmployee = (formValues) => async dispatch => {
	let avatar = faker.image.avatar();
	const response = await db.post('/employees', { ...formValues, avatar: avatar });

	dispatch({
		type: C.CREATE_EMPLOYEE,
		payload: response.data.data
	})

};

export const editEmployee = (formValues, id) => async dispatch => {
	const response = await db.patch(`/employees/${id}`, { ...formValues, id });

	dispatch({
		type: C.EDIT_EMPLOYEE,
		payload: response.data.data
	})

};

export const deleteEmployee = (id) => async dispatch => {
	await db.delete(`/employees/${id}`);

	dispatch({
		type: C.DELETE_EMPLOYEE,
		payload: id
	})
};
