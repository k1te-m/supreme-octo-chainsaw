import React from "react";
import styled, { keyframes } from "styled-components";

const LinkedInCard = () => {
  return (
    <Card className="card">
      <a
        href="https://www.linkedin.com/in/kmiller29/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin" />
      </a>
    </Card>
  );
};

const pulse = keyframes`
    from { transfrom: scale(1); }
    50% { transform: scale(.85); }
    to { transform: scale(1);}
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  border: 2px solid #3b945e;
  border-radius: 50%;
  background: #f2f2f2;
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
  @media (min-width: 992px) {
    width: 150px;
    height: 150px;
  }
  @media (min-width: 1200px) {
    width: 75px;
    height: 75px;
  }
  img {
    width: auto;
    height: auto;
  }
  i:hover {
    animation: ${pulse} 1s infinite;
  }
  i {
    color: #182628;
    font-size: 2rem;
    @media (min-width: 576px) {
    }
    @media (min-width: 768px) {
      font-size: 4rem;
    }
    @media (min-width: 992px) {
      font-size: 6rem;
    }
    @media (min-width: 1200px) {
      font-size: 3rem;
    }
  }
`;

export default LinkedInCard;
