import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "src/actions/courses";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import Tabs from "./Tabs";
import Trends from "./Trends";
import Intro from "./Intro";
import Headline from "./Headline";
import TopCategory from "./TopCategory";
import TopicCategory from "./TopicCategory";
import NonStudent from "./NonStudent";
import Partners from "./Partners";
export default function Home(props) {
  console.log(props);
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.courses);
  let num = 1;
  // Được chạy mỗi khi param category thay đổi, để gọi lại API mới tương ứng vs category mới

  useEffect(() => {
    dispatch(getCourses());
  }, [])

  const state = {
    responsive:{
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        620: {
            items: 3,
        },
        768: {
            items: 3,
        },
        992: {
            items: 4,
        },
    },
  }
  return (
    <>

      <Slider />
      <Headline />
      <Tabs state={state} courses={courses} />
      <Intro />
      <Trends state={state} courses={courses} />
      <TopCategory />
      <TopicCategory />
      <NonStudent num = {num} />
      <Partners />
      <NonStudent num = {num + 1} />
      <NonStudent num = {num + 2} />
    </>
  
  );
}
