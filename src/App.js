import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import BookList from './BookList'


import Search from './Search'

import './App.css'

class BooksApp extends React.Component {
  state = { books: [] };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books })}  
    );
  }

  changeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(response => {
      // set shelf for new or updated book
      changedBook.shelf = shelf;
      // update state with changed book
      this.setState(prevState => ({
        books: prevState.books
          // remove updated book from array
          .filter(book => book.id !== changedBook.id)
          // add updated book to array
          .concat(changedBook)
      }));
    });
  };

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookList />
            <div className="open-search">
              <Link to='/search' className='search-button'>
                search
              </Link>
            </div>
          </div>
        )}/>

        <Route
            path="/search"
            render={() => (
              <Search books={books} changeShelf={this.changeShelf}/>
            )}
          />
      </div>
    )
  }
} 

export default BooksApp
