import React, { useEffect, useState } from "react";

const Course = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/public/course-hero.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h2>THis is COurse</h2>
    </div>
  );
};

export default Course;
