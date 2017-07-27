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