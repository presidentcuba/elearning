import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { deleteToCart } from "src/actions/cart";
export default function CartAvailable({ cart }) {
    const dispatch = useDispatch();

    return (
        <>
            <div className="shopping-cart__content-list">
                <div className="shopping-cart__content-list-item-thread">
                    <div className="shopping-cart__content-list-item">  
                        <div className="shopping-cart__content-number">
                            <h3>{cart.length} course in the basket</h3>
                        </div>
                        {cart.map((item, index) => {
                            return (
                                <div key={index} className="shopping-cart__content-list-item-detail">
                                    <Link to={`/course/${item.maKhoaHoc}`}>
                                        <div className="shopping-cart__content-list-item--img">
                                            <img src={item.hinhAnh} alt=""></img>
                                        </div>
                                    </Link>
                                    <div className="shopping-cart__content-list-thread">
                                        <Link to={`/course/${item.maKhoaHoc}`}>
                                            <h5>{item.tenKhoaHoc}</h5>
                                            <span>{item.moTa}</span>
                                        </Link>
                                        <div className="star">
                                            <span>4.7 </span>
                                            <BsStarFill className="icon-star" />
                                            <BsStarFill className="icon-star" />
                                            <BsStarFill className="icon-star" />
                                            <BsStarFill className="icon-star" />
                                            <BsStarHalf className="icon-star" />
                                            <span className="rating"> ({item.luotXem} reviews)</span>
                                        </div>
                                        <p>31 hours in total • 397 sessions • All levels</p>
                                    </div>
                                    <div className="delete-save">
                                        <p onClick={() => dispatch(deleteToCart(item.maKhoaHoc))} className="delete">To delete</p>
                                        <p className="save">Save for later</p>
                                    </div>
                                    <p className="price">US $ 79.99</p>
                                </div>
                                ) 
                            })}
                    </div>
                    <div className="shopping-cart__content-list-validation">
                        <div className="shopping-cart__content-list-validation-detail">
                            <p>Total:</p>
                            <p className="total-price">US $ 79.99</p>
                            <a className="btn-validation" href="#">Validation</a>
                            <p className="promotion">Promotions</p>
                            <p className="keep">
                                <span><IoIosClose /></span> 
                                <span> KEEPLEARNING</span>
                                <span> is applied</span>
                            </p>
                            <form>
                                <input className="form-control" type="text" placeholder="Enter the coupon"></input>
                                <button type="submit">To apply</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
