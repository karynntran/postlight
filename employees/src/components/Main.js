import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { Modal } from './Modal';

import EmployeesList from './EmployeesList';
import '../styles/Main.scss';



const Main = ({ fetchEmployees, employees}) => {
	const [modalViewable, setModalViewable] = useState(false);
	const [component, setComponent] = useState('');


	const setComponentType = (componentType) => {
		setComponent(componentType)
		setModalViewable(true)
	}

	const renderModal = () => {
		if (modalViewable) {
			return <Modal dismissModal={dismissModal} component={component} />
		}
	}

	const dismissModal = (modalVisible) => {
		setModalViewable(false)
		setComponent('')
	}

	return (
		<div id="Main">
			<button className="Main-addEmployee"onClick={() => setComponentType('create')} >Add new employee</button>
			<EmployeesList setComponentType={setComponentType}/>
			{renderModal()}
		</div>
	)
}


export default Main;
