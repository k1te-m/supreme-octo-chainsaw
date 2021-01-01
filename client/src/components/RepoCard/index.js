import React from "react";
import styled from "styled-components";

const RepoCard = ({ value }) => {
  const { imageURL, name, description, github, languages } = value;
  return (
      <CardStyled className="card">
        <a
          href={`https://www.github.com/${github}/${name}`}
          target="_blank"
          rel="noreferrer"
        >
          <RepoImg className="card-img-top" src={imageURL} alt={name} />
        </a>
        <CardBodyDiv className="card-body">
          <CardTitle className="card-title">{name}</CardTitle>
          <CardList className="list-group">
            {languages.map((language) => {
              return <CardListItem>{language}</CardListItem>;
            })}
          </CardList>
          <CardText className="card-text">{description}</CardText>
          {/* <a
            href={`https://www.github.com/${github}/${name}`}
            className="btn btn-warning"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a> */}
        </CardBodyDiv>
      </CardStyled>
  );
};

const CardStyled = styled.div`
  width: 350px;
  height: auto;
  align-items: center;
  margin: 0 auto;
  float: none;
  justify-content: center;
  margin-bottom: 10px;
  overflow-y: auto;
  padding-top: 0px;
  background-color: #182628;
  border: 1px solid #3B945E;
  @media (min-width: 576px) {
    width: 550px;
  }
  @media (min-width: 768px) {
    width: 700px;
  }
  @media (min-width: 992px) {
    width: 950px;
  }
  @media (min-width: 1200px) {
    width: 500px;
  }
`;

const RepoImg = styled.img`
  width: 348px;
  height: auto;
  margin-top: 0px;
  padding-top: 0px;
  object-fit: cover;
  @media (min-width: 576px) {
    width: 548px;
  }
  @media (min-width: 768px) {
    width: 698px;
  }
  @media (min-width: 992px) {
    width: 948px;
  }
  @media (min-width: 1200px) {
    width: 498px;
  }
`;

const CardList = styled.ul`
  display: inline;
  list-style-type: none;
  li:not(:first-child):before {
    content: " | ";
  text-align: center;
  justify-content: center;
  overflow: hidden;
  width: 350px;
  
`
const CardListItem = styled.li`
  font-size: 10.5px;
  display: inline;
  list-style-type: none;
  overflow: hidden;
  padding: auto;
  margin: auto;
  padding-left: 0px;
  color: #3B945E;
  @media (min-width: 576px) {
    font-size: 13px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
`

const CardBodyDiv = styled.div`
  text-align: center;
  align-content: center;
`

const CardTitle = styled.h5`
  text-align: center;
  color: #57BA98;
  margin-bottom: 0px;
  border-bottom: 1px solid #65CCB8;
  @media (min-width: 576px) {
    font-size: 25px;
  }
  @media (min-width: 768px) {
    font-size: 40px;
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
`

const CardText = styled.div`
  color: #F2F2F2;
  font-size: 14px;
  @media (min-width: 576px) {
    font-size: 16px;
  }
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
`

export default RepoCard;
