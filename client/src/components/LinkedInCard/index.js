import React from "react";
import styled, { keyframes } from "styled-components";

const LinkedInCard = () => {
  return (
    <Card className="card">
      <a href="https://www.linkedin.com/in/kmiller29/" target="_blank" rel="noreferrer">
        <i class="fab fa-linkedin" />
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
  border: 2px solid #e6aa68;
  background: #fff9a4;
  @media (min-width: 576px) {
      
  }
  @media (min-width: 768px) {
    
  }
  @media (min-width: 992px) {
    
  }
  @media (min-width: 1200px) {
    width: 75px;
    height: 75px;
  } ;
  img {
    width: auto;
    height: auto;
  }
  i:hover {
    animation: ${pulse} 1s infinite;
  }
  i {
    color:#ffd47f;
    font-size: 2rem;
    @media (min-width: 576px) {
      
    }
    @media (min-width: 768px) {
      
    }
    @media (min-width: 992px) {
      
    }
    @media (min-width: 1200px) {
      font-size: 4rem;
    } ;
  }
`;

export default LinkedInCard;
