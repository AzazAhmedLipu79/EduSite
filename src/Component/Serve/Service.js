import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleCourse from "../SingleCourse/SingleCourse";
// Service or All Courses Page
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
          <h2 className="py-4 fw-bold">See Our All Courses :</h2>
          {courses.map((course) => (
            <SingleCourse key={course.key} course={course}></SingleCourse>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
