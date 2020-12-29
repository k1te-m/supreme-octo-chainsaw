import React from "react";
import styled, { keyframes } from "styled-components";

const SideNav = () => {
  return (
    <SideNavStyle>
      <ul className="list-group">
        <li className="list-group-item">
          <a href="https://github.com/k1te-m" target="_blank" rel="noreferrer">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li className="list-group-item">
          <a href="https://www.linkedin.com/in/kmiller29/" target="_blank" rel="noreferrer">
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="list-group-item">
          <a
            href="https://drive.google.com/file/d/1XbOSu9JYqNGkLfgajWcSbFbJs2Bp1cXr/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SideNavStyle = styled.div`
  margin-top: 5rem;
  margin-left: 1rem;
  position: fixed;
  top: -1rem;
  left: -1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation: ${fadeIn} 2s ease-in-out;
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
    border: 1px solid #e6aa68;
  }
  .list-group-item {
    background-color: #fff9a4;
    border: 1px solid #e6aa68;
  }
  img:hover {
    animation: ${pulse} 1s infinite;
  }
  i:hover {
    animation: ${pulse} 1s infinite;
  }
  i {
    color: #FF4162;
    font-size: 1.5rem;
    padding: 0px;
    margin: 0px;
    @media (min-width: 576px) {
      font-size: 2rem;
    }
    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
    @media (min-width: 992px) {
      font-size: 3rem;
    }
    @media (min-width: 1200px) {
    }
  }
  li {
    padding: 5px 10px;
  }
`;

export default SideNav;
