import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/EmployeeItem.scss';

const EmployeeItem = ({employee}) => {
	return (
		<div className="EmployeeItem">
			<div className="EmployeeItem-card">
				<Link to={`/employees/${employee.id}`}>
					<p className="EmployeeItem-name">{employee.name}</p>
					<img className="EmployeeItem-img" src={employee.avatar} alt="avatar"/>
				</Link>
			</div>
		</div>
	);
}


export default EmployeeItem;
