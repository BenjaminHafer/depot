import React from 'react';
import Book from './Book';
import SortColumn from './sort_column';

const BookList = React.createClass ({
    handleSortColumn: function(name, order) {
        this.props.handleSortColumn(name, order);
    },
    handleAddToCart: function(id){
        this.props.handleAddToCart(id);
    },
    render: function() {
        var books = [];

        this.props.books.forEach(function(book) {
            books.push(<Book book={book}
                             key={'book' + book.id}
                             handleAddToCart={this.handleAddToCart}/>);
        }.bind(this));

        return(
            <table className="table table-striped" width="auto">
                <thead>
                <tr>
                    <th className="col-md-2">Image url</th>
                    <th className="col-md-2 sortable">
                        <SortColumn     name="title"
                                        text="Title"
                                        sort={this.props.sort}
                                        order={this.props.order}
                                        handleSortColumn={this.handleSortColumn}
                        />
                    </th>
                    <th className="col-md-6\4">Description</th>
                    <th className="col-md-2 sortable">
                        <SortColumn     name="price"
                                        text="Price"
                                        sort={this.props.sort}
                                        order={this.props.order}
                                        handleSortColumn={this.handleSortColumn}
                        />
                    </th>
                    <th className="col-md-2 sortable">
                        <SortColumn     name="popularity"
                                        text="Popularity"
                                        sort={this.props.sort}
                                        order={this.props.order}
                                        handleSortColumn={this.handleSortColumn}
                        />
                    </th>
                    <th className="col-md-2">Actions</th>
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