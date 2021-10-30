import {
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
} from "../constants/updateUserAdmin.js";
const initialState = {
    updateUser: {},
    isLoading: false,
    error: null,
    status: "",
}

export default function updateUserReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER_REQUEST: {
            return {...state, isLoading: true, error: null};
        }
        case UPDATE_USER_SUCCESS: {
            return {...state, updateUser: action.payload.data, isLoading: false, status: action.payload.status};
        }
        case UPDATE_USER_FAILURE: {
            return {...state, isLoading: false, error: action.payload.error};
        }
        default:
            return state;
    }
}