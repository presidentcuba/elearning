import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesByCategory } from "src/actions/coursesCategory";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import CoursesByCategory from "./CoursesByCategory";

export default function Courses() {
  const dispatch = useDispatch();
  const { category } = useParams();
  const { coursesCategory } = useSelector((state) => state.coursesCategory);
  console.log(category)

  useEffect( () => {
    dispatch(getCoursesByCategory(category));

  }, [category])

  var num = 0;
  if (category == "BackEnd") {
      var num = 1;
  }
  if (category == "Design") {
      var num = 2;
  }
  if (category == "FrontEnd") {
      var num = 3;
  }
  if (category == "FullStack") {
      var num = 4;
  }
  console.log(coursesCategory)
  return (
    <div className="courses">
        <div className="courses__content">
            <div className="courses-menu">
              <div className="container">
                  <ul>
                    <li><Link to="/">Development</Link></li>
                    <li><Link className={`${num === 1 ? "active" : ""}`} to="/courses/BackEnd">BackEnd</Link></li>
                    <li><Link className={`${num === 2 ? "active" : ""}`} to="/courses/Design">Design</Link></li>
                    <li><Link className={`${num === 3 ? "active" : ""}`} to="/courses/FrontEnd">FrontEnd</Link></li>
                    <li><Link className={`${num === 4 ? "active" : ""}`} to="/courses/FullStack">FullStack</Link></li>
                  </ul>
              </div>  
            </div>
            <div className="courses__content-list">
              <div className="container">
                <h1>{category} courses</h1>
                <p>Courses to get you started</p>
                <div className="row">
                    <CoursesByCategory coursesCategory = {coursesCategory}/>
                </div>
              </div>
            </div>
        </div>      
    </div>
  );
}
