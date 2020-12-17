import React from "react";
import styled from "styled-components";

const RepoCard = ({ value }) => {
  return (
    <CardStyled className="card">
      <RepoImg className="card-img-top" src={value.imageURL} alt={value.name} />
      <div className="card-body">
        <h5 className="card-title">{value.name}</h5>
        <p className="card-text">{value.description}</p>
        <a
          href={`https://www.github.com/${value.github}/${value.name}`}
          className="btn btn-warning"
          target="_blank"
          rel="nonreferrer"
        >
          GitHub Repository
        </a>
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  width: 425px;
  height: 500px;
  align-items: center;
  margin: 0 auto;
  float: none;
  justify-content: center;
  margin-bottom: 10px;
  overflow-y: auto;
  padding-top: 200px;
`;

const RepoImg = styled.img`
  width: 385px;
  height: 440px;
  object-fit: cover;
`;

export default RepoCard;
