import React, { useEffect, useState } from 'react'
import { BsCollectionPlay, BsFileEarmark } from "react-icons/bs";
import { RiFolderDownloadLine } from "react-icons/ri";
import { CgInfinity } from "react-icons/cg";
import { BiMobile } from "react-icons/bi";
import { GiRibbonMedal } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "src/actions/cart";
export default function CourseSidebar( { course }) {
    const dispatch = useDispatch();
    const [scrollSideBar, setScrollSideBar] = useState(false);
    const cart = useSelector((state) => state.cart);
    console.log(cart);

    useEffect(() => {
        const scrollSide = () => {
            if (window.scrollY >= 350) {
                setScrollSideBar(true);
            } else {
                setScrollSideBar(false);
            }
        };
        window.addEventListener("scroll", scrollSide);
        return () => window.removeEventListener("scroll", scrollSide);
    }, [scrollSideBar]);
    
    const handleAddToCart = (course) => {
        dispatch(addToCart(course));
        console.log(course);
    }
    return (
   
        <div className={`course__detail-top-sidebar ${scrollSideBar ? "scroll" : ""}`}>
            <div className="sidebar-box">
                <div className="course-info">
                    <div className="image">
                        <img src={course.hinhAnh} alt=""></img>
                    </div>
                    <div className="thread">
                    <p className="price">US $ 79.99</p>
                    <button onClick={() => dispatch(addToCart(course))} className="btn-addcart">Add to Cart</button>
                    <a className="btn-buy" href="">Buy now</a>
                    <p className="dayoff">30-day money-back guarantee</p>
                    </div>
                    
                </div>
                <div className="course-detail">
                <p className="title">This course includes:</p>
                <p><BsCollectionPlay /><span>30.5 hour video on demand</span></p>
                <p><BsFileEarmark /><span>7 items</span></p>
                <p><RiFolderDownloadLine /><span>53 downloadable resources</span> </p>
                <p><CgInfinity /><span>Unlimited access</span> </p>
                <p><BiMobile /><span>Mobile and TV access</span> </p>
                <p><GiRibbonMedal /><span>Certificate of completion</span></p>
                <a>Apply Coupon</a>
                </div>
                <div className="training">
                <h5 className="training__title">Training 5 or more people?</h5>
                <p>Give your team members access to over 6,000 of the best Udemy courses anytime, anywhere.</p>
                <a href="">Try Udemy Business</a>
                </div>
            </div>
        </div> 
    
    )
}
