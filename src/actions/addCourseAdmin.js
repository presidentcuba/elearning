
import { ADD_COURSE_FAILURE, ADD_COURSE_REQUEST, ADD_COURSE_SUCCESS } from "../constants/addCourseAdmin";

import coursesAPI from "../services/coursesAPI";

export function addCourseAdmin(values) {
    return async (dispatch) => {
      dispatch({ type: ADD_COURSE_REQUEST });
      try {
          const status = "Add User Success!";
          const { data } = await coursesAPI.addCourses(values);

          dispatch({ type: ADD_COURSE_SUCCESS, payload: { data, status } });
      } catch (error) {
          dispatch({
              type: ADD_COURSE_FAILURE,
              payload: { error: error.response.data },
          });
      }
  };
  }
  