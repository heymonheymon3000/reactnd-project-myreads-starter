import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import ShelfChanger from './ShelfChanger'
import noCover from './images/no-cover-image.png';

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: this.props.book,
            books: this.props.books,
            changeShelf: this.props.changeShelf
        };
    }

    render () {
        // add fallbacks for missing cover images and title
        const coverImg =
            this.state.book.imageLinks && this.state.book.imageLinks.thumbnail
                ? this.state.book.imageLinks.thumbnail
                : noCover;
        const title = this.state.book.title ? this.state.book.title : 'No title available';

        return (
            <li>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{ width: 128, height: 193, backgroundImage: `url(${coverImg})`}}
                  />

                  <ShelfChanger book={this.state.book} books={this.state.books} changeShelf={this.state.changeShelf} />

                </div>
                  <div className="book-title">{title}</div>
                  {/* Check for authors and render each on separate line if exist*/
                  this.state.book.authors &&
                      this.state.book.authors.map((author, index) => (
                      <div className="book-authors" key={index}>
                        {author}
                      </div>
                  ))}
              </div>
            </li>
          );
    }
}

export default Book 