import React, { Component } from 'react';
import { connect } from 'react-redux' // glue betwee two libs
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux' //action generated actually ends up following through all reducers.

// promote compontnet to container, which has direct access state produced by redux.
// react and redux are two librarys, through react-redux lib to 
// melt together (through the mapStateToProps()
	//a component that is aware of the state in redux

// app should be a dumb component
// book-list and active book should be container (smart components) which have access
// to state in redux, which caers about a pieces of state in redux

// note:
// only the most parent comnponent that uses a pieces of state needs to be 
// connected to redux.

// two important notes
// 1. whenever app state changes, this contains will instantly re-render with 
// list of books
// 2. by using connect to create contain, wheneven state changes, the objects
// in the state function will be assigned to the props of the component 
//


class BookList extends Component {

	renderList() {
		return this.props.books.map((book) => {
			return (
				<li 
					key={book.title} 
					onClick={() => this.props.selectBook(book)}
					classNmae="list-group-item">
					{book.title}
				</li>

			);
		})
	}

	render() {
		return (
			<ul className="List-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

// the glue between react and redux

// the mapStateTOProps func: whatever is returnd will show up as props
// inside of booklist - the container
function mapStateToProps(state) {
	return {
		books: state.books // props: state in store, access to state in sotre and pass it to prop;s
	};
}
// map action creator to container and and map action creator to dispatch:
// 1) the container needs to know about his new dispatch methods, selectBook. make it availabe as a prop on the BookList container
// 2) map action creator to dispatch
// whenever slectBook is called, the result should be passed to all of our reducers
function mapDispatchToProps(dispatch) {
	// action creator is a prop, and is mapped to dispatch func in the Store.
	return bindActionCreators({selectBook: selectBook}, dispatch); // {prop: action}, dispatch funciton in store.
}
// promote BookList from a component to a container
// connect takes list of functions and a compoenent to produce a container, which is
// aware the state that is contained in redux
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

