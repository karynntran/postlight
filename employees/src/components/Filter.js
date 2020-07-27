import React, { useState, useEffect } from 'react';
import '../styles/Filter.scss';

const FilterEmployees = ({updateFilter}) => {
	const [query, setQuery] = useState('');

	const handleChange = e => {
		updateFilter(e.target.value)
		setQuery(e.target.value)
	};

	return (
		<section id="Filter">
			<form>
			  <label>
			    Search for Employee:
			    <input type="text" name="filter" value={query} onChange={handleChange}/>
			  </label>
			</form>
		</section>
	)
}

export default FilterEmployees;