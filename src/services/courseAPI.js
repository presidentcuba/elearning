import axiosClient from "./axiosClient";

const courseAPI = {
  getCourse: () => {
    return axiosClient.get("/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=15DJ111");
  },

  getCourseByCategory: (category) => {
    const params = category;
    return axiosClient.get(`/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${params}`);
    // return axiosClient.get("/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=15DJ111");
    
  },
  
};

export default courseAPI;
