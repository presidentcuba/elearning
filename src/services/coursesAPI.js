import axiosClient from "./axiosClient";

const coursesAPI = {
  getCourses: () => {
    return axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc?maNhom=GP09");
  },
  getCourses1: () => {
    // return axiosClient.get(`/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${category}`);
    return axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc?maNhom=GP09");
  },
  getCoursesByCategory: (category) => {
    const params = {
      maDanhMuc: category,
      maNhom: "GP09",
    };
    // return axiosClient.get(`/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${category}&MaNhom=GP09`);
    return axiosClient.get("/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc", { params });
  },
  searchCourse: (name) => {
    const params = { tenKhoaHoc: name, MaNhom: "GP09" };
    return axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc", { params });
  },
  addCourses: (values) => {
    return axiosClient.post("/QuanLyKhoaHoc/ThemKhoaHocUploadHinh", values);
  },
  
  updateCourse: (values) => {
    return axiosClient.post("/QuanLyKhoaHoc/CapNhatKhoaHocUpload", values);
  },
  // Lấy danh mục khóa học
  getListCourse: () => {
    return axiosClient.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
  },
  // Upload hình ảnh khóa học
  addHinhAnh: () => {
    return axiosClient.post("/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc")
  },
  // Xóa
  deleteCourse: (maKhoaHoc) => {
    return axiosClient.delete(`/QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=${maKhoaHoc}`);
  },
  //Lấy khóa học được chọn
  getCourse: (taiKhoan) => {

    return axiosClient.get(`/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${taiKhoan}`);
    // http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom={MaNhom}&tuKhoa={tenNguoiDung}

  },
};

export default coursesAPI;


