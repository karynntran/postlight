import C from '../actions/constants';
import _ from 'lodash';

export default (state = [], action) => {
	switch (action.type) {
		case C.FETCH_EMPLOYEES:
			return { ...state, ..._.mapKeys(action.payload, 'id') } //mapKeys from lodash creates a new object with the same values as the given object and a provided "property"
		case C.FETCH_EMPLOYEE:
			return { ...state, [action.payload.id]: action.payload }
		case C.FILTER_EMPLOYEES:
			return { ...state, ...action.payload }
		case C.CREATE_EMPLOYEE:
			return { ...state, ...action.payload }
		case C.EDIT_EMPLOYEE:
			return { ...state, ...action.payload }
		case C.DELETE_EMPLOYEE:
			return _.omit(state, action.payload)
		default:
			return state;
	}
}
