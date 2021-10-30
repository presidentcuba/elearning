import axios from "axios";
import qs from "qs";

const axiosClient = axios.create({
  baseURL: "https://elearning0706.cybersoft.edu.vn/api",
  // Tự cấu hình cách lấy params mặc định của axios
  // Bỏ qua giá trị null và undefined trong params
  paramsSerializer: (params) => qs.stringify(params, { skipNulls: true }),
});
axiosClient.interceptors.request.use(
  (config) => {
    // Xử lý trước khi request được gửi lên server
    // Thêm Authorization vaò header
    const userInfo = localStorage.getItem("userInfo");
   

    if (userInfo) {
      const {accessToken} = JSON.parse(userInfo);
      config.headers.Authorization = `Bearer ${accessToken}`;
      // Bearer
    }
    return config;
  },
  (error) => {
    // Xử lý khi request bị lỗi
    return Promise.reject(error);
  }
  )

axiosClient.interceptors.response.use(
  (response) => {
    // xử lý kết quả trả về từ server
    return response;
  },
   (error) => {
    // xử lý nêu kết quả bị lỗi
    if (error.response.status === 401) {
      // xử lý logout: clear localstorage, đẩy người dùng về trang login
    }
    if (error.response.status === 500) {
      // Xử lý thông báo cho người dùng là server đang bị lỗi
      
    }
    if (error.status === 400) {
    
      // Xử lý thông báo cho người dùng là server đang bị lỗi
      
    }
    return Promise.reject(error);
  }
)
export default axiosClient;
