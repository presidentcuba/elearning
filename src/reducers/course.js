
import { GET_COURSE_REQUEST,GET_COURSE_SUCCESS,GET_COURSE_FAILURE } from "../constants/course";

const initialState = {
    courseDetail: null,
    isLoading: false,
    error: null,
}
function courseDetail( state = initialState, action) {
    switch (action.type) {
        case GET_COURSE_REQUEST: {
            return {...state, isLoading:true, error: null}
        }
        case GET_COURSE_SUCCESS: {
            return {...state, courseDetail: action.payload.data, isLoading: false}
        }
        case GET_COURSE_FAILURE: {
            return {...state, isLoading:false, error: action.payload.error }
        }
            
        default:
            return state;
    }
}
export default courseDetail