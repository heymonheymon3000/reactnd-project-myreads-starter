import React from 'react'
// import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import Search from './Search'

import './App.css'

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf category={'Currently Reading'}/>
                <Bookshelf category={'Want to Read'}/>
                <Bookshelf category={'Read'}/>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search' className='search-button'>
                search
              </Link>
            </div>
          </div>
        )}/>

        <Route path='/search' component={Search} />
      </div>
    )
  }
} 

export default BooksApp
