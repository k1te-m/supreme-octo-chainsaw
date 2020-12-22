import React from "react";
import styled, { keyframes } from "styled-components";

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
            <img src="../../images/LI-In-Bug.png" />
          </a>
        </li>
        <li className="list-group-item">
          <a
            href="https://drive.google.com/file/d/1XbOSu9JYqNGkLfgajWcSbFbJs2Bp1cXr/view?usp=sharing"
            target="_blank"
          >
            <i class="fas fa-file" />
          </a>
        </li>
      </ul>
    </SideNavStyle>
  );
};

const pulse = keyframes`
    from { transfrom: scale(1); }
    50% { transform: scale(.85); }
    to { transform: scale(1);}
`;

const SideNavStyle = styled.div`
  margin-top: 5rem;
  margin-left: 1rem;
  position: fixed;
  top: -1rem;
  left: -1rem;
  
  @media (min-width: 576px) {
    top: 1.5rem;
  }
  @media (min-width: 768px) {
    top: 4.5rem;
  }
  @media (min-width: 992px) {
    top: 7.5rem;
  }
  @media (min-width: 1200px) {
  }

  ul {
    list-style: none;
    border: 1px solid orange;
  }
  .list-group-item {
    background-color: #fffbbd;
    border: 1px solid orange;
  }
  img:hover {
    animation: ${pulse} 1s infinite;
  }
  i:hover {
    animation: ${pulse} 1s infinite;
  }
  i {
    color: black;
    font-size: 2rem;
  }
`;

export default SideNav;
