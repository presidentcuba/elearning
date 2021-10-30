import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import {Modal} from "reactstrap"
import  {getCourses } from 'src/actions/courses';
import {deleteCourseAdmin} from 'src/actions/deleteCourseAdmin';
import {updateCourseAdmin} from 'src/actions/updateCourseAdmin';
export default function AdminListCourse() {
    const dispatch = useDispatch();
    const { courses, status } = useSelector((state) => state.courses);
    const [searchTerm, setSearchTerm] = useState("");
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal)

    const [updateCourse, setUpdateCourse] = useState({
        maKhoaHoc: "",
        biDanh: "",
        tenKhoaHoc: "",
        moTa: "",
        luotXem: 0,
        danhGia: 0,
        hinhAnh: {},
        maNhom: "",
        ngayTao: moment("").format("DD/MM/YYYY"),
        maDanhMucKhoaHoc: "",
        taiKhoanNguoiTao: "",
    })

    const onChangeUpdate = (event) => {
        if(event.target.name === "hinhAnh") {
            setUpdateCourse({...updateCourse, hinhAnh: event.target.file[0]})
        } else if (event.target.name = "ngayTao") {
            setUpdateCourse({...updateCourse, [event.target.name]: moment(event.target.value).format("DD/MM/YY")});
        } else {
            setUpdateCourse({...updateCourse, [event.target.name]: event.target.value });
        }
    }
    useEffect(() => {
        dispatch(getCourses());
    },[])


    const handleChange = (event) => {
        const target = event.target.value;
        setSearchTerm(target);
    }
    const handleDeleteCourse = (id) => {
        if (window.confirm("Are you sure?")) {
            dispatch(deleteCourseAdmin(id));
        }
    }
   
    const handleEdit = (item) => {
        setModal(!modal);
        const newDataUpdate = {
            maKhoaHoc: item.maKhoaHoc,
            biDanh: item.biDanh,
            tenKhoaHoc: item.tenKhoaHoc,
            moTa: item.moTa,
            luotXem: 100,
            danhGia: 10,
            hinhAnh: updateCourse.hinhAnh,
            maNhom: item.maNhom,
            ngayTao: moment("").format("DD/MM/YYYY"),
            maDanhMucKhoaHoc: item.danhMucKhoaHoc.maDanhMucKhoahoc,
            taiKhoanNguoiTao: item.nguoiTao.taiKhoan,
        };
        setUpdateCourse(newDataUpdate);
        console.log(item);
    }

    const handleUpdateCourse = (event) => {
        event.preventDefault(); 
        const form_data = new FormData();
        for (let key in updateCourse) {
            form_data.append(key, updateCourse[key])
        }
        dispatch(updateCourseAdmin(form_data));
    }
    const searchCourse = courses.filter((val) => {
        if(searchTerm === "") {
            return val;
        } else if (val.tenKhoaHoc.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            return val;
        }
    })
    return (
        <div className="admin-data">
            <h3 className="admin-titler">COURSE MANAGE</h3>
            <div className="admin-content">
                <div className="table-header">
                    <form className="form-group"  action="">
                        <span>Search:</span>
                        <input onChange={handleChange} className="form-control"  type="text" />
                    </form>
                </div>
                <div className="table-body">
                    <table className="admin-table table-striped table-bordered">
                        <thead>
                            <tr className="text-center">
                                <td>ID</td>
                                <td>Image</td>
                                <td>Course Name</td>
                                <td>Option</td>
                            </tr>
                        </thead>
                        <tbody>
                            {searchCourse.map((item, key) => {
                                return (
                                    <tr key={key} className="text-center">
                                        <td data-label="Id" className="id">
                                            {key + 1}
                                        </td>
                                        <td data-label="Image">
                                                <img style={{width: 150, height:70}} src={item.hinhAnh} alt="" />
                                            </td>
                                        <td data-label="User Name">{item.tenKhoaHoc}</td>
                                        <td data-label="Handel">
                                            <button onClick={ () => handleEdit(item)}  className="btn btn-primary mr-2">
                                                <i class="far fa-edit"></i>
                                            </button>
                                            <button onClick={ () => handleDeleteCourse(item.maKhoaHoc)}  className="btn btn-danger">
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
        <Modal className="modal-admin-edit" isOpen={modal} toggle={toggle}>
                <h5 className="text-center">Update Course</h5>
            <form>
                <div className="form-group">
                    <label htmlFor="">Ma khoa hoc</label>
                    <input
                        type="text"
                        className="form-control"
                        name="maKhoaHoc"
                        value={updateCourse.maKhoaHoc}
                        onChange={onChangeUpdate}
                        placeholder="maKhoaHoc"
                        disabled
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">biDanh</label>
                    <input
                        type="text"
                        className="form-control"
                        name="biDanh"
                        value={updateCourse.biDanh}
                        onChange={onChangeUpdate}
                        placeholder="biDanh"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">tenKhoaHoc</label>
                    <input
                        type="text"
                        className="form-control"
                        name="tenKhoaHoc"
                        value={updateCourse.tenKhoaHoc}
                        onChange={onChangeUpdate}
                        placeholder="tenKhoaHoc"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">moTa</label>
                    <input
                        type="text"
                        className="form-control"
                        name="moTa"
                        value={updateCourse.moTa}
                        onChange={onChangeUpdate}
                        placeholder="moTa"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">luotXem</label>
                    <input type="number" className="form-control" name="luotXem" value={updateCourse.luotXem} onChange={onChangeUpdate} placeholder="luotXem" />
                </div>
                <div className="form-group">
                    <label htmlFor="">danhGia</label>
                    <input type="number" className="form-control" name="danhGia" value={updateCourse.danhGia} onChange={onChangeUpdate} placeholder="danhGia" />
                </div>
                <div className="form-group">
                    <label htmlFor="">hinhAnh</label>
                    <input type="file" className="form-control" name="hinhAnh" onChange={onChangeUpdate} placeholder="hinhAnh" />
                </div>
                <div className="form-group">
                    <label htmlFor="">maNhom</label>
                    <input
                        type="text"
                        className="form-control"
                        name="maNhom"
                        value={updateCourse.maNhom}
                        onChange={onChangeUpdate}
                        placeholder="maNhom"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">ngayTao</label>
                    <input type="date" className="form-control" value={updateCourse.ngayTao} name="ngayTao" onChange={onChangeUpdate} placeholder="ngayTao" />
                </div>
                <div className="form-group">
                    <label htmlFor="">maDanhMucKhoaHoc</label>
                    <input
                        type="text"
                        className="form-control"
                        name="maDanhMucKhoaHoc"
                        value={updateCourse.maDanhMucKhoaHoc}
                        onChange={onChangeUpdate}
                        placeholder="maDanhMucKhoaHoc"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">taiKhoanNguoiTao</label>
                    <input
                        type="text"
                        className="form-control"
                        name="taiKhoanNguoiTao"
                        value={updateCourse.taiKhoanNguoiTao}
                        onChange={onChangeUpdate}
                        placeholder="taiKhoanNguoiTao"
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleUpdateCourse}>
                    Submit
                </button>
                <button type="button"  onClick={toggle} className="btn btn-danger">
                    Close
                </button>
                </form>
        </Modal>
       
        </div>
    );
}
