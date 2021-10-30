import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import qs from "qs";
import * as yup from "yup";
import { useDispatch, useSelector} from "react-redux";
import { register2 } from "src/actions/register"
import { Input, FormGroup, Label, Alert } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect, useLocation } from "react-router";

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
        .required("Tài khoản không được để trống")
        .min(5, "Tài khoản phải từ 5 đến 20 kí tự")
        .max(20, "Tài khoản phải từ 5 đến 20 kí tự"),
    matKhau: yup.string().required("Mật khẩu không được để trống"),
    email: yup.string().required("Email không được để trống")
});
// Khởi tạo giá trị ban đầu

export default function RegisterPage() {
  const dispatch = useDispatch();
  const { status } =  useSelector( (state) => state.register)
  const { register, formState: { errors }, handleSubmit, control,} = useForm({ resolver: yupResolver(schema),});

  // Xử lý nút submit và gưi thông tin lên server
  const handleRegister = async (values) => {
    dispatch(register2(values)); 
  };

  const notice = (status) => {
    if (status) {
      return  <div className="alert alert-success">{status}</div>
    }
  }
  
  return (
    <div className="form-signup">
      <form onSubmit={handleSubmit(handleRegister)}>
        <p>Sign Up and Start Learning!</p>

        {notice(status)}
        
        {/* Tài Khoản */}
        <div className="form-group">
          <i class="fas fa-user"></i>
          <input type="text" placeholder="Username" className="form-control" {...register("taiKhoan")}/>
          {errors.taiKhoan && (
            <div className="alert alert-danger">{errors.taiKhoan.message}</div>
          )}
        </div>

        {/* Mật khẩu */}
        <div className="form-group">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="Password" className="form-control" {...register("matKhau")}/>
          {errors.matKhau && (
            <div className="alert alert-danger">{errors.matKhau.message}</div>
          )}
        </div>
        {/* Họ Tên */}
        <div className="form-group">
          <i class="fas fa-user-tag"></i>
          <input type="text" className="form-control" placeholder="Fullname" {...register("hoTen")}/>
          {errors.hoTen && (
            <div className="alert alert-danger">{errors.hoTen.message}</div>
          )}
        </div>

        {/* Số điện thoại */}
        <div className="form-group">
          <i class="fas fa-mobile-alt"></i>
          <input type="text" className="form-control" placeholder="Phone Number" {...register("soDT")}/>
          {errors.soDT && (
            <div className="alert alert-danger">{errors.soDT.message}</div>
          )}
        </div>

        {/* email */}
        <div className="form-group">
          <i class="fas fa-envelope"></i>
          <input type="text" className="form-control" placeholder="Email" {...register("email")}/>
          {errors.email && (
            <div className="alert alert-danger">{errors.email.message}</div>
          )}
        </div>
        
          {/* Mã nhóm */}
          <div className="form-group">
            <i class="fas fa-layer-group"></i>
            <select className="form-control"  {...register("maNhom")}>
                <option>GP09</option>
            </select>
            {errors.maNhom && (
            <div className="alert alert-danger">{errors.maNhom.message}</div>
          )}
        </div>

        <button className="btn btn-danger btn-signup">Sign Up</button>
        <div className="foward-login">
          <div className="policy">
              By signing up, you agree to our
              <a href="#"> Terms of Use </a>
              and
                <a href="#"> Privacy Policy</a>
          </div>
          <span>Already have an account?</span>
          <Link to="/login"> Log In</Link>
        </div>
      </form>
    </div>
  );
}
