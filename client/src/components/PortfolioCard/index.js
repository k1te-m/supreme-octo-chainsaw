import React from "react";
import styled from "styled-components";

const PortfolioCard = () => {
  const centered = {
    margin: "0 auto",
    textAlign: "center",
  };
  return (
    <Card className="card">
      <PortfolioImg
        className="card-img-top"
        src="../images/cloud.png"
        alt="Code Cloud"
      />
      <div className="card-body">
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

const Card = styled.div`
  height: 140px;
  width: 140px;
  border: 2px solid #e6aa68;
  background: #fffbbd;
  @media (min-width: 576px) {
    height: 200px;
    width: 200px;
  }
  @media (min-width: 768px) {
    height: 250px;
    width: 250px;
  }
  @media (min-width: 992px) {
    height: 300px;
    width: 300px;
  }
  @media (min-width: 1200px) {
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
`

// const ListItem = styled.li`
//   background: #fffbbd;
// `;

// Image Provided by flaticon.com
const PortfolioImg = styled.img`
  height: 70px;
  width: 70px;
  margin: 0 auto;
  padding: 3px;
  @media (min-width: 576px) {
    height: 125px;
    width: 125px;
  }
  @media (min-width: 768px) {
    height: 175px;
    width: 175px;
  }
  @media (min-width: 992px) {
    height: 225px;
    width: 225px;
  }
  @media (min-width: 1200px) {
  } ;
`;

export default PortfolioCard;
