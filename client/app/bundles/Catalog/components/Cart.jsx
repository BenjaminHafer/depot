import React from 'react';
import LineItems from './LineItems';
import axios from 'axios';

const Cart = React.createClass ({
    getInitialState: function() {
        return {
            total_price: 0,
            line_items: [],
            id: 0
        };
    },

    componentDidMount: function() {
        var self = this;

        axios.defaults.headers.common['X-Requested-With'] = "XMLHttpRequest";
        axios.get('/carts/'+this.props.id)
            .then(function (response) {
                console.log(response.data);
                self.setState({ id: self.props.id });
                self.setState({ total_price: response.data.total_price });
                self.setState({ line_items: response.data.line_items });
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    handleRemoveFromCart: function(id){
        var self = this;

        console.log(id.toString());
        axios.defaults.headers.common['X-Requested-With'] = "XMLHttpRequest";
        axios.patch('/line_items/'+ this.props.id +'/decrement')
            .then(function (response) {
                console.log(response.data);
                self.setState({ total_price: response.data.total_price });
                self.setState({ line_items: response.data.line_items });
                self.handleRemoveFromCart(response.data);
            })
            .catch(function (error) {
                 console.log("The id is " + id.toString());

                //alert('Cannot remove line item: ', error);
            });

    },


    handleEmptyCart: function(){
        var self = this;

        axios.defaults.headers.common['X-Requested-With'] = "XMLHttpRequest";
        axios.delete('/carts/'+this.state.id)
            .then(function (response) {
                console.log(response.data);
                self.setState({ id: 0 });
                self.setState({ line_items: response.data.line_items });
                self.setState({ total_price: response.data.total_price });


                self.handleEmptyCart(response.data);
            })
            .catch(function (error) {
                // console.log(error);
                //alert('Cannot empty cart: ', error);
            });

    },

    handleCheckout: function(){
        var self = this;

        axios.defaults.headers.common['X-Requested-With'] = "XMLHttpRequest";
        axios.get('/orders/new')
            .then(function (response) {
                console.log(response.data);

                window.location = response.data.redirect_url;
            })
            .catch(function (error) {
                // console.log(error);
                alert('Cannot check out the order: ', error);
            });

    },

    handleAddToCart: function(cart){
        // console.log(cart);
        this.setState({ id: cart.id});
        this.setState({ total_price: cart.total_price});
        this.setState({ line_items: cart.line_items});
    },

    render: function() {
        if (this.state.total_price != 0) {
            return(
                <div className="carts">
                    <h2>Your Cart</h2>
                    <LineItems total_price={this.state.total_price}
                               line_items={this.state.line_items}
                               handleRemoveFromCart={this.handleRemoveFromCart} />
                    <a className="btn btn-primary btn-xs my_button"
                       onClick={this.handleCheckout} >
                        Checkout
                    </a>
                    <a className="btn btn-primary btn-xs my_button"
                       onClick={this.handleEmptyCart} >
                        Empty Cart
                    </a>

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