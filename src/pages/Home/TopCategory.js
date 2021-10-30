import React from 'react'
import {Link} from 'react-router-dom';
import design from "src/images/design-v2.jpg";
import developmentv2 from "src/images/development-v2.jpg";
import marketing from "src/images/marketing-v2.jpg";
import software from "src/images/software-v2.jpg";
import developmentv3 from "src/images/development-v3.jpg";
import business from "src/images/business-v2.jpg";
import photography from "src/images/photography-v2.jpg";
import music from "src/images/music-v2.jpg";
export default function TopCategory() {
    const images = [
        { name: "Design", url: design, maDanhmuc: "Design",},
        { name: "Development", url: developmentv2, maDanhmuc: "Development", },
        { name: "Marketing", url: marketing, maDanhmuc: "Marketing",},
        { name: "IT & Software", url: software, maDanhmuc: "Software",},
        { name: "Seft-Development", url: developmentv3, maDanhmuc: "BackEnd",},
        { name: "Business", url: business, maDanhmuc: "Business",},
        { name: "Picture", url: photography, maDanhmuc: "Picture",},
        { name: "Music", url: music, maDanhmuc: "Music",},
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
