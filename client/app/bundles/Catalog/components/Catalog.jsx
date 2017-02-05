import React, { PropTypes } from 'react';
import BookList from './BookList';
import axios from 'axios';
const Catalog = React.createClass ({
    getInitialState: function() {
        return { books: [] };
    },

    componentDidMount: function() {
        var self = this;

        axios.defaults.headers.common['X-Requested-With'] = "XMLHttpRequest";
        axios.get('/')
            .then(function (response) {
                console.log(response.data);
                self.setState({ books: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <BookList books={this.state.books}/>
                    </div>
                </div>
            </div>
        );
    }
});

export default Catalog;