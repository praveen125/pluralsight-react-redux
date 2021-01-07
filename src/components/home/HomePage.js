import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>PLURALSIGHT ADMINISTRATION</h1>
    <br />
    <p>
      {" "}
      The <strong>React, Redux and React Router</strong> for ultra-responsive
      web apps
    </p>
    <br />

    <Link to="about" className="btn btn-success btn-lg">
      click and learn
    </Link>
  </div>
);

export default HomePage;
