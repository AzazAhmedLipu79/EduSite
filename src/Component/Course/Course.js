import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleCourse from "../SingleCourse/SingleCourse";
import { NavLink } from "react-router-dom";

const Course = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./course-hero.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="container-fluid ">
      <div class="row">
        {/* Course Area  */}
        <div className="container-fluid row">
          <h2 className="py-4 fw-bold text-danger">Fetured Courses :</h2>
          {courses.slice(0, 4).map((course) => (
            <SingleCourse key={course.key} course={course}></SingleCourse>
          ))}
        </div>
        <button className="bg-danger p-2">
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
            className="child-nav"
            to="/Service"
          >
            View All Service
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Course;
