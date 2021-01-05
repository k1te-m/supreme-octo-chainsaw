import React from "react";
import styled from "styled-components";

const RepoCard = ({ value }) => {
  const { imageURL, name, description, github, languages, _id } = value;
  return (
      <CardStyled className="container">
        <div className="row">
          <div className="col">
            <a
              href={`https://www.github.com/${github}/${name}`}
              target="_blank"
              rel="noreferrer"
            >
              <RepoImg className="card-img-top" src={imageURL} alt={name} />
            </a>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <CardBodyDiv className="card-body">
              <CardTitle className="card-title">{name}</CardTitle>
              <CardList className="list-group">
                {languages.map((language) => {
                  return <CardListItem key={language}>{language}</CardListItem>;
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
          </div>
        </div>
      </CardStyled>
  );
};

const CardStyled = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding-top: 0px;
  background-color: transparent;
  @media (min-width: 576px) {
    
  }
  @media (min-width: 768px) {
    
  }
  @media (min-width: 992px) {
   
  }
  @media (min-width: 1200px) {
   
  }
`;

const RepoImg = styled.img`
  width: 348px;
  height: auto;
  margin-top: 0px;
  padding-top: 0px;
  border-radius: 20px;
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
  color: #182628;
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
  color: #f2f2f2;
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
