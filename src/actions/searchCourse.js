import {SEARCH_COURSE_SUCCESS, SEARCH_COURSE_FAILURE, SEARCH_COURSE_REQUEST} from "../constants/searchCourse";
import coursesAPI from "../services/coursesAPI";

export function searchCourse(name) {
    return async (dispatch) => {
        dispatch({ type: SEARCH_COURSE_REQUEST });
        try {
            const { data } = await coursesAPI.searchCourse(name);
            dispatch({ type: SEARCH_COURSE_SUCCESS, payload: { data }});
        } catch (error) {
            dispatch({type: SEARCH_COURSE_FAILURE, payload: { error: error.response.data} });
        }
    }
}



