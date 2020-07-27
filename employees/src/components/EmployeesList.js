import React, { useState, useEffect } from 'react';
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
		return <EmployeeItem key={`${idx}-item`} employee={employee} />
	})
}


const EmployeesList = ({ fetchEmployees, employees }) => {
	const [query, setQuery] = useState('')

	useEffect(() => {
		if (employees.length == 0) {
			fetchEmployees();
		}
	}, [])

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
