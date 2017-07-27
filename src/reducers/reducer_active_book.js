//all reducers have two params: current state and action
// called only when an action occured
// State args i snot application state, onl the state
// this reducer is responsible for
export default function (state = null, action) {

	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload; // return a fresh object, not part of it
	}
	return state // if we don't care about action, for example first time bootup
}