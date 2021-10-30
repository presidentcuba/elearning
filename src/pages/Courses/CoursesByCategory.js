import React from 'react'
import { Link } from "react-router-dom";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { addToCart } from "src/actions/cart";
export default function CoursesByCategory({ coursesCategory }) {
    const dispatch = useDispatch();
    return (
        <>
            {coursesCategory.map((item, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div key={index} className="courses__content-item">
                    <div className="courses__item-img">
                        <Link to={`/course/${item.maKhoaHoc}`}>
                            <img src={item.hinhAnh}></img>
                        </Link>  
                    </div>
                    <div className="courses__item-thread">
                        <Link to={`/course/${item.maKhoaHoc}`}><h5>{item.tenKhoaHoc}</h5></Link>
                        <p className="desciption">Adame</p>
                        <div className="star">
                            <span>4.6</span>
                            <BsStarFill className="icon-star mr-1" />
                            <BsStarFill className="icon-star mr-1" />
                            <BsStarFill className="icon-star mr-1" />
                            <BsStarFill className="icon-star mr-1" />
                            <BsStarHalf className="icon-star mr-1" />
                            <span className="view"> ({item.luotXem})</span>
                        </div>
                        <p className="total">$79.79</p>
                        <div className="courses-add-to-cart">
                            <Link to={`/course/${item.maKhoaHoc}`}><h3>{item.tenKhoaHoc}</h3></Link>
                            <p className="date">Updated <span>{item.ngayTao}</span></p>
                            <p className="mota">{item.moTa}</p>
                            <button onClick={() => dispatch(addToCart(item))}>Add to cart</button>
                            </div>
                    </div>
                </div>
                </div>
            ))}
        </>
    )
}
