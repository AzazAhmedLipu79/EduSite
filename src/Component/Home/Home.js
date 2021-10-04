import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import Hero from "../Hero/Hero";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Service from "../Serve/Service";
import Contact from "../Contact/Contact";
import Course from "../Course/Course";

const Home = () => {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Hero></Hero>
            <h2>THis is Course</h2>
            <Course></Course>
          </Route>

          <Route exact path="/Service">
            <Service></Service>
          </Route>
          <Route exact path="/Contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
