import React from "react";
import styled, { keyframes } from "styled-components";

const GitHubCard = () => {
  return (
    <Card className="card">
      <a href="https://github.com/k1te-m" target="_blank" rel="noreferrer">
        <i class="fab fa-github" />
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
  background: #fffbbd;
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
  i:hover {
    animation: ${pulse} 1s infinite;
  }
  i {
    color: salmon;
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

export default GitHubCard;
