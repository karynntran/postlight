import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchEmployee } from '../actions';

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

			</div>
		)
	} else {
		return (
			<div>Loading...</div>
		)
	}

}


const mapStateToProps = (state) => {
	return {
		employee: state.employees
	}
}

export default connect(mapStateToProps, { fetchEmployee })(EmployeeShow);