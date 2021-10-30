import { GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS, GET_CATEGORY_FAILURE } from "../constants/courses";

const initialState = {
    coursesCategory: [],
    isLoading: false,
    error: null,
}

function coursesCategoryReducer ( state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORY_REQUEST: {
            return {...state, isLoading: true, error: null}
        }
        case GET_CATEGORY_SUCCESS: {
            return {...state, coursesCategory: action.payload.data, isLoading: false}
        }
        case GET_CATEGORY_FAILURE: {
            return {...state, error: action.payload.error, isLoading: false}
        }
        default:
            return state;
    }
}
export default coursesCategoryReducer;