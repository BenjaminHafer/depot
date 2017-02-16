import React from 'react';

const LineItem = React.createClass ({
    propTypes: {
        // types of props
        id: React.PropTypes.string,
        quantity: React.PropTypes.number,
        title: React.PropTypes.string,
        price: React.PropTypes.number
    },

    handleRemoveFromCart: function(e) {
        // call handleRemoveFromCart in LineItems to handle it
    },

    render: function() {

        return(
            <tr className="entry">
                // render a line item row
            </tr>
        )
    }
});

export default LineItem;