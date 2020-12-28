import React from "react";
import styled, { keyframes } from "styled-components";

const LinkedInCard = () => {
  return (
    <Card className="card">
      <a href="https://www.linkedin.com/in/kmiller29/" target="_blank" rel="noreferrer">
        <img src="../images/LI-In-Bug.png" alt="LinkedIn"/>
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
  img {
    width: auto;
    height: auto;
  }
  img:hover {
    animation: ${pulse} 1s infinite;
  }
`;

export default LinkedInCard;
