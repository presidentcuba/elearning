import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CartAvailable from './CartAvailable';
import CartEmpty from './CartEmpty';

export default function ShoppingCart() {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.cart);
    const { courses } = useSelector((state) => state.courses)
    console.log(courses);
    return (
            <div className="shopping-cart">
                <div className="shopping-cart__content">
                    <div className="shopping-cart__content-heading">
                        <div className="container">
                            <h1>Basket</h1>
                        </div>
                    </div>
                    <div className="container">
                        {cart.length > 0 ? <CartAvailable cart = {cart} /> : <CartEmpty cart = {cart} />}

                        
                    </div>
                    <div className="courses-more">
                        </div>             
                </div>
            </div>
    )
}
