import React from 'react';
import LineItem from './LineItem';

const LineItems = React.createClass ({

    handleRemoveFromCart: function(id) {
        this.props.handleRemoveFromCart(id);
    },

    render: function() {
        var line_items = [];

        this.props.line_items.forEach(function(line_item) {
            line_items.push(<LineItem line_item={line_item}
                                      handleRemoveFromCart={this.handleRemoveFromCart}
                                      key={'line_item' + line_item.id}/>);
        }.bind(this));

        return(
            <table>
                <tbody>
                {line_items}
                <tr className="total_line">
                    <td colSpan="2">Total:</td>
                    <td className="total_cell">${this.props.total_price}</td>
                </tr>
                </tbody>
            </table>
        )
    }
});

export default LineItems;