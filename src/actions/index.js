/*
Enforcing that every change is described as an action lets us have a clear 
understanding of what’s going on in the app. If something changed, we know 
why it changed. Actions are like breadcrumbs of what has happened. Finally, 
to tie state and actions together, we write a function called a reducer. 
Again, nothing magical about it—it’s just a function that takes state and 
action as arguments, and returns the next state of the app. It would be hard 
to write such a function for a big app, so we write smaller functions 
managing parts of the state:

also see reducer code:

This is basically the whole idea of Redux. Note that we haven’t used any 
Redux APIs. It comes with a few utilities to facilitate this pattern, but 
the main idea is that you describe how your state is updated over time in 
response to action objects, and 90% of the code you write is just plain 
JavaScript, with no use of Redux itself, its APIs, or any magic.
*/

// 1. called whenever a user click a book
// 2. need to make sure the action returned from it ends up runing through all reducers,
// so it update the store (i.e. to wire up to the redux)
// therefore we nned to connect this to the booklist container

	//console.log('A book jhas ben seldct: ', book.title);
	// selectBook is an actionCreate, need to reutnr an action, 
	// an object with a type property

export function selectBook(book) {
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}