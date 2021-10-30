import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {Redirect, useLocation} from "react-router";
export default function AdminLayout({ children }) {
  const { userInfo } = useSelector((state) => state.auth);
  const abc = localStorage.getItem("userInfo");
  console.log(abc);

  return (
    <div className="menu-admin d-flex">
      {/* Sidebar */}
      <div className="menu-admin__left">
        <div className="admin-logo">
          <Link to="/">
            <h5> <span> <i class="fas fa-user-shield"></i></span> ADMIN</h5>
          </Link>
          <Link to="/">
            <p> <span><i class="fas fa-book-open"></i></span> E-learning</p>
          </Link>
          <form>
            <div className="form-group">
              <input className="form-control" placeholder="Search" type="text"></input>
            </div>
          </form>
        </div>
        <div className="menu-admin__list">
          <ul className="menu-admin__sub">
            <li><Link to="/admin/courses"><i class="far fa-list-alt"></i> <span>Courses Manage</span> </Link></li>
            <li><Link to="/admin/addcourse"><i class="far fa-address-book"></i> Add Course</Link></li>
            <li><Link to="/admin/users"><i class="fas fa-users"></i> Users Manage</Link></li>
            <li><Link to="/admin/adduser"><i class="fas fa-user-plus"></i> Add Users</Link></li>
          </ul>
        </div>
      </div>
      {/* Content */}
      <div className="menu-admin__right">
        <div className="menu-admin__right-header">
          {/* <p>{userInfo.taiKhoan}</p> */}
        </div>

        <div className="menu-admin__right-content">
          {children}
        </div>

      </div>
    </div>
  );
}
