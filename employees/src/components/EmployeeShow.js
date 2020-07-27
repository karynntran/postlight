import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Modal } from './Modal';

import { fetchEmployee } from '../actions';
import '../styles/EmployeeShow.scss';


const renderAdmin = (employee, setComponentType) => {
	return (
		<div>
			<button onClick={() => setComponentType('edit')} className="EmployeeShow_edit">Edit</button>
			<button onClick={() => setComponentType('delete')} className="EmployeeShow_delete">Delete</button>
		</div>
	)
}

const EmployeeShow = ({fetchEmployee, employee, match}) => {
	const [modalViewable, setModalViewable] = useState(false);
	const [component, setComponent] = useState('');


	useEffect(() => {
		fetchEmployee(match.params.id);
	}, [])

	const setComponentType = (componentType) => {
		setComponent(componentType)
		setModalViewable(true)
	}

	const renderModal = () => {
		if (modalViewable) {
			return <Modal dismissModal={dismissModal} component={component} employee={employee} />
		}
	}

	const dismissModal = (modalVisible) => {
		setModalViewable(false)
		setComponent('')
	}


	if (employee) {
		return (
			<div className="EmployeeShow">
				<img src=""/>
				<div className="EmployeeShow-name">{employee.name}</div>
				<div className="EmployeeShow-position">{employee.position}</div>
				<div className="EmployeeShow-email">{employee.email}</div>
				{ renderAdmin(employee, setComponentType) }
				{ renderModal() }
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