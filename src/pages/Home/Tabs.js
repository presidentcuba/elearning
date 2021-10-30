import React, {useState} from 'react'
import OwlCarousel from 'react-owl-carousel';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {Link} from "react-router-dom";
import Slider from "react-slick";
export default function Tabs({courses, state}) {
    const [activeTab, setActiveTab] = useState('1');
    const [item, setItem] = useState('4');
    const toggle = tab => {
      if(activeTab !== tab) {
        setActiveTab(tab);
      } 
    }
    const BackEnd = courses.filter((e) => {
        return e.danhMucKhoaHoc.maDanhMucKhoahoc === "BackEnd";
    });
    const Design = courses.filter((e) => {
        return e.danhMucKhoaHoc.maDanhMucKhoahoc === "Design";
    });
    const FrontEnd = courses.filter((e) => {
        return e.danhMucKhoaHoc.maDanhMucKhoahoc === "FrontEnd";
    });
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 4,
        touchDrag: true,
        nav: true,
        mouseDrag: true,
        // autoplay: true,
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
        <div className="tabs">
            <div className="width-default">
            <Nav tabs>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }}>BackEnd</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}>Design</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '3' })} onClick={() => { toggle('3'); }}>DiDong</NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Slider {...settings} >
                        {BackEnd.map((item, index) => (
                            <div className="item">
                                <Link className="item" to={`/course/${item.maKhoaHoc}`}>
                                    <div key={index} className="card">
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
                </TabPane>
                <TabPane tabId="2">
                    <Slider {...settings}>
                    {Design.map((item, index) => (
                         <div className="item">
                            <Link to={`/course/${item.maKhoaHoc}`}>
                                <div key={index} className="card">
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
            </TabPane>
            <TabPane tabId="3">
                <Slider {...settings}>
                    {FrontEnd.map((item, index) => (
                         <div className="item">
                            <Link to={`/course/${item.maKhoaHoc}`}>
                                <div key={index} className="card">
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
            </TabPane>
        </TabContent>
            </div>
        </div>
    )
}
