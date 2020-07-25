import React from 'react';

const EmployeeItem = ({employee}) => {
	return (
		<div className="EmployeeItem">
			{employee.name}
		</div>
	);
}


export default EmployeeItem;
