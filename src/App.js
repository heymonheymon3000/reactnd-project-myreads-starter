import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import BookList from './BookList'
import Search from './Search'
import './App.css'

class BooksApp extends Component {
  state = { books: [] };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    });
  }

  updateBookCategory = (updateBook, category) => {
    BooksAPI.update(updateBook, category).then(response => {
      updateBook.shelf = category;
      this.setState(prevState => ({
        books: prevState.books.filter(book => 
          book.id !== updateBook.id)
          .concat(updateBook)
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
            <BookList books={books} updateBookCategory={this.updateBookCategory}/>
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
              <Search books={books} updateBookCategory={this.updateBookCategory}/>
            )}
          />
      </div>
    )
  }
} 

export default BooksApp
