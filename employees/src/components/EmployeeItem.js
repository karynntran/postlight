import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeItem = ({employee}) => {
	return (
		<div className="EmployeeItem">
			{employee.name}
			<Link to={`/employees/${employee.id}`}>LInk </Link>
		</div>
	);
}


export default EmployeeItem;
