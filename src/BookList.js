import React, { Component } from 'react'
import Bookshelf from './Bookshelf'

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="list-books-content">
              <div>
                <Bookshelf category={'Currently Reading'}/>
                <Bookshelf category={'Want to Read'}/>
                <Bookshelf category={'Read'}/>
              </div>
            </div>
        )
    }
}

export default BookList

