import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { getUsersByCategory } from 'src/actions/users';
import { deleteUserAdmin } from 'src/actions/deleteUserAdmin';
import { updateUserAdmin } from 'src/actions/updateUserAdmin';
import {Button, Modal} from "reactstrap"
export default function AdminListUser() {
    const { category } = useParams();
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.users);
    const { status } = useSelector((state) => state.updateUser);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [newSelectData, setNewSelectData] = useState({
        taiKhoan: "",
        hoTen: "",
        email: "",
        soDt: "",
        matKhau: "",
        maLoaiNguoiDung: "",
        maNhom: "GP09",
    });
    const [searchTerm, setSearchTerm] = useState("");

 console.log(status);


    useEffect((category) => {
        dispatch(getUsersByCategory(category));
       
    }, [category]);

    const handleEdit = (user) => {
        setModal(!modal);
        console.log(modal);
        const newValueEdit = {
            taiKhoan: user.taiKhoan,
            hoTen: user.hoTen,
            email: user.email,
            soDt: user.soDt,
            matKhau: "",
            maLoaiNguoiDung: user.maLoaiNguoiDung,
            maNhom: "GP09",
        }
        setNewSelectData(newValueEdit);
    }
    const onChange = (event) => {
        const target = event.target.value;
        setSearchTerm(target);
    }
    const searchData = users.filter((value) => {
        if(searchTerm === "") {
            return value;
        }
        else if (value.taiKhoan.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            return value;
        }
    })
    console.log(searchData);
    const handleChange = (event) => {
        const newData = {...newSelectData};
        newData[event.target.name] = event.target.value;
        setNewSelectData(newData);
    }
    const handleDelete = (values) => {
        if (window.confirm("Are you sure?")) {
            dispatch(deleteUserAdmin(values));
            
        }
    }
    const handleUpdate = () => {
        dispatch(updateUserAdmin(newSelectData));
    }
    return (
        <div className="admin-listsuser admin-data">
            <h3 className="admin-title py-3">USER MANAGE</h3>
        <div className="admin-content">
            <div className="table-header">
                <form className="form-group"  action="">
                    <span>Search:</span>
                    <input className="form-control" onChange = {onChange} type="text" />
                </form>
            </div>
            <div className="table-body">
                <table className="admin-table table-striped table-bordered">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>User Name</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone Number</td>
                            <td>User Type</td>
                            <td>Handle</td>
                        </tr>
                    </thead>
                    <tbody>
                        {searchData.map((item, key) => {
                            return (
                                <tr key={key}>
                                    <td data-label="Id" className="id">
                                        {key + 1}
                                    </td>
                                    <td data-label="User Name">{item.taiKhoan}</td>
                                    <td data-label="User Name">{item.hoTen}</td>
                                    <td data-label="Email">{item.email}</td>
                                    <td data-label="Phone Number">{item.soDt}</td>
                                    <td data-label="User Type">{item.maLoaiNguoiDung}</td>
                                    <td data-label="Handel">
                                        <button onClick={toggle} onClick={ ()=> handleEdit(item)} className="btn btn-primary mr-2">
                                            <i class="far fa-edit"></i>
                                        </button>
                                        <button onClick={ () => handleDelete(item.taiKhoan)} className="btn btn-danger">
                                            <i class="far fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {/* <div className="table-footer">
                <div className="table-footer__content">
                    <button className={`btn-pagenation ${pagenation === 1 ? "active" : ""}`} onClick={() => setPagenation(1)}>
                        1
                    </button>
                    <button className={`btn-pagenation ${pagenation === 2 ? "active" : ""}`} onClick={() => setPagenation(2)}>
                        2
                    </button>
                    <button className={`btn-pagenation ${pagenation === 3 ? "active" : ""}`} onClick={() => setPagenation(3)}>
                        3
                    </button>
                    <button className={`btn-pagenation ${pagenation === 4 ? "active" : ""}`} onClick={() => setPagenation(4)}>
                        4
                    </button>
                </div>
            </div> */}
        </div>
        <Modal className="admin-edit-user" isOpen={modal} toggle={toggle}>
                <div className="form-group d-flex justify-content-between">
                    <h5 className="w-100 text-center">Update User</h5>
                    <span style={{ fontSize: "12px", color: "green" }}>{status}</span>
                </div>
            <form className="px-3" onSubmit={ () => handleUpdate()}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">User Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="User Name"
                        name="taiKhoan"
                        value={newSelectData.taiKhoan}
                        onChange={handleChange}
                        disabled
                    />
                    <small id="emailHelp" className="form-text" style={{ color: "red" }}></small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="matKhau"
                        value={newSelectData.matKhau}
                        onChange={handleChange}
                    />
                    <small id="emailHelp" className="form-text" style={{ color: "red" }}></small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        name="hoTen"
                        value={newSelectData.hoTen}
                        onChange={handleChange}
                    />
                    <small id="emailHelp" className="form-text" style={{ color: "red" }}></small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        name="soDt"
                        value={newSelectData.soDt}
                        onChange={handleChange}
                    />
                    <small id="emailHelp" className="form-text" style={{ color: "red" }}></small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">User Type</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="User Type"
                        name="maLoaiNguoiDung"
                        value={newSelectData.maLoaiNguoiDung}
                        onChange={handleChange}
                    />
                    <small id="emailHelp" className="form-text" style={{ color: "red" }}></small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Group Id</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Group Id"
                        value="GP09"
                        name="maNhom"
                        value={newSelectData.maNhom}
                        onChange={handleChange}
                        disabled
                        
                    />
                    <small id="emailHelp" className="form-text" style={{ color: "red" }}></small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        // placeholder={newSelectData.email}
                        name="email"
                        value={newSelectData.email}
                        onChange={handleChange}
                    />
                    <small id="emailHelp" className="form-text" style={{ color: "red" }}></small>
                </div>
                <button type="submit" className="btn btn-primary mb-3">
                    Submit
                </button>
                <button onClick={toggle} type="button" className="btn btn-danger mb-3" >
                    Cancel
                </button>
            </form>
        </Modal>
       
    </div>
    );
}
