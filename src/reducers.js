import { SET_SEARCH_FIELD } from './constants';
import { REQUEST_ROBOTS_PENDING } from './constants'; 
import { REQUEST_ROBOTS_SUCCESS } from './constants'; 
import { REQUEST_ROBOTS_FAILED } from './constants'; 


const initialStateSearch = {
	searchField: ''
}

export const searchRobots = (state = initialStateSearch, action={}) => {
	switch (action.type) {
		case SET_SEARCH_FIELD: 
			return Object.assign({}, state, {
					searchField: action.payload
				})
			
		default:
			return state 
	}
}

const initialStateRobots = {
	isPending: false,
	robots: [],
	error: ''
}

export const getRobots = (state = initialStateRobots, action={}) => {
	switch (action.type) {

		case REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, { isPending: true })
		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({}, state, { isPending: false, robots: action.payload })
		case REQUEST_ROBOTS_FAILED:
			return Object.assign({}, state, { isPending: false, error: action.payload })
		default:
			return state


	}
}

