import React, { Component } from 'react';
import { connect } from 'react-redux' // glue betwee two libs
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux' //action generated actually ends up following through all reducers.

// promote compontnet to container, which has direct access state produced by redux.
// react and redux are two librarys, through react-redux lib to 
// melt together (through the mapStateToProps()
	//a component that is aware of the state in redux

// app should be a dump component
// boo-list and active book should be container (smart components) which have access
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
function mapStateToProps(state) {
	// whatever is returnd will show up as props
	// inside of booklist - the container
	return {
		books: state.books

	};
}
// anything returned from this func will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
	// whenever slectBook is called, the result should be passed 
	// to all of our reducers
	return bindActionCreators({selectBook: selectBook}, dispatch);
}

// connect takes a function and a compoenent to produce a container, which is
// aware the state that is contained in redux

// the mapStateTOProps func: whatever is returnd will show up as props
// inside of booklist - the container

// promote BookList from a component to a container - it
// need to know about his new dispatch methods, lelectBOok. make it availabe as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

