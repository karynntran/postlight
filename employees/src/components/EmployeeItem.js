import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from './Modal';

import '../styles/EmployeeItem.scss';

const EmployeeItem = ({employee, setActive, active}) => {
	let [modalViewable, setModalViewable] = useState(false);
	let [component, setComponent] = useState('');

	const renderAdmin = (employee, setComponentType) => {
		return (
			<div>
				<button onClick={() => setComponentType('edit')} className="EmployeeShow_edit">Edit</button>
				<button onClick={() => setComponentType('delete')} className="EmployeeShow_delete">Delete</button>
			</div>
		)
	}

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
		setModalViewable(modalVisible)
		setComponent('')
	}

	const isActive = (id) => {
		if (id === active) {
			return `EmployeeItem-card active`
		} else {
			return "EmployeeItem-card"
		}
	}


	return (
		<div className="EmployeeItem" onClick={() => setActive(employee.id)}>
			<div className={isActive(employee.id)}>
				<p className="EmployeeItem-name">{employee.name}</p>
				<img className="EmployeeItem-img" src={employee.avatar} alt="avatar"/>

				<div className="EmployeeItem-details">
					<div className="EmployeeItem-position">{employee.position}</div>
					<div className="EmployeeItem-email">{employee.email}</div>

					{ renderAdmin(employee, setComponentType) }
					{ renderModal() }
				</div>
			</div>
		</div>
	);
}


export default EmployeeItem;
