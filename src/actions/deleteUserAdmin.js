import { DELETE_USER_FAILURE, DELETE_USER_SUCCESS, DELETE_USER_REQUEST } from "../constants/deleteUserAdmin";

import usersAPI from "../services/usersAPI";

export function deleteUserAdmin(taiKhoan) {
    return async (dispatch) => {
        dispatch({ type: DELETE_USER_REQUEST });
        try {
            const { data } = await usersAPI.deleteUsers(taiKhoan);
            dispatch({ type: DELETE_USER_SUCCESS, payload: {taiKhoan}});
        } catch (error) {
            dispatch({ type: DELETE_USER_FAILURE, payload: { error: error.response.data}});
        }
    }
}
