import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input, FormGroup, Label, Alert } from "reactstrap";
import { useDispatch, useSelector} from "react-redux";
import {login} from "src/actions/auth";
import { Redirect, useLocation } from "react-router";
import {Link} from "react-router-dom";
import qs from "qs";

// Controlled Component: Control tất cả mọi thứ trên giao diện bằng state, props
// Uncontrolled Component: Control giao diện k thông qua state, props

// Cả useState lẫn useRef đều dùng để lưu trữ data
// Khác: khi state thay đổi component bị render lại, ref thay đổi component không bị render lại

// Tạo schame validation
const schema = yup.object().shape({
  taiKhoan: yup
    .string()
    .required("Tài khoản không được để trống")
    .min(5, "Tài khoản phải từ 5 đến 20 kí tự")
    .max(20, "Tài khoản phải từ 5 đến 20 kí tự"),
  matKhau: yup.string().required("Mật khẩu không được để trống"),
});

export default function LoginPage() {
  // const inpTaiKhoan = useRef();
  // const inpMatKhau = useRef();
  const dispatch = useDispatch();

  const { userInfo, isLoading, error} = useSelector( (state) => state.auth );
  const location = useLocation();

  // sử dụng khi UI component không hỗ register 
  const { register, formState: { errors }, handleSubmit, control, } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (values) => {
    // console.log(inpTaiKhoan.current.value);
    // console.log(inpMatKhau.current.value);
    dispatch(login(values));
  };

  // NẾu userInfo có data => chuyển trang về home
  if (userInfo) {

    const { redirectTo } = qs.parse(location.search, {ignoreQueryPrefix: true, });
    console.log(redirectTo)

    if (redirectTo) {
       return <Redirect to={redirectTo} />;
    }
    return <Redirect to="/admin" />;    
  }

  return (
    <div className="form-login">
      <form onSubmit={handleSubmit(handleLogin)}>
        <p>Log In To Your Account!</p>
        <div className="login__facebook">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
              <span> Continue with Facebook</span>
            </a>
        </div>
        <div className="login__google">
          <a href="#">
            <i class="fab fa-google"></i>
            <span> Continue with Google</span>
          </a>
        </div>
        <div className="login__Apple">
          <a href="#">
            <i class="fab fa-apple"></i>
            <span> Continue with Apple</span>
          </a>
        </div>
        {error ? <div className="alert alert-danger">{error}</div> : ""}
        <div className="form-group form-group__email">
          <input type="text" className="form-control" placeholder="E-mail" {...register("taiKhoan")}/>
          
          {errors.taiKhoan && (
            <div className="alert alert-danger">{errors.taiKhoan.message}</div>
          )}
        </div>
          <div className="form-group">
          <input type="password" className="form-control" placeholder="Password" {...register("matKhau")}/>

          {errors.matKhau && (
            <div className="alert alert-danger">{errors.matKhau.message}</div>
          )}
        </div>
        <button className="btn btn-danger btn-login">Log In</button>
        <div className="forgot__password text-center">
         
          <span>or</span>
          <a href="#"> Forgot your password.</a>
          <div>
            <span>You do not have an account?</span>
            <Link to="/register"> Sign up</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
