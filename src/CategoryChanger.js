import React, { Component } from 'react';

class CategoryChanger extends Component {
  updateCategory = event =>
    this.props.updateBookCategory(this.props.book, event.target.value);

  render() {
    const { book, books } = this.props;
    let currCategory = 'none';

    for (let item of books) {
      if (item.id === book.id) {
        currCategory = item.shelf;
        break;
      }
    }

    return (
      <div className="book-shelf-changer">
        <select onChange={this.updateCategory} defaultValue={currCategory}>
         <option disabled>
            Move to...
          </option> }
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default CategoryChanger;
