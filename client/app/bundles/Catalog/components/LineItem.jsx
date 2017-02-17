import React from 'react';


const LineItem = React.createClass ({
    propTypes: {
        quantity: React.PropTypes.number,
        title: React.PropTypes.string,
        total_price: React.PropTypes.number,
    },

    handleRemoveFromCart: function(e) {
        this.props.handleRemoveFromCart(this.props.line_item.id);
    },

    render: function() {

        return(
            <tr className="entry">
                <td>{this.props.line_item.quantity}&times;</td>
                <td>{this.props.line_item.title}</td>
                <td className="item_price">${this.props.line_item.total_price}</td>
                <td>
                    <a className="btn btn-primary btn-xs"
                       onClick={this.handleRemoveFromCart} >
                        -
                    </a>
                </td>
            </tr>
        )
    }
});

export default LineItem;