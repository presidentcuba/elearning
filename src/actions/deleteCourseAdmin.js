import {DELETE_COURSE_REQUEST, DELETE_COURSE_SUCCESS, DELETE_COURSE_FAILURE} from "../constants/deleteCourseAdmin";

import coursesAPI from "../services/coursesAPI";
export function deleteCourseAdmin(id) {
    return async (dispatch) => {
        dispatch({ type: DELETE_COURSE_REQUEST });
        try {
            const {data} = await coursesAPI.deleteCourse(id);
            dispatch({ type: DELETE_COURSE_SUCCESS, payload: {data} });
        } catch (error) {
            dispatch({ type: DELETE_COURSE_FAILURE, payload: { error: error.response.data }})
        }
    }
}