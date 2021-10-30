import { combineReducers } from "redux";
import courses  from "./courses";
import listCourse  from "./courses";
import coursesCategory  from "./coursesCategory";
import auth from "./auth";
import users from "./users";
import addUser from "./addUser";
import courseDetail from "./course";
import register from "./register";
import updateUser from "./updateUserAdmin"
import addCourse from "./addCourse";
import cart from "./cart";
import searchCourse from "./searchCourse";
const rootReducer = combineReducers({
  // Nơi khai báo các reducer con
  users,
  courses,
  courseDetail,
  auth,
  register,
  addUser,
  updateUser,
  addCourse,
  cart,
  searchCourse,
  listCourse,
  coursesCategory,
});

export default rootReducer;
