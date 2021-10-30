
import {
    UPDATE_COURSE_REQUEST,
    UPDATE_COURSE_SUCCESS,
    UPDATE_COURSE_FAILURE,
} from "../constants/updateCourseAdmin";
import coursesAPI from "../services/coursesAPI";


export function updateCourseAdmin(values) {
    return async (dispatch) => {
        dispatch({ type: UPDATE_COURSE_REQUEST });
        try {

            const status = "Update course success!!";
            const {data} = await coursesAPI.updateCourse(values);
            dispatch({ type: UPDATE_COURSE_SUCCESS, payload: {data, status}});

        } catch (error) {
            dispatch({
                type: UPDATE_COURSE_FAILURE,
                payload: {error: error.response.data},
            })
        }
    }
}