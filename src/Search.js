import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {
  state = {
    query: '',
    newBooks: []
  };

  getBooks = event => {
    const query = event.target.value;
    this.setState({ query });

    if (query) {
      BooksAPI.search(query.trim(), 20).then(books => {
        books.length > 0 ?
        this.setState({ newBooks: books }) :
        this.setState({ newBooks: [] }) 
      });
    } else {
      this.setState({ newBooks: []});
    }
  };

    render() {
        const { query, newBooks } = this.state;
        const { books, changeShelf } = this.props;

        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className='close-search'>
                  Close
              </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input
                  type="text"
                  placeholder="Search by title or author"
                  value={query}
                  onChange={this.getBooks}
                />
              </div>
            </div>
            <div className="search-books-results">
                {newBooks.length > 0 && (
                  <div>
                    <h3>Search returned {newBooks.length} books </h3>
                    <ol className="books-grid">
                      {newBooks.map((book) => (
                        <Book 
                          book={book} 
                          books={books}
                          key={book.id}
                          changeShelf={changeShelf}/>
                      ))}
                    </ol>
                  </div>
                )}
            </div>
          </div>
        )
    }
}

export default Search