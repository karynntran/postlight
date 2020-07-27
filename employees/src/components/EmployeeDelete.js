import React from 'react';
import { connect } from 'react-redux';
import { fetchEmployee, deleteEmployee } from '../actions';
import history from '../history';

class EmployeeDelete extends React.Component {
	componentDidMount() {
		this.props.fetchEmployee(this.props.match.params.id)
	}

	onDeleteClick = () => {
		this.props.deleteEmployee(this.props.match.params.id)
		history.push('/');
	}

	render() {
		return (
			<div id="EmployeeDelete">
				<h1>{`Delete "${this.props.employee.name}"?`}</h1>
				<div>
					<button onClick={() => this.onDeleteClick()}>Delete</button>
					<button onClick={() => history.push("/")}>Cancel</button>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, getOwnProps) => {
	return {
		employee: state.employees[getOwnProps.match.params.id]
	}
}

export default connect(mapStateToProps, { fetchEmployee, deleteEmployee })(EmployeeDelete);
