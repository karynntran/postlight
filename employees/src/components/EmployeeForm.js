import React from 'react';
import {
	Field,
	reduxForm
} from 'redux-form';
import history from '../history';


class EmployeeForm extends React.Component {

	// renderError = ({ error, touched }) => {
	// 	if (touched && error) {
	// 		return (
	// 			<div className="ui error message">
	// 				<div className="header">{error}</div>
	// 			</div>
	// 		)
	// 	}
	// }

	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? 'error': ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off"></input>
			</div>
		)
	}

	onSubmission = (formValues) => {
		this.props.onSubmit(formValues); // passed props in
		history.push('/')
	}

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmission)}>
				<Field name="name" component={this.renderInput} label="name" />
				<Field name="email" component={this.renderInput} label="email" />
				<Field name="position" component={this.renderInput} label="position" />
				<button>Submit</button>
			</form>
		)
	}
}


const validate = values => {
	const errors = {};

	if (!values.question) {
		errors.question = "Enter a question"
	}

	if (!values.type) {
		errors.type = "Choose a type"
	}

	if (values.type !== "rating") {
		if (!values.answers || !values.answers.length) {
			errors.answers = { _error: 'At least one answer must be entered' }
		} else {
			let answerArrayErrors = []
			values.answers.forEach((answer, idx) => {
				let answerErrors = {}
				if (!answer.answer) {
					// console.log(idx, answer, 'no answer')
					answerErrors.answer = "Fill in or remove field.";
				} else {
					answerErrors.answer = "";
				}
				answerArrayErrors[idx] = answerErrors;

			})

			if (answerArrayErrors.length) {
				errors.answers = answerArrayErrors;
			}
		}
	}


	return errors;
}


export default reduxForm({ form: 'employeeForm', validate })(EmployeeForm)
