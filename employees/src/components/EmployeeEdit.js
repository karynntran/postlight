import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchEmployee, editEmployee } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends React.Component {
	componentDidMount() {
		this.props.fetchEmployee(this.props.match.params.id)
	}

	onSubmit = formValues => {
		console.log(formValues)
		this.props.editEmployee(formValues, this.props.match.params.id);
	}

	render() {
		return (
			<div id="EmployeeEdit">
				<h3>Edit Employee</h3>
				<EmployeeForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.employee, 'name', 'email', 'position')} />
			</div>
		)
	}
}


const mapStateToProps = (state, ownProps) => {
	return {
		employee: state.employees[ownProps.match.params.id]
	}
}


export default connect(mapStateToProps, { fetchEmployee, editEmployee })(EmployeeEdit);