import React from "react";
import styled, { keyframes } from "styled-components";

const GitHubCard = () => {
  return (
    <Card className="card">
      <a href="https://github.com/k1te-m" target="_blank" rel="noreferrer">
        <img src="../images/GitHub-Mark-32px.png" alt="GitHub"/>
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
    width: 32px;
    height: 32px;
  }
  img:hover {
    animation: ${pulse} 1s infinite;
  }
`;

export default GitHubCard;
