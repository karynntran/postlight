import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import { fetchEmployees } from '../actions';

import Filter from './Filter';
import EmployeeItem from './EmployeeItem';
import '../styles/EmployeesList.scss';


const renderEmployees = (employees, query = '') => {
	let filteredList = employees.filter(employee => {
		if (query === '') {
			return employees
		} else if (employee.name.toLowerCase().includes(query.toLowerCase())) {
			return employee
		}
	})
	return filteredList.map((employee, idx) => {
		return <EmployeeItem key={`${idx}-item`} employee={employee}/>
	})
}


const EmployeesList = ({ employees, fetchEmployees }) => {
	const [query, setQuery] = useState('')

	const memoizedCallback = useCallback(
	  () => {
	    fetchEmployees();
	  },
	  [fetchEmployees],
	);

	useEffect(() => {
		fetchEmployees();
	}, [memoizedCallback])


	const updateFilter = (query) => {
		let filterTM;
		clearTimeout(filterTM);
		filterTM = setTimeout(() => {
			setQuery(query)
		}, 750)
	}

	return (
		<div>
			<Filter updateFilter={updateFilter}/>
			<section id="EmployeesList">
			  	{renderEmployees(employees, query)}
			</section>
		</div>
	);

}


const mapStateToProps = (state) => {
	return {
		employees: Object.values(state.employees)
	}
}


export default connect(mapStateToProps, { fetchEmployees })(EmployeesList);
