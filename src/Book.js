import React from 'react';
import ShelfChanger from './ShelfChanger';
import noCover from './images/no-cover-image.png';

const Book = props => {
  const { book, books, changeShelf } = props;

  // add fallbacks for missing cover images and title
  const coverImg =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : noCover;
  const title = book.title ? book.title : 'No title available';

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128, height: 193, backgroundImage: `url(${coverImg})`}}
          />
          <ShelfChanger book={book} books={books} changeShelf={changeShelf} />
        </div>
        <div className="book-title">{title}</div>
        {/* Check for authors and render each on separate line if exist*/
        book.authors &&
          book.authors.map((author, index) => (
            <div className="book-authors" key={index}>
              {author}
            </div>
          ))}
      </div>
    </li>
  );
};

export default Book;



























// import React, { Component } from 'react'
// // import { Link } from 'react-router-dom'
// import ShelfChanger from './ShelfChanger'
// import noCover from './images/no-cover-image.png';

// class Book extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             book: this.props.book,
//             books: this.props.books,
//             changeShelf: this.props.changeShelf
//         };
//     }

//     render () {
//         const { book, books, changeShelf } = this.state;

//         // add fallbacks for missing cover images and title
//         const coverImg =
//             book.imageLinks && book.imageLinks.thumbnail
//                 ? book.imageLinks.thumbnail
//                 : noCover;
//         const title = book.title ? book.title : 'No title available';

//         return (
//             <li>
//               <div className="book">
//                 <div className="book-top">
//                   <div
//                     className="book-cover"
//                     style={{ width: 128, height: 193, backgroundImage: `url(${coverImg})`}}
//                   />

//                   <ShelfChanger book={book} books={books} changeShelf={changeShelf} />

//                 </div>
//                   <div className="book-title">{title}</div>
//                   {/* Check for authors and render each on separate line if exist*/
//                   book.authors &&
//                       book.authors.map((author, index) => (
//                       <div className="book-authors" key={index}>
//                         {author}
//                       </div>
//                   ))}
//               </div>
//             </li>
//           );
//     }
// }

// export default Book 