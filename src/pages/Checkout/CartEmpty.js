import React from 'react'
import { Link } from "react-router-dom";
export default function CartEmpty({ cart }) {
    return (
        <div className="cart-empty">
            <div className="cart-empty__content">
                <div className="cart-empty__content-number">
                    <p>{cart.length} courses in the basket</p>
                </div>
                <div className="cart-empty__content-detail">
                    <div className="cart-empty__content-detail-box">
                        <p className="notice">
                            Your basket is empty. Continue shopping and find a course!
                        </p>
                        <Link to="/">Continue your purchases</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
