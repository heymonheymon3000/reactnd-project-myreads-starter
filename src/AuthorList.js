import React, { Component } from 'react'

class AuthorList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: props.authors
        };
    }

    render() {
        const authors = this.state.authors.map((author) => 
             ( <div key={author} className="book-authors">{author}</div>)
        )

        return (
            <div>{authors}</div>
        )
    }
}

export default AuthorList


