
import {
  GET_COURSES_REQUEST,
  GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE,
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  GET_LIST_FAILURE,
} from "../constants/courses";

import coursesAPI from "../services/coursesAPI";

export function getCourses(category) {
  return async (dispatch) => {
      dispatch({type: GET_COURSES_REQUEST});

      try {

        const { data } = await coursesAPI.getCourses(category);
        dispatch({type: GET_COURSES_SUCCESS, payload: {data}});

      } catch (error) {
        dispatch({type: GET_COURSES_FAILURE,payload:{ error: error.response.data}})
      }
  }
}

export function getListCourse() {
  return async (dispatch) => {
      dispatch({type: GET_LIST_REQUEST});
      try {
        const { data } = await coursesAPI.getListCourse();
        dispatch({type: GET_LIST_SUCCESS, payload: {data}});

      } catch (error) {
        dispatch({type:  GET_LIST_FAILURE,
          payload:{ error: error.response.data}})
      }
  }
}





