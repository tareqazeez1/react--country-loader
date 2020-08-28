import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        total = total + country.population;
    }
    
    return (
        <div>
            <h2>
                Country number: {cart.length}
            </h2>
    <h4>Total Added Population: {total}</h4>
        </div>
    );
};

export default Cart;