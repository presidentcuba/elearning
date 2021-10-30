import {REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE} from "../constants/register"


const initialState = {
    userInfo: {},
    isLoading: false,
    error: null,
    status: "",
}

function registerReducer (state = initialState, action) {
    switch (action.type) {
        case REGISTER_REQUEST: {
            return {...state, isLoading: true, error: null}
        }

        case REGISTER_SUCCESS: {
            return {...state, isLoading: false, userInfo: action.payload.data, status: action.payload.status,}
        }  

        case REGISTER_FAILURE: {
            return {...state, isLoading: false, error: action.payload.error}
        }   
            
        default:
            return state;
    }
}
export default registerReducer;