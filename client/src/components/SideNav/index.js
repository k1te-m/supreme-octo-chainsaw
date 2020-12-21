import React from "react";
import styled from "styled-components";

const SideNav = () => {
    return (
        <SideNavStyle>
            <ul className="list-group">
                <li className="list-group-item">
                    <a href="https://github.com/k1te-m" target="_blank">
                        <img src="../../images/GitHub-Mark-32px.png" />
                    </a>
                </li>
                <li className="list-group-item">
                    <a href="https://www.linkedin.com/in/kmiller29/" target="_blank">
                        <img src="../../images/LI-In-Bug.png"/>
                    </a>
                </li>
                <li className="list-group-item">
                    <a href="https://drive.google.com/file/d/1XbOSu9JYqNGkLfgajWcSbFbJs2Bp1cXr/view?usp=sharing" target="_blank">
                        <i class="fas fa-file" />
                    </a>
                </li>
            </ul>
        </SideNavStyle>
    )
}

const SideNavStyle = styled.div`
  margin-top: 5rem;
  margin-left: 1rem;
  position: fixed;
  top: 2.9rem;
  left: -1rem;
  ul {
    list-style: none;
  }
  .list-group-item {
    background-color: transparent;
  }
  i {
      color: black;
      font-size: 2rem;
  }
`;

export default SideNav;