import React, { useEffect , useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { searchCourse } from "src/actions/searchCourse";
import { Link } from "react-router-dom";
export default function SearchCourse() {
    const dispatch = useDispatch();
    const { searchData } = useSelector((state) => state.searchCourse);
    console.log(searchData);
    const { name } = useParams();
    console.log(name);
    useEffect(() => {
        dispatch(searchCourse(name))
    },[name])
    return (
        <div className="search-course">
            <div className="container">
                {searchData.length > 0 ?
                    <div className="search-course__content">
                        <h1>{searchData.length} results for {`"${name}"`}</h1>
                        {searchData.map((item, index) => (
                            <div key={index} className="search-course__content-item">
                                <div className="search-course__item-img">
                                    <Link to={`/course/${item.maKhoaHoc}`}>
                                        <img src={item.hinhAnh}></img>
                                    </Link>  
                                </div>
                                <div className="search-course__item-thread">
                                    <Link to={`/course/${item.maKhoaHoc}`}><h5>{item.tenKhoaHoc}</h5></Link>
                                    <p className="desciption">{item.moTa}</p>
                                    <div className="star">
                                        <span>4.6</span>
                                        <BsStarFill className="icon-star" />
                                        <BsStarFill className="icon-star" />
                                        <BsStarFill className="icon-star" />
                                        <BsStarFill className="icon-star" />
                                        <BsStarHalf className="icon-star" />
                                        <span className="view">({item.luotXem})</span>
                                    </div>
                                    <p className="total">31 hours in total • 397 sessions • All levels</p>
                                    
                                </div>
                            </div>
                        ))}
                        
                    </div>
                   : <div className="search-sourse__none">
                       <p>We're sorry, we couldn't find any results for {`"${name}"`}</p>
                       <p>Try to narrow your search. Here are some ideas:</p>
                       <ul>
                           <li>Make sure you spelled all the words correctly</li>
                           <li>Try using other keywords</li>
                           <li>Try to use less specific keywords</li>
                       </ul>
                   </div> }
            </div>
        </div>
    )
}
