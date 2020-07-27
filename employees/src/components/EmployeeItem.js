import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeItem = ({employee}) => {
	return (
		<div className="EmployeeItem">
			<p className="EmployeeItem-name">{employee.name}</p>
			<img src={employee.avatar} className="EmployeeItem-avatar" />
			<Link to={`/employees/${employee.id}`}>LInk </Link>
		</div>
	);
}


export default EmployeeItem;
