import { SEARCH_COURSE_SUCCESS, SEARCH_COURSE_FAILURE, SEARCH_COURSE_REQUEST} from "../constants/searchCourse";
const initialState = {
    searchData: [],
    isLoading: false,
    error: null,
}

function searchCourseReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_COURSE_REQUEST: {
            return {...state, isLoading: true, error: null}
        }
        case SEARCH_COURSE_SUCCESS: {
            return {...state, searchData: action.payload.data, isLoading: false}
        }   
        case SEARCH_COURSE_FAILURE: {
            return {...state, isLoading: false, error: action.payload.error,}
        }   
             
        default:
           return state;
    }
}
export default searchCourseReducer;