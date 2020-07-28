import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { editEmployee } from '../actions';
import EmployeeForm from './EmployeeForm';
import history from '../history';


const EmployeeEdit = ({employee, editEmployee, dismissModal}) => {

	const onSubmit = formValues => {
		editEmployee(formValues, employee.id);
		dismissModal(false);
		history.push('/');

	}

	return (
		<div id="EmployeeEdit">
			<div 
				className="close"
				onClick={() => dismissModal(false)}>&#xd7;
			</div>
			<h3>Edit Employee</h3>
			<EmployeeForm 
				onSubmit={onSubmit}
				initialValues={_.pick(employee, 'name', 'email', 'position')} />
		</div>
	)

}




export default connect(null, { editEmployee })(EmployeeEdit);