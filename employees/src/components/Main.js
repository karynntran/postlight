import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import EmployeesList from './EmployeesList';


const Main = () => {
	return (
		<div>
			<EmployeesList/>
			<Link to="/employees/new">Add new employee</Link>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		employees: Object.values(state.employees)
	}
}


export default Main;
