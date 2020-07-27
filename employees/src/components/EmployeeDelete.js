import React from 'react';
import { connect } from 'react-redux';
import { fetchEmployee, deleteEmployee } from '../actions';
import history from '../history';

const EmployeeDelete = ({employee, deleteEmployee, onDeleteClick}) => {

	onDeleteClick = () => {
		deleteEmployee(employee.id)
		history.push('/');
	}

	return (
		<div id="EmployeeDelete">
			<h1>{`Delete "${employee.name}"?`}</h1>
			<div>
				<button onClick={() => onDeleteClick()}>Delete</button>
				<button onClick={() => history.push("/")}>Cancel</button>
			</div>
		</div>
	)

}


export default connect(null, { deleteEmployee })(EmployeeDelete);
