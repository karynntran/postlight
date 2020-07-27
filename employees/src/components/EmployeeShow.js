import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchEmployee } from '../actions';
import '../styles/EmployeeShow.scss';

const renderAdmin = (employee) => {
	return (
		<div>
			<Link className="EmployeeShow_edit" to={`/employees/${employee.id}/edit`}><button>Edit</button></Link>
			<Link className="EmployeeShow_delete" to={`/employees/${employee.id}/delete`}><button>Delete</button></Link>
		</div>
	)
}

const EmployeeShow = ({fetchEmployee, employee, match}) => {
	useEffect(() => {
		fetchEmployee(match.params.id);
	}, [])

	if (employee) {
		return (
			<div className="EmployeeShow">
				<img src=""/>
				<div className="EmployeeShow-name">{employee.name}</div>
				<div className="EmployeeShow-position">{employee.position}</div>
				<div className="EmployeeShow-email">{employee.email}</div>
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