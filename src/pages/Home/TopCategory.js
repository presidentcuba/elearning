import React from 'react'
import {Link} from 'react-router-dom';
export default function TopCategory() {
    const images = [
        { name: "Design", url: "./images/design-v2.jpg", maDanhmuc: "Design",},
        { name: "Development", url: "./images/development-v2.jpg", maDanhmuc: "Development", },
        { name: "Marketing", url: "./images/marketing-v2.jpg", maDanhmuc: "Marketing",},
        { name: "IT & Software", url: "./images/software-v2.jpg", maDanhmuc: "Software",},
        { name: "Seft-Development", url: "./images/development-v3.jpg", maDanhmuc: "BackEnd",},
        { name: "Business", url: "./images/business-v2.jpg", maDanhmuc: "Business",},
        { name: "Picture", url: "./images/photography-v2.jpg", maDanhmuc: "Picture",},
        { name: "Music", url: "./images/music-v2.jpg", maDanhmuc: "Music",},
    ]
    return (
        <div className="topcategory">
            <div className="width-default">
                <div className="topcategory__content">
                    <h2>Top category</h2>
                    <div className="topcategory__content-box">
                        <div className="row">
                            {images.map((item, index) => (
                                <div className="image-thread col-lg-3 col-md-4 col-sm-6 col-3">
                                     <Link to={`/${item.maDanhmuc}`}>
                                        <div className="image">
                                            <img src={item.url} alt=""></img>
                                        </div>
                                        <div className="thread">
                                            <p>{item.name}</p>
                                        </div>      
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
