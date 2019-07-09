import React, { Component } from 'react';

class ShelfChanger extends Component {
  updateShelf = event =>
    this.props.changeShelf(this.props.book, event.target.value);

  render() {
    const { book, books } = this.props;

    // set current shelf to none as default
    let currentShelf = 'none';

    books.map((item) => {
      if (item.id === book.id) {
        currentShelf = item.shelf;
      }
      return (item)
    });

    return (
      <div className="book-shelf-changer">
        <select onChange={this.updateShelf} defaultValue={currentShelf}>
          {/* <option value="none" disabled>
            Move to...
          </option> */}
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfChanger;
