import axiosClient from "./axiosClient";

const usersAPI = {
    // Lấy user mã nhóm GP09
    getUsers: () => {
        return axiosClient.get("/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09");
       
       
    },

    getUsersByCategory: (category) => {
        const params = { 
          maDanhMuc: category,
          maNhom: "GP09",
        };
    
        return axiosClient.get("/QuanLyNguoiDung/TimKiemNguoiDung", { params });
    },

    // Xóa user
    deleteUsers: (taiKhoan) => {
     
      return axiosClient.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);

    },

    // Thêm user
    addUsers: (values) => {
      return axiosClient.post("/QuanLyNguoiDung/ThemNguoiDung", values);
    },

    // Cập nhật thông tin người dùng
    updateUsers: (values) => {
      return axiosClient.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", values);
    },
    
    //Lấy user
    getUser: (taiKhoan) => {
      // return axiosClient.post("/QuanLyNguoiDung/ThongTinNguoiDung", userId);
      
      return axiosClient.get(`/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP09&tuKhoa=${taiKhoan}`);
      // http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom={MaNhom}&tuKhoa={tenNguoiDung}

    },

    
}

export default usersAPI;