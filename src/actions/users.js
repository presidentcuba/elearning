import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
  } from "../constants/users";
  
  import usersAPI from "../services/usersAPI";
  
  export function getUsersByCategory(category) {
    return async (dispatch) => {
      dispatch({ type: GET_USERS_REQUEST });
  
      try {
        const { data } = await usersAPI.getUsersByCategory(category);
  
        dispatch({ type: GET_USERS_SUCCESS, payload: { data } });
      } catch (error) {
        dispatch({
          type: GET_USERS_FAILURE,
          payload: { error: error.response.data },
        });
      }
    };
  }

  