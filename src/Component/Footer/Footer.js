import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div>
      {/* Footer */}

      <div class="container-fluid p-0 mt-5 bg-dark">
        <footer class="text-center text-lg-start text-white">
          <section class="d-flex justify-content-between p-4">
            <div class="me-5">
              <span>Check Us On Social Media:</span>
            </div>

            <div>
              <a href="/Contact" class="text-white me-4">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="/Contact" class="text-white me-4">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="/Contact" class="text-white me-4">
                <i class="bi bi-google"></i>
              </a>
              <a href="/Contact" class="text-white me-4">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="/Contact" class="text-white me-4">
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="/Contact" class="text-white me-4">
                <i class="bi bi-github"></i>
              </a>
            </div>
          </section>

          <section class="">
            <div class="container text-center text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold">Physics Of Master</h6>
                  <hr class="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    Learning is the source of human progress. It has the power
                    to transform our world from illness to health, from poverty
                    to prosperity, from conflict to peace.
                  </p>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold">Courses</h6>
                  <hr class="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <a href="#!" class="text-white">
                      Web Development
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white">
                      Artificial Inttelligent
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white">
                      Machine Learning
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white">
                      Game Development
                    </a>
                  </p>
                </div>

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold">Short links</h6>
                  <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    // style="width: 60px; background-color: #7c4dff; height: 2px"
                  />
                  <p>
                    <a href="#!" class="text-white">
                      Dashboard
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white">
                      Contact
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white">
                      Success
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white">
                      Forum & Help
                    </a>
                  </p>
                </div>

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 class="text-uppercase fw-bold">Contact</h6>
                  <hr class="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <i class="fas fa-home mr-3"></i> Noahkhali, Mars
                  </p>
                  <p>
                    <i class="fas fa-envelope mr-3"></i>{" "}
                    info@physics.of.master.com
                  </p>
                  <p>
                    <i class="fas fa-phone mr-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i class="fas fa-print mr-3"></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div class="text-center p-3">
            © 2021 Copyright:
            <a class="text-white" href="https://web.programming-hero.com">
              Programming Hero
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
