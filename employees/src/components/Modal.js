import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeCreate from './EmployeeCreate';
import EmployeeEdit from './EmployeeEdit';
import EmployeeDelete from './EmployeeDelete';


import '../styles/Modal.scss';


const renderComponent = (component, dismissModal, employee) => {
	switch (component) {
		case 'create': {
			return <EmployeeCreate dismissModal={dismissModal}/>
		}
		case 'edit': {
			return <EmployeeEdit dismissModal={dismissModal} employee={employee}/>
		}
		case 'delete': {
			return <EmployeeDelete dismissModal={dismissModal} employee={employee}/>
		}
		default: 
			break;
	}
}

export const Modal = ({component, dismissModal, employee}) => {
	const windowPos = document.documentElement.scrollTop;

	return ReactDOM.createPortal(
		<div className="Modal" onClick={() => dismissModal(false)} style={{'top': windowPos}} >
			<div className="Modal-card" onClick={(e) => e.stopPropagation()}>
				{renderComponent(component, dismissModal, employee)}
			</div>
		</div>, document.querySelector('#modal')
	)
}
