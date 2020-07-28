import React from 'react';
import { connect } from 'react-redux';
import { deleteEmployee } from '../actions';
import history from '../history';

const EmployeeDelete = ({employee, deleteEmployee, dismissModal}) => {

	const onDeleteClick = () => {
		deleteEmployee(employee.id)
		dismissModal(false)
	}

	return (
		<div id="EmployeeDelete">
			<h1>{`Delete "${employee.name}"?`}</h1>
			<div>
				<button onClick={() => onDeleteClick()}>Delete</button>
				<button onClick={() => dismissModal(false)}>Cancel</button>
			</div>
		</div>
	)

}


export default connect(null, { deleteEmployee })(EmployeeDelete);
