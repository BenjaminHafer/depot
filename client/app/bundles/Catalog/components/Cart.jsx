import React from 'react';
import LineItems from './LineItems';
import axios from 'axios';

const Cart = React.createClass ({
    getInitialState: function() {
        return {
            // states of Cart
        };
    },

    componentDidMount: function() {
        // send an HTTP get message to
        // request json data from the server at the url
        // '/carts/'+this.props.id
        // and update the states with it
    },

    handleRemoveFromCart: function(id){
        // send an HTTP patch message to
        // request json data from the server at the url
        // '/line_items/'+id+'/decrement'
        // and update the states with it
    },


    handleEmptyCart: function(){
        // send an HTTP delete message to
        // request json data from the server at the url
        // '/carts/'+this.props.id
        // and update the states with it
    },

    handleAddToCart: function(cart){
        // update the states with "cart"
        // that comes from the line "self.refs.cart.handleAddToCart(response.data);"
        // in the "Cart" component

    },

    render: function() {
        if (this.state.total_price != 0) {
            return(
                <div className="carts">
                    // render the LineItems component here
                </div>
            )
        }
        else {
            return (
                <div className="carts">
                    <h2>Your Cart</h2>
                </div>
            );
        }
    }
});

export default Cart;