import React, { useState, useEffect } from 'react';

const FilterEmployees = ({updateQuery}) => {
	const [query, setQuery] = useState('');

	const handleChange = e => {
		setQuery(e.target.value);
		updateQuery(query)
	};

	return (
		<section>
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