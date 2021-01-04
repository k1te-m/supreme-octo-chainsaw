import React from "react";
import styled, { keyframes } from "styled-components";

const SideNav = () => {
  return (
    <SideNavStyle>
      <ul className="list-group">
        <li className="list-group-item">
          <a href="https://github.com/k1te-m" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="list-group-item">
          <a href="https://www.linkedin.com/in/kmiller29/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="list-group-item">
          <a
            href="https://drive.google.com/file/d/1XbOSu9JYqNGkLfgajWcSbFbJs2Bp1cXr/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-file" />
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
  top: -4.2rem;
  left: -1rem;
  z-index: 2;
  animation: ${fadeIn} 2s ease-in-out;
  @media (min-width: 576px) {
    top: -4.5rem;
  }
  @media (min-width: 768px) {
    top: -4.5rem;
  }
  @media (min-width: 992px) {
    top: -4.5rem;
  }
  @media (min-width: 1200px) {
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    box-shadow: none;
    border: none;
  }
  .list-group-item {
    background-color: transparent;
    box-shadow: none;
    border: none;
  }
  img:hover {
    animation: ${pulse} 1s infinite;
  }
  i:hover {
    animation: ${pulse} 1s infinite;
  }
  i {
    color: #182628;
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
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default SideNav;
