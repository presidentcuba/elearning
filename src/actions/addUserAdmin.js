import { ADD_USERS_REQUEST,ADD_USERS_SUCCESS,ADD_USERS_FAILURE,} from "../constants/addUserAdmin";
  
import usersAPI from "../services/usersAPI";

  export function addUserAdmin(values) {
    return async (dispatch) => {
      dispatch({ type: ADD_USERS_REQUEST });
      try {
          const status = "Add User Success!";
          const { data } = await usersAPI.addUsers(values);

          dispatch({ type: ADD_USERS_SUCCESS, payload: { data, status } });
      } catch (error) {
          dispatch({
              type: ADD_USERS_FAILURE,
              payload: { error: error.response.data },
          });
      }
  };
  }
  