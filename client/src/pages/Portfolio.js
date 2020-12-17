import React, { useState, useEffect } from "react";
import RepoCard from "../components/RepoCard";
import API from "../utils/API";
import styled from "styled-components";
import Loading from "../components/Loading";
import Navigation from "../components/Navigation";

const Portfolio = () => {
  const [loadWheel, setLoadWheel] = useState(true);
  const [repoState, setRepoState] = useState([]);
  let repos = [];

  const getRepos = () => {
    API.getRepos().then((response) => {
      repos = response.data;
      setRepoState(repos);
    });
  };
  useEffect(() => {
    console.log(repoState);
    getRepos();
    const myFace = setTimeout(() => {
      setLoadWheel(false);
    }, 1500);
  }, []);

  if (loadWheel === true) {
    return (
      <LoadContainer>
        <Loading />
      </LoadContainer>
    );
  } else {
    return (
      <>
        <Navigation />
        <PortfolioContainer className="container portfolio">
          <h1>Portfolio</h1>
          <div className="row row-cols-3">
            
              {repoState.map((repo) => {
                return <RepoCard value={repo} key={repo._id} />;
              })}
            
          </div>
        </PortfolioContainer>
      </>
    );
  }
};

const PortfolioContainer = styled.div`
  overflow: auto;
  margin-top: 1.5rem;
  padding-bottom: 60px;
`;

const LoadContainer = styled.div`
  overflow: hidden;
`;


export default Portfolio;
