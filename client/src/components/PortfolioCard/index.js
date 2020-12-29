import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const PortfolioCard = () => {
  const centered = {
    margin: "0 auto",
    textAlign: "center",
  };
  const flexCenter = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }

  return (
    <Card className="card">
      <Link to="/portfolio" style={centered}>
        <PortfolioImg
          className="card-img-top"
          src="../images/cloud.png"
          alt="Code Cloud"
        />
      </Link>
      <div className="card-body" style={flexCenter}>
        <CardTitle className="card-title" style={centered}>
          Portfolio
        </CardTitle>
        {/* <p className="card-text">
          GitHub repositories for projects and applications.
        </p>
        <div style={Centered}>
          <a href="#" className="btn btn-warning">
            View Portfolio
          </a>
        </div> */}
      </div>
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
  height: 140px;
  width: 140px;
  border: 2px solid #e6aa68;
  background: #fffbbd;
  img:hover {
    animation: ${pulse} 1s infinite;
  }
  @media (min-width: 576px) {
    height: 175px;
    width: 175px;
  }
  @media (min-width: 768px) {
    height: 225px;
    width: 225px;
  }
  @media (min-width: 992px) {
    height: 300px;
    width: 300px;
  }
  @media (min-width: 1200px) {
    width: 200px;
    height: 200px;
  } ;
`;

const CardTitle = styled.h1`
  font-size: 20px;

  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
    font-size: 25px;
  }
  @media (min-width: 992px) {
    font-size: 30px;
  }
  @media (min-width: 1200px) {
  } ;
`;

// const ListItem = styled.li`
//   background: #fffbbd;
// `;

// Image Provided by flaticon.com
const PortfolioImg = styled.img`
  height: 70px;
  width: 70px;
  margin: 0 auto;
  margin-top: 1rem;
  @media (min-width: 576px) {
    height: 100px;
    width: 100px;
  }
  @media (min-width: 768px) {
    height: 130px;
    width: 130px;
  }
  @media (min-width: 992px) {
    height: 160px;
    width: 160px;
  }
  @media (min-width: 1200px) {
    height: 125px;
    width: 125px;
  } ;
`;

export default PortfolioCard;
