import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchEmployees } from '../actions';

import Filter from './Filter';

import EmployeeItem from './EmployeeItem';


const renderEmployees = (employees, query = '') => {
	console.log(query)
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
		fetchEmployees();
	}, [])

	const handleChange = e => {
		setQuery(e.target.value);
	}

	return (
		<div>
			<section>
				<form>
				  <label>
				    Search for Employee:
				    <input type="text" name="filter" value={query} onChange={handleChange}/>
				  </label>
				</form>
			</section>

			<div className="EmployeesList">
			  	{renderEmployees(employees, query)}
			</div>
		</div>
	);

}

const mapStateToProps = (state) => {
	return {
		employees: Object.values(state.employees)
	}
}

export default connect(mapStateToProps, { fetchEmployees })(EmployeesList);
