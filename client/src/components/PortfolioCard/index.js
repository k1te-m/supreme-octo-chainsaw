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
    justifyContent: "center",
  };

  return (
    <Card className="card">
      <Link to="/portfolio" style={centered}>
        <PortfolioImg
          className="card-img-top"
          src="../images/code.png"
          alt="Code Cloud"
        />
      </Link>
      <div className="card-body pt-1" style={flexCenter}>
        <CardTitle className="card-title" style={centered}>
          Portfolio
        </CardTitle>
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
  height: 120px;
  width: 120px;
  border: 2px solid #3b945e;
  border-radius: 50%;
  background: #182628;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  img:hover {
    animation: ${pulse} 1s infinite;
  }
  @media (min-width: 576px) {
    height: 175px;
    width: 175px;
  }
  @media (min-width: 768px) {
    height: 200px;
    width: 200px;
  }
  @media (min-width: 992px) {
    height: 250px;
    width: 250px;
  }
  @media (min-width: 1200px) {
    width: 215px;
    height: 210px;
  } ;
`;

const CardTitle = styled.h1`
  font-size: 14px;
  color: #f2f2f2;
  @media (min-width: 576px) {
    font-size: 18px;
  }
  @media (min-width: 768px) {
    font-size: 22px;
  }
  @media (min-width: 992px) {
    font-size: 26px;
  }
  @media (min-width: 1200px) {
  } ;
`;

// Image Provided by flaticon.com (https://www.flaticon.com/free-icon/code_2920244?related_item_id=2920277&term=code)
const PortfolioImg = styled.img`
  height: 70px;
  width: 70px;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 5px;
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
