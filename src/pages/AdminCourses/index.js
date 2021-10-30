import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { addCourseAdmin } from "src/actions/addCourseAdmin"


export default function AdminAddCourse() {
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.auth)


    const [newCourse, setNewCourse] = useState({
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
        taiKhoanNguoiTao: userInfo.taiKhoan,
    });
    // tạo validation
    const schema = yup.object().shape({
        maKhoaHoc: yup.string().required("Mã khóa học không được để trống"),
        biDanh: yup.string().required("Bí danh không được để trống"),
        tenKhoaHoc: yup.string().required("Tên khóa học không được để trống"), 
    })
    const { formState: {errors},} = useForm({ resolver: yupResolver(schema)});

    // const handleChangeAddNewCourse = (event) => {
    //     const target = event.target;
    //     if (target.name === "hinhAnh") {
    //         this.setState({ hinhAnh: event.target.file[0]}, () => {
    //             console.log(this.state);
    //         })
    //     } else if (target.name === "ngayTao") {
    //         this.setState({
    //             ngayTao: moment(event.target.value).format("DD/MM/YYYY"),
    //         });
    //     } else {
    //         this.setState({[event.target.name]: event.target.value});
    //     }
    // };
    const handleChangeAddNewCourse = (e) => {
        
        
        if (e.target.name === "hinhAnh") {
            const hinhAnh1 = e.target.value;
            const vitri = hinhAnh1.length;
            const hinhAnh2 = hinhAnh1.substring(12,vitri);
            console.log(hinhAnh2);
            setNewCourse({ ...newCourse, hinhAnh: hinhAnh2 });
        } else if (e.target.name === "ngayTao") {
            setNewCourse({
                ...newCourse,
                [e.target.name]: moment(e.target.value).format("DD/MM/YYYY"),
            });
        } else {
            setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
        }
    };
    const handleAddCourse = (values) => {
        console.log(values);
        const form_data = new FormData();
        for (let key in newCourse) {
            // console.log(key, newCourse[key]);
            form_data.append(key, newCourse[key]);
        }
        dispatch(addCourseAdmin(form_data));
    }
    return (
        <div className="admin-addcourse">
            <h5 className="text-center">Add Course</h5>
             <form className="form-addcourse">
                 <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <div className="form-group">
                        <label htmlFor="">maKhoaHoc*</label>
                        <input type="text" className="form-control" name="maKhoaHoc" onChange={handleChangeAddNewCourse}/>
                    </div>
                        </div>
                        <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="">biDanh*</label>
                            <input type="text" className="form-control" name="biDanh" onChange={handleChangeAddNewCourse}/>
                        </div>
                    </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="">tenKhoaHoc*</label>
                                <input type="text" className="form-control" name="tenKhoaHoc" onChange={handleChangeAddNewCourse} />
                            </div>
                        </div>   
                        <div className="col-6">
                            <div className="form-group">
                                    <label htmlFor="">maNhom*</label>
                                    <input type="text" className="form-control" name="maNhom" onChange={handleChangeAddNewCourse}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="">moTa*</label>
                                <textarea type="text" className="form-control" name="moTa" onChange={handleChangeAddNewCourse} />
                            </div>
                        </div>   
                    </div>
               
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="">luotXem*</label>
                                <input type="number" className="form-control" name="luotXem" onChange={handleChangeAddNewCourse}/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="">danhGia*</label>
                                <input type="number" className="form-control" name="danhGia" onChange={handleChangeAddNewCourse}/>
                            </div>
                        </div>
                    </div>
                
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="">hinhAnh*</label>
                                <input type="file" className="form-control" name="hinhAnh" onChange={handleChangeAddNewCourse}/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="">ngayTao*</label>
                                <input type="date" className="form-control" name="ngayTao" onChange={handleChangeAddNewCourse} />
                            </div>
                        </div>
                    </div>
                
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="">maDanhMucKhoaHoc*</label>
                                <select
                                    type="text"
                                    className="form-control"
                                    name="maDanhMucKhoaHoc"
                                    onChange={handleChangeAddNewCourse}
                                >
                                    <option>TuDuy</option>
                                    <option>BackEnd</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="">taiKhoanNguoiTao</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="taiKhoanNguoiTao"
                                    disabled
                                    value={newCourse.taiKhoanNguoiTao}
                                    onChange={handleChangeAddNewCourse}
                                />
                            </div>
                        </div>
                    </div>

                    <button type="button" className="btn btn-primary" onClick={handleAddCourse}>
                        Add
                    </button>
                 </div>
            </form>
        </div>
    )
}
