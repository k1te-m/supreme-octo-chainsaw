import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./style.css"

const hamburgerStyle = {
    fontSize: "3rem",
    color: "aqua",
    border: "none",
    marginRight: "10px",
}

const Navigation = () => {
  return (
    <nav className="navbar navbar-light fixed-top bg-custom justify-content-end">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={hamburgerStyle}
      >
        {/* <span className="navbar-toggler-icon"></span> */}
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
          </li>
          <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/k1te-m" target="_blank">
              GitHub
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.linkedin.com/in/kmiller29/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://drive.google.com/file/d/1XbOSu9JYqNGkLfgajWcSbFbJs2Bp1cXr/view?usp=sharing" target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );

  // console.log(show);
  // if (show === false) {
  //     return null;
  // } else {
  //     return (
  //         <div className="container">
  //             {children}
  //         </div>
  //     )

  //   <div className="container" style={displayOptions} role="dialog">
  //     <ul className="list-group">
  //       <li className="list-group-item">
  //         <Link to="/">Home</Link>
  //       </li>
  //       <li className="list-group-item">
  //         <Link to="/portfolio">Portfolio</Link>
  //       </li>
  //       <li className="list-group-item">
  //         <Link to="/contact">Contact</Link>
  //       </li>
  //       <li className="list-group-item">
  //         <a href="https://github.com/k1te-m" target="_blank">
  //           GitHub
  //         </a>
  //       </li>
  //       <li className="list-group-item">
  //         <a
  //           href="https://www.linkedin.com/in/kmiller29/"
  //           target="_blank"
  //         >
  //           LinkedIn
  //         </a>
  //       </li>
  //       <li className="list-group-item">
  //         <a
  //           href="https://drive.google.com/file/d/1XbOSu9JYqNGkLfgajWcSbFbJs2Bp1cXr/view?usp=sharing"
  //           target="_blank"
  //         >
  //           Resume
  //         </a>
  //       </li>
  //     </ul>
  //   </div>
};

export default Navigation;
