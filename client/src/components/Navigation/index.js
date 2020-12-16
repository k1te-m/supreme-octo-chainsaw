import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = ({show, children}) => {
    console.log(show);
    if (show === false) {
        return null;
    } else {
        return (
            <div className="container">
                {children}
            </div>
        )

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
    }
};


export default Navigation;
