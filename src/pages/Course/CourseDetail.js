import React from 'react'

export default function CourseDetail({ course }) {
    return (
       
        <div className="course__detail-top-content">
            <h1 className="title">{course.tenKhoaHoc}</h1>
            <p className="description">{course.moTa}</p>
            <div className="course__detail-star">
                <div className="star">
                    <span>4.5</span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <span className="number">({course.luotXem} ratings)</span>
                <span className="participant">8,642 participants</span>
            </div>
            <div className="create">
                <span>Created by</span>
                <a href=""> Jhonson</a>
            </div>
            <div className="update">
                <span><i class="fal fa-exclamation-circle"></i> Last updated: </span>
                <span>{course.ngayTao}</span>
            </div>
            <div className="shared">
                <a className="wishlist" href="">Wishlist <i class="fal fa-heart"></i></a>
                <a className="share" href="">To share <i class="fas fa-share"></i></a>
                <a className="gift" href="">Gift this course</a>
            </div>
        </div>
    )
}
