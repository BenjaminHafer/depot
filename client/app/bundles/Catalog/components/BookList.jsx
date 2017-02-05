import React from 'react';
import Book from './Book';

const BookList = React.createClass ({
    render: function() {
        var books = [];

        this.props.books.forEach(function(book) {
            books.push(<Book book={book}
                             key={'book' + book.id}/>);
        }.bind(this));

        return(
            <table className="table table-striped" width="auto">
                <thead>
                <tr>
                    <th className="col-md-2">Image url</th>
                    <th className="col-md-2">Title</th>
                    <th className="col-md-6">Description</th>
                    <th className="col-md-1">Price</th>
                    <th className="col-md-1">Popularity</th>
                </tr>
                </thead>
                <tbody>
                {books}
                </tbody>
            </table>
        )
    }
});

export default BookList;