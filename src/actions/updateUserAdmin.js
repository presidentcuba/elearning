
import {
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
} from "../constants/updateUserAdmin.js";
import usersAPI from "../services/usersAPI.js";


export function updateUserAdmin(values) {
    return async (dispatch) => {
        dispatch({ type: UPDATE_USER_REQUEST });
        try {

            const status = "Update user success!!";
            const {data} = await usersAPI.updateUsers(values);
            dispatch({ type: UPDATE_USER_SUCCESS, payload: {data, status}});

        } catch (error) {
            dispatch({
                type: UPDATE_USER_FAILURE,
                payload: {error: error.response.data},
            })
        }
    }
}