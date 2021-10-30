import {
    GET_COURSE_REQUEST,
    GET_COURSE_SUCCESS,
    GET_COURSE_FAILURE,
} from "../constants/course";

import courseAPI from "../services/courseAPI";


export function getCourseByCategory(category) {
    return async (dispatch) => {

        dispatch( {type: GET_COURSE_REQUEST});

        try {
            const {data} = await courseAPI.getCourseByCategory(category);
            dispatch({ type: GET_COURSE_SUCCESS, payload: {data}});

        } catch (error) {

            dispatch({
                type: GET_COURSE_FAILURE,
                payload: {error: error.respone.data
            }});
        }
    }
}

