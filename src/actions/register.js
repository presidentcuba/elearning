import {REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE} from "../constants/register"
import authAPI  from "../services/authAPI"

export function register2(values) {
    return async (dispatch) => {
        dispatch({ type: REGISTER_REQUEST });
        try {
            const  status  = "You've successfully registered!";
            const { data } = await authAPI.register1(values);
            dispatch({ type: REGISTER_SUCCESS, payload: {data, status}})
        } catch (error) {
            dispatch({
                type: REGISTER_FAILURE, payload: { error: error.response.data}
            });
        }
    }
}