import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <>
      {/* About Us Page  */}
      <div class="container px-4 py-5" id="featured-3">
        <h2 class="pb-2 border-bottom">About Us</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="feature col">
            <div class="feature-icon p-2 me-1">
              <i class="fs-4 bi bi-house-door-fill"></i>
            </div>
            <h2>Interactive ClassRoom</h2>
            <p>
              The interactive classroom is an interactive and active learning
              environment. Equipped with a host of tools, students move around
              the classroom and interact with technological devices according to
              the learning tasks on which they are working.
            </p>
          </div>
          <div class="feature col">
            <div class="feature-icon p-2 me-1">
              <i class="fs-4 bi bi-question-square-fill"></i>
            </div>
            <h2>24 Hour Support</h2>
            <p>
              Education Support Services (ESS) is a collaborative team-based
              service offered to students, families, and districts. ESS is
              designed to help students reach their academic goals and achieve
              better success within their school and home environments.
            </p>
          </div>
          <div class="feature col">
            <div class="feature-icon p-2 me-1">
              <i class="fs-4 bi bi-person-lines-fill"></i>
            </div>
            <h2>Experienced Mentors</h2>
            <p>
              Mentorship is a relationship in which a more experienced or more
              knowledgeable person helps to guide a less experienced or less
              knowledgeable person. ... It is a learning and development
              partnership between someone with experience .
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0 pt-3">
        <img
          className="img-fluid "
          src="https://i.ibb.co/b6bx0V1/undraw-Selecting-team-re-ndkb.png"
          alt=""
        />
      </div>
    </>
  );
};

export default About;
