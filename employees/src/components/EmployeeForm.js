import React from 'react';
import {
	Field,
	reduxForm
} from 'redux-form';
import '../styles/EmployeeForm.scss';

class EmployeeForm extends React.Component {

	renderInput = ({ input, label }) => {
		return (
			<div>
				<label>{label}</label>
				<input {...input} autoComplete="off"></input>
			</div>
		)
	}

	onSubmission = (formValues) => {
		this.props.onSubmit(formValues);
	}

	render() {
		return (
			<form className="EmployeeForm" onSubmit={this.props.handleSubmit(this.onSubmission)}>
				<Field name="name" component={this.renderInput} label="Name" />
				<Field name="email" component={this.renderInput} label="Email" />
				<Field name="position" component={this.renderInput} label="Position" />
				<button>Submit</button>
			</form>
		)
	}
}



export default reduxForm({ form: 'employeeForm' })(EmployeeForm)
