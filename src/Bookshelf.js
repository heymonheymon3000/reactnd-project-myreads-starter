import React from 'react'
import Book from './Book'

const Bookself = props => {
  const { books, updateBookCategory } = props;

  const bookList = books.map(
    book => (
        <Book book={book} books={books} key={book.id} updateBookCategory={updateBookCategory}/>
    ));

  return (
    <ol className="books-grid">{bookList}</ol>
  );
}

export default Bookself 