import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../Context/UseAuth";
import InitializeAuth from "../../Firebase/firebaseinit";

InitializeAuth();
const Header = () => {
  const { user } = UseAuth();
  return (
    <>
      {/* navbar  */}
      <div className=" contaner-fluid p-0">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wbvkod4mhwryj9ce42vo"
                width="50px"
                alt=""
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto ms-3 navbar">
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                  className="child-nav"
                  to="/Home"
                >
                  Home
                </NavLink>
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                  className="child-nav"
                  to="/Service"
                >
                  Service
                </NavLink>
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                  className="child-nav"
                  to="/About"
                >
                  About
                </NavLink>
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                  className="child-nav"
                  to="/Contact"
                >
                  Contact
                </NavLink>

                {user?.email ? (
                  <button type="button" class="btn btn-secondary">
                    Logout
                  </button>
                ) : (
                  <NavLink
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                    className="child-nav"
                    to="/Login"
                  >
                    Login
                  </NavLink>
                )}
              </Nav>

              <Form className="py-1">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mx-3"
                  aria-label="Search"
                />
              </Form>
              <ul class=" ms-4 nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <Link to="/User" className="nav-link text-secondary">
                    {/* <img
                      src="/favicon.ico"
                      className="bi d-block mx-auto mb-1"
                      width="24"
                      height="24"
                    /> */}
                    {user?.displayName}
                  </Link>
                </li>
              </ul>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
