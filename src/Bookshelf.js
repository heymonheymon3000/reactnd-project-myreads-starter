import React from 'react'
import Book from './Book'

const Bookself = props => {
  const { books, changeShelf } = props;

  const bookList = books.map(
    book => (
        <Book book={book} books={books} key={book.id} changeShelf={changeShelf}/>
    ));

  return (
    <ol className="books-grid">{bookList}</ol>
  );
}

export default Bookself 