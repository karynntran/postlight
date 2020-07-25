import C from '../actions/constants';


export default (state = [], action) => {
	switch (action.type) {
		case C.FETCH_EMPLOYEES:
			return { ...state, ...action.payload }
		default:
			return state;
	}
}