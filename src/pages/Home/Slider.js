import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { searchCourse } from "src/actions/searchCourse";
import slider from "src/images/slider.jpg"
export default function Slider() {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        console.log(searchTerm);
    }
    
    return (
        <div className="slider">
            <div className="slider-image">
                <img className="w-100" src={slider}></img>
            </div>
            <div className="slider-form-search">
                <h1>New to Udemy? Lucky you.</h1>
                <p>
                Courses start at $14.99. Get your new-student offer before it expires.
                </p>
                <form action={`/search/${searchTerm}`}>
                    <input onChange={handleChange} type="text" className="form-control" placeholder="What do you want to learn?"></input>
                    <button type="submit" className="btn"><i class="fal fa-search"></i></button>
                </form>
            </div>
        </div>
    )
}
