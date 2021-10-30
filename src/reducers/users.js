// Courses reducer
import { GET_USERS_REQUEST,GET_USERS_SUCCESS,GET_USERS_FAILURE } from "../constants/users";
import { DELETE_USER_FAILURE, DELETE_USER_SUCCESS, DELETE_USER_REQUEST } from "../constants/deleteUserAdmin";
const initialState = {
  users: [
        {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maLoaiNguoiDung: "",
            maNhom: "",
            email: "",
        }
  ],
  isLoading: false,
  error: null,
};

 function usersReducer(state = initialState, action) {
  switch (action.type) {
      case GET_USERS_REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case GET_USERS_SUCCESS: {
        return { ...state, users: action.payload.data, isLoading: false };
      }
      case GET_USERS_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }
      
      //DELETE
      case DELETE_USER_REQUEST: {
        return {...state, isLoading: true, error: null};
      }
      case DELETE_USER_SUCCESS: {
        const index = state.users.findIndex((user) => user.taiKhoan === action.payload.taiKhoan);
        if (index !== -1) {
            state.users.splice(index, 1)
        }
        return {...state};
      }
      case DELETE_USER_FAILURE: {
        return {...state, isLoading: false, error: action.payload.error }
      }

      default:
        return state;
  }
}
export default usersReducer;



