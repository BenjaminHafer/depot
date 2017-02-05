import React from 'react';

const Book = React.createClass ({
    propTypes: {
        title: React.PropTypes.string,
        description: React.PropTypes.string,
        image_url: React.PropTypes.string,
        price: React.PropTypes.number,
        popularity: React.PropTypes.number
    },

    render: function() {
        return(
            <tr className="entry">
                <td>
                    <img src={this.props.book.image_url.url} />
                </td>
                <td>{this.props.book.title}</td>
                <td dangerouslySetInnerHTML={{__html: this.props.book.description}}></td>
                <td>{this.props.book.price}</td>
                <td>{this.props.book.popularity}</td>
            </tr>
        )
    }
});

export default Book;