import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="container-fluid p-0">
      {/* Hero Section  */}
      <div class="hero-banner py-5">
        <div class="container">
          <div class="row row align-items-center">
            <div class="col-lg-5 offset-lg-1 order-lg-1">
              <img
                src="https://i.ibb.co/Y07jPRC/undraw-Online-learning-re-qw08.png"
                class="img-fluid"
                alt="Web Development"
              />
            </div>
            <div class="col-lg-6">
              <h1 class="mt-3 fw-bold">Web Designing & Development</h1>
              <p class="lead text-secondary my-5">
                Learning is the source of human progress. It has the power to
                transform our world from illness to health, from poverty to
                prosperity, from conflict to peace. So Never Stop Learning and
                Start discovering new things.
              </p>
              <a
                href="/Service"
                class="btn btn-outline-secondary btn-lg border me-4"
              >
                Explore Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
