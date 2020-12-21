import React from "react";
import styled from "styled-components";

const PortfolioCard = () => {
  const Centered = {
    margin: "0 auto",
    width: "50%",
  };
  return (
    <Card className="card card-block d-flex">
      <PortfolioImg
        className="card-img-top"
        src="../images/cloud.png"
        alt="Code Cloud"
      />
      <div className="card-body">
        <h5 className="card-title">Portfolio</h5>
        <p className="card-text">
          GitHub repositories for projects and applications.
        </p>
        <div style={Centered}>
          <a href="#" className="btn btn-warning">
            View Portfolio
          </a>
        </div>
      </div>
    </Card>
  );
};

const Card = styled.div`
  width: 18rem;
  border: 2px solid #e6aa68;
  background: #fffbbd;
`;

const ListItem = styled.li`
  background: #fffbbd;
`;
// Image Provided by flaticon.com
const PortfolioImg = styled.img`
  height: 50%;
  width: 50%;
  margin: 0 auto;
  padding-top: 5px;
`;

export default PortfolioCard;
