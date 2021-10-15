import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SingleCourse.css";
import { Link } from "react-router-dom";
// Fetured Courses
const SingleCourse = (props) => {
  const {
    img,
    key,
    name,
    category,
    price,
    discription,
    instructor,
    instructorpic,
    review,
  } = props.course;

  return (
    // Implement in Card
    <div className=" col-lg-4 col-md-6 py-2 d-flex align-items-stretch">
      <div className="course-item border border-1 p-1 m-1">
        <img src={img} className="img-fluid rounded" alt="..." />
        <div className="course-content">
          <div className="d-flex p-1  justify-content-between align-items-center mb-3">
            <p className="bg-warning text-white p-1 rounded">{category}</p>

            <p className="pe-2 fw-bold fs-5">$ {price}</p>
          </div>

          <div className="mb-1">
            <h5>{name.slice(0, 36)}...</h5>
            <small className="text-left">{discription.slice(0, 60)}...</small>
          </div>
          <div className="trainer d-flex justify-content-between align-items-center">
            <div className="trainer-profile d-flex align-items-center py-1 pe-2">
              <img
                src={instructorpic}
                className="img-fluid rounded-circle instructor-pic me-1 "
                alt=""
              />
              <span>{instructor}</span>
            </div>
            <div className="trainer-rank d-flex align-items-center fs-5 pe-2">
              <i class="bi bi-person-check"></i>&nbsp;{review} &nbsp;&nbsp;
              <i class="bi bi-heart-fill text-danger"></i>
              &nbsp; {review + 16}
            </div>
          </div>
        </div>
        <Link to={`/Course/${key}`}>
          <button class="mt-2 btn btn-danger rounded" type="button">
            Enroll {category} Course
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleCourse;
