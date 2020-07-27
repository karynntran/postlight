import React from 'react';
import { connect } from 'react-redux';
import { createEmployee } from '../actions';
import EmployeeForm from './EmployeeForm';
import history from '../history';

const EmployeeCreate = ({createEmployee, dismissModal, onSubmit}) => {
	onSubmit = (formValues) => {
		createEmployee(formValues);
		dismissModal(false);
		history.push('/');
	}


	return (
		<div id="EmployeeCreate">
			<div className="close" onClick={() => dismissModal(false)}>&#xd7;</div>
			<h3>Add an employee</h3>
			<EmployeeForm onSubmit={onSubmit}/>
		</div>
	)

}


export default connect(null, { createEmployee })(EmployeeCreate);