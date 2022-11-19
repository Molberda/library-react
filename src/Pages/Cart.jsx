import React from 'react';

const Cart = () => {
    return (
        <div id="totals__body">
            <main className="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="books__selected--top">
                            <h2 className="cart__title">Cart</h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <div className="cart__book">Book</div>
                                <div className="cart__quantity">Quantity</div>
                                <div className="cart__total">Price</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Cart;
