import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchEmployees } from '../actions';

import EmployeeItem from './EmployeeItem';



const renderEmployees = (employees) => {
	return employees.map(employee => {
		return <EmployeeItem employee={employee} />
	})
}

const EmployeesList = ({ fetchEmployees, employees }) => {
	useEffect(() => {
		fetchEmployees();
	}, [])

	if (employees) {
		return (
			<div className="EmployeesList">
			  	{renderEmployees(employees)}
			</div>
		);
	} else {
		return (
			<div>Fetching...</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		employees: Object.values(state.employees)
	}
}

export default connect(mapStateToProps, { fetchEmployees })(EmployeesList);
