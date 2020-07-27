import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import EmployeesList from './EmployeesList';
import '../styles/Main.scss';

const Main = () => {
	return (
		<div id="Main">
			<Link to="/employees/new"><button>Add new employee</button></Link>
			<EmployeesList/>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		employees: Object.values(state.employees)
	}
}


export default Main;
