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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRys-w8oSSDaKRqKm6JDaH7IbwIyNLRqKK2Pg&usqp=CAU"
                class="img-fluid"
                alt="Web Development"
              />
            </div>
            <div class="col-lg-6">
              <h1 class="mt-3">Web Designing & Development</h1>
              <p class="lead text-secondary my-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                Point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters.
              </p>
              <a
                href="https://d.com"
                class="btn btn-outline-secondary btn-lg border"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
