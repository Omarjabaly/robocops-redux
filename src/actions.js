import { SET_SEARCH_FIELD } from './constants'; 
import { REQUEST_ROBOTS_PENDING } from './constants'; 
import { REQUEST_ROBOTS_SUCCESS } from './constants'; 
import { REQUEST_ROBOTS_FAILED } from './constants'; 


export const setSearchField = (text) => ({

	type: SET_SEARCH_FIELD,
	payload: text

})

export const requestRobots = () => (dispatch) => {

	dispatch({ type: REQUEST_ROBOTS_PENDING })
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: users }) )
		.catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }) )

}

