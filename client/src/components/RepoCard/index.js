import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const RepoCard = ({ value }) => {
  const { imageURL, name, description, languages, deployedLink } = value;
  return (
    <CardStyled className="container d-flex">
      <div className="row">
        <div className="col p-0 d-flex justify-content-center align-items-center">
          <a
            href={deployedLink}
            target="_blank"
            rel="noreferrer"
          >
            <RepoImg
              className="card-img-top"
              src={imageURL}
              alt={name}
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 0.9 }}
            />
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
          </CardBodyDiv>
        </div>
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  max-width: 100%;
  max-height: 100%;
  width: 348px;
  height: 100vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  padding: auto;
  margin: auto;
  padding-top: 4rem;
  background-color: transparent;
  @media (min-width: 576px) {
    width: 574px;
  }
  @media (min-width: 768px) {
    width: 766px;
  }
  @media (min-width: 992px) {
    width: 990px;
  }
  @media (min-width: 1200px) {
    width: 1198px;
  }
`;

const RepoImg = styled(motion.img)`
  width: 348px;
  height: auto;
  object-fit: cover;
  margin-top: 0px;
  padding-top: 0px;
  border: 2px solid #3b945e;
  border-radius: 20px;

  @media (min-width: 576px) {
    width: 500px;
  }
  @media (min-width: 768px) {
    width: 698px;
  }
  @media (min-width: 992px) {
    width: 948px;
  }
  @media (min-width: 1200px) {
    width: 500px;
    margin-right: 100px;
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
`;
const CardListItem = styled.li`
  font-size: 10.5px;
  display: inline;
  list-style-type: none;
  overflow: hidden;
  padding: auto;
  margin: auto;
  padding-left: 0px;
  color: #3b945e;
  @media (min-width: 576px) {
    font-size: 13px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
    color: #182628;
  }
`;

const CardBodyDiv = styled.div`
  text-align: center;
  align-content: center;
  padding-top: 0px;
  height: 300px;
`;

const CardTitle = styled.h5`
  text-align: center;
  color: #f2f2f2;
  margin-bottom: 0px;
  border-bottom: 1px solid #3b945e;
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
`;

const CardText = styled.div`
  color: #f2f2f2;
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
`;

export default RepoCard;
