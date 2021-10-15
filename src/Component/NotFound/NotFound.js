import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  // 404 Page
  return (
    <div className="container-fluid p-0 eror-page">
      <h2>Error</h2>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
