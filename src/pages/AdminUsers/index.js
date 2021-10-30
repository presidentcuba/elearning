import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import qs from "qs";
import * as yup from "yup";
import { useDispatch, useSelector} from "react-redux";
import { Input, FormGroup, Label, Alert } from "reactstrap";
import {addUserAdmin} from "src/actions/addUserAdmin";
import { Redirect, useLocation } from "react-router";
import { mockComponent } from "react-dom/cjs/react-dom-test-utils.production.min";

// Controlled Component: Control tất cả mọi thứ trên giao diện bằng state, props
// Uncontrolled Component: Control giao diện k thông qua state, props

// Cả useState lẫn useRef đều dùng để lưu trữ data
// Khác: khi state thay đổi component bị render lại, ref thay đổi component không bị render lại

// Tạo schame validation
const schema = yup.object().shape({
    hoTen: yup.string()
        .required("Họ tên không được để trống"),
    soDT: yup
        .string().required("Điện thoại không được để trống").matches(/^[0-9]+$/),
    taiKhoan: yup
        .string()
        .required("Tài khoản không được để trống"),
    matKhau: yup.string().required("Mật khẩu không được để trống"),
    email: yup.string().required("Email không được để trống")
});
// Khởi tại giá trị ban đầu

export default function AdminUsers() {
    const location = useLocation();
    const dispatch = useDispatch();
    const { status } = useSelector( state => state.addUser);
 
    const schema = yup.object().shape({
        taiKhoan: yup.string().required("User name can't be blank"),
        matKhau: yup.string().required("Password can't be blank"),
        hoTen: yup.string().required("Full name can't be blank"),
        soDT: yup.string().required("Phone number can't be blank"),
        maLoaiNguoiDung: yup.string().required("User type can't be blank"),
        maNhom: yup.string().required("Gruop id can't be blank"),
        email: yup.string().required("Email can't be blank").min(5, "Email from 5 to 20 characters").max(20, "Email < 20 characters"),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const handleAddUser = (data) => {
        console.log(data);
        dispatch(addUserAdmin(data));
    };

   const notice = (status) => {
      if (status) {
        return <p className="alert alert-success">{status}</p>
      }
   }
    

  
  return (
    <div className="admin-add-user">
      <form className="mg-auto c" onSubmit={handleSubmit(handleAddUser)}>
      <h5 className="text-center">ADD USER</h5>
      {notice(status)}
       {/* Tài Khoản */}
       <div className="form-group">
        <label>UserName*</label>
        <input type="text" className="form-control" {...register("taiKhoan")}/>

        {errors.taiKhoan && (
          <div className="alert alert-danger">{errors.taiKhoan.message}</div>
        )}
      </div>

       {/* Mật khẩu */}
       <div className="form-group">
        <label>Password*</label>
        <input type="password" className="form-control" {...register("matKhau")}/>
        {errors.matKhau && (
          <div className="alert alert-danger">{errors.matKhau.message}</div>
        )}
      </div>
      {/* Họ Tên */}
      <div className="form-group">
        <label>FullName*</label>
        <input
          type="text"
          className="form-control"
          {...register(
            "hoTen"
          )}
        />
        {errors.hoTen && (
          <div className="alert alert-danger">{errors.hoTen.message}</div>
        )}
      </div>

     

      {/* Số điện thoại */}
      <div className="form-group">
        <label>Phone*</label>
        <input
          type="text"
          className="form-control"
          {...register(
            "soDT"
          )}
        />
        {errors.soDT && (
          <div className="alert alert-danger">{errors.soDT.message}</div>
        )}
      </div>

     
      
        {/* Mã nhóm */}
      <div className="form-group">
          <label>Group*</label>
          <select className="form-control" {...register("maNhom")}>
              <option>GP09</option>
              <option>GP08</option>
              <option>GP07</option>
              <option>GP03</option>
          </select>
          {errors.maNhom && (
          <div className="alert alert-danger">{errors.maNhom.message}</div>
        )}
      </div>

      {/* ma loại người dùng */}
      <div className="form-group">
          <label>User Type*</label>
          <select className="form-control" {...register("maLoaiNguoiDung")}>
              <option>HV</option>
              <option>GV</option>
              
          </select>
          {errors.maLoaiNguoiDung && (
          <div className="alert alert-danger">{errors.maLoaiNguoiDung.message}</div>
        )}
      </div>
      {/* email */}
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          className="form-control"
          {...register(
            "email"
          )}
        />
        {errors.email && (
          <div className="alert alert-danger">{errors.email.message}</div>
        )}
      </div>
      <button className="btn btn-success">Submit</button>
    </form>
    </div>
  );
}
