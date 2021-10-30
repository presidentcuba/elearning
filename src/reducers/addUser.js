// Courses reducer
import { ADD_USERS_SUCCESS, ADD_USERS_REQUEST, ADD_USERS_FAILURE } from "../constants/addUserAdmin";
 
const initialState = {
  addUserData: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maLoaiNguoiDung: "",
      maNhom: "",
      email: "",
  },
  isLoading: false,
  error: null,
  status: "",
};
export default function AddUser(state = initialState, action) {
  switch (action.type) {
      case ADD_USERS_REQUEST: {
          return { ...state, isLoading: true, error: null };
      }
      case ADD_USERS_SUCCESS: {
          return {
              ...state,
              isLoading: false,
              addUserData: action.payload.data,
              status: action.payload.status,
          };
      }
      case ADD_USERS_FAILURE: {
          return { ...state, isLoading: false, error: action.payload.error };
      }
      default:
          return state;
  }
}
