// Courses reducer
import { GET_COURSES_REQUEST,GET_COURSES_SUCCESS,GET_COURSES_FAILURE } from "../constants/courses";
import { DELETE_COURSE_REQUEST, DELETE_COURSE_SUCCESS, DELETE_COURSE_FAILURE } from "../constants/deleteCourseAdmin";
import { UPDATE_COURSE_REQUEST,UPDATE_COURSE_SUCCESS,UPDATE_COURSE_FAILURE } from "../constants/updateCourseAdmin";
import { GET_LIST_REQUEST, GET_LIST_SUCCESS, GET_LIST_FAILURE } from "../constants/courses";


const initialState = {
  courses: [],
  updateCourseData: {},
  listCourse: [],
  isLoading: false,
  error: null,
  status:"",
};

function coursesReducer(state = initialState, action) {
  switch (action.type) {
    //COURSE
    case GET_COURSES_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case GET_COURSES_SUCCESS: {
      return { ...state, courses: action.payload.data, isLoading: false };
    }
    case GET_COURSES_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    // LISTCOURSE
    case GET_LIST_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case GET_LIST_SUCCESS: {
      return { ...state, listCourse: action.payload.data, isLoading: false };
    }
    case GET_LIST_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }

    //DELETECOURSE
    case DELETE_COURSE_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case DELETE_COURSE_SUCCESS: {

        const index = state.courses.findIndex((course) => course.maKhoaHoc === action.payload.id);
        if (index !== -1) {
            state.courses.splice(index, 1);
        }
        return { ...state };
        
    }
    case DELETE_COURSE_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    //UPDATECOURSE
    case UPDATE_COURSE_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case UPDATE_COURSE_SUCCESS: {
        return { ...state, updateCourseData: action.payload.data, isLoading: false, status: action.payload.status };
    }
    case UPDATE_COURSE_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}

export default coursesReducer;
