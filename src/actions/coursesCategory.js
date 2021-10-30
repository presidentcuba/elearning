import { GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS, GET_CATEGORY_FAILURE } from "../constants/courses";
import coursesAPI from "../services/coursesAPI";

export function getCoursesByCategory(category) {
    return async (dispatch) => {
        dispatch({type: GET_CATEGORY_REQUEST});
        try {
          const { data } = await coursesAPI.getCoursesByCategory(category);
          dispatch({type: GET_CATEGORY_SUCCESS, payload: {data}});
  
        } catch (error) {
          dispatch({type:  GET_CATEGORY_FAILURE,
            payload:{ error: error.response.data}})
        }
    }
  }