import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchEmployee } from '../actions';

const renderAdmin = (employee) => {
	return (
		<div>
			<Link to={`/employees/${employee.id}/edit`}>Edit</Link>
			<Link to={`/employees/${employee.id}/delete`}>Delete</Link>
		</div>
	)
}

const EmployeeShow = ({fetchEmployee, employee, match}) => {
	useEffect(() => {
		fetchEmployee(match.params.id);
	}, [])

	if (employee) {
		return (
			<div>
				<div>EmployeeShow</div>
				<div>{employee.name}</div>
				<div>{employee.position}</div>
				<div>{employee.email}</div>
				{ renderAdmin(employee) }
			</div>
		)
	} else {
		return (
			<div>Loading...</div>
		)
	}

}


const mapStateToProps = (state, ownProps) => {
	return {
		employee: state.employees[ownProps.match.params.id]
	}
}

export default connect(mapStateToProps, { fetchEmployee })(EmployeeShow);