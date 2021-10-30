import React from 'react'
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import Slider from "react-slick";

export default function Trends({ courses, state }) {
    
    const FrontEnd = courses.filter((event) => {
        return event.danhMucKhoaHoc.maDanhMucKhoahoc === "FrontEnd";
    })
    console.log(FrontEnd)
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchDrag: true,
        // nav: true,
        mouseDrag: true,
        autoplay: true,
        margin: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 668,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    arrows: false,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                },
            },
        ],
      };
    return (
        <div className="trends">
            <div className="width-default">
                <h2>Students are viewing</h2>
                <div className="trends__content">
                    <Slider {...settings}>
                            {FrontEnd.map((item, index) => (
                                <div className="trends__item" key={index}>
                                    <Link to={`/course/${item.maKhoaHoc}`}>
                                        <div  className="card">
                                            <img src={item.hinhAnh} className="card-img-top w-100" alt="..." />
                                            <div className="card-body">
                                            <h5 className="card-title">{item.tenKhoaHoc}</h5>
                                            <p className="card-text text-truncate">{item.moTa}</p>
                                            <div className="rating d-flex">
                                                <span className="rating__score">4.5 </span>
                                                <div className="rating__star">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                </div>
                                                <span className="rating__view">({item.luotXem})</span>
                                            </div>
                                            <div className="price">
                                                <span className="price__old">$99.99</span>
                                                <span className="price__new">$70.21</span>
                                            </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                    
                                ))}
                        </Slider>
                    </div>
               
            </div>
            
        </div>
    )
}
