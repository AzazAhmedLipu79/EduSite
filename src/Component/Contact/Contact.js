import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
const Contact = () => {
  return (
    // Contact Form
    <>
      <div class="container contact-form">
        <div class="contact-image">
          <img
            src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wbvkod4mhwryj9ce42vo"
            alt="Programming-Hero"
          />
        </div>
        <form method="post">
          <h3>Drop Us a Message</h3>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  name="txtName"
                  class="form-control"
                  placeholder="Your Name *"
                  value=""
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="txtEmail"
                  class="form-control"
                  placeholder="Your Email *"
                  value=""
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="txtPhone"
                  class="form-control"
                  placeholder="Your Phone Number *"
                  value=""
                />
              </div>
              <div class="form-group">
                <input
                  type="submit"
                  name="btnSubmit"
                  class="btnContact"
                  value="Send Message"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <textarea
                  name="txtMsg"
                  class="form-control"
                  placeholder="Your Message *"
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
