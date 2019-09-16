import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import './book-list.css'

import BookListItem from '../book-list-item';
import ErrorIndicator from '../error-indicator';
import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import Spinner from '../spinner';

import { compose } from '../../utils';

// Splitting components into the ones
// that work on data and the ones that render content
// is considered to be a good practice
const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {
        books.map(book => {
          return (
            <li key={book.id}>
              <BookListItem
                book={book}
                onAddedToCart={() => onAddedToCart(book.id)} />
            </li>
          )
        })
      }
    </ul>
  );
};

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading)
      return <Spinner />;

    if (error)
      return <ErrorIndicator error={error} />

    return <BookList books={books} onAddedToCart={onAddedToCart} />

  }
}

// Distributing store argument here
const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error }
};

// { bookstoreService } is received from the second argument ownProps
const mapDispatchToProps = (dispatch, { bookstoreService }) => ({
  fetchBooks: fetchBooks(bookstoreService, dispatch),
  onAddedToCart: (id) => dispatch(bookAddedToCart(id))
})

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
