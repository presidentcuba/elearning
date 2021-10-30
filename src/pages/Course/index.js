import React, {useEffect} from "react";
import { useParams, useLocation } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { getCourseByCategory } from "src/actions/course";
import { getCoursesByCategory, getCourse1 } from "src/actions/courses";
import CourseSidebar from "./CourseSidebar";
import CourseDetail from "./CourseDetail";
import WillLearn from "./WillLearn";
import CourseContent from "./CourseContent";
import SlideMenu from "./SlideMenu";
import NavbarScroll from "./NavbarScroll";
import Trainer from "./Trainer";
import Comments from "./Comments";
import Opinion from "./Opinion";

export default function Course() {
 
  const dispatch = useDispatch();
  // const { category } = useParams();
  const { pathname } = useLocation();
 
  const categoryAr = pathname.split("/course/");
  const category = categoryAr[1];
  const { courses } = useSelector((state) => state.courses);
  const { courseDetail } =  useSelector((state) => state.courseDetail);

  const course = courseDetail || {
    maKhoaHoc:'',
    tenKhoaHoc: '',
    moTa:'',
    luotXem:'',
    hinhAnh: '',
    maNhom:'',
    nguoiTao: {
      taiKhoan:'',
      hoTen:'',
      maLoaiNguoiDung:'HV'
    }
  }
  useEffect( () => {
    dispatch(getCourseByCategory(category));

  }, [category])

 
  return (
    <div className="course__detail">
        <div className="course__detail-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <CourseDetail course = {course} />
              </div>
              <div className="col-lg-4  col-md-12">
                <CourseSidebar course = {course} />
              </div>
            </div> 
          </div>   
        </div>
        <div className="course__detail-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <WillLearn />
                <CourseContent />
                <Trainer />
                <Comments />
                <Opinion />
              </div>
            </div>
          </div>
        </div>
      <NavbarScroll course = {course} />
    </div>
  );
}
