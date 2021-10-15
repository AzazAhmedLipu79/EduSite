import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import Hero from "../Hero/Hero";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Service from "../Serve/Service";
import Contact from "../Contact/Contact";

import About from "../About/About";
import Detail from "../Details/Detail";
import Login from "../Login/Login";
import AuthProvider from "../../Context/AuthProvider";

const Home = () => {
  // Home Page
  return (
    <>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Hero></Hero>
            </Route>
            <Route exact path="/Home">
              <Hero></Hero>
            </Route>

            <Route exact path="/Service">
              <Service></Service>
            </Route>
            <Router path="/Course/:key">
              <Detail></Detail>
            </Router>
            <Route exact path="/About">
              <About></About>
            </Route>
            <Route exact path="/Login">
              <Login></Login>
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
      </AuthProvider>
    </>
  );
};

export default Home;
