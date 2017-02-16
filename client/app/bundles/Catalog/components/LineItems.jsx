import React from 'react';
import LineItem from './LineItem';

const LineItems = React.createClass ({

    handleRemoveFromCart: function(id) {
        // call handleRemoveFromCart in Cart to handle it
    },

    render: function() {
        // populate an array "line_items" with
        // a collection of LineItem components

        return(
            <table>
                <tbody>
                // render line items
                // render the total price line
                </tbody>
            </table>
        )
    }
});

export default LineItems;