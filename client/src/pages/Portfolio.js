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
      console.log(repoState);
    });
  };
  useEffect(() => {
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
        <PortfolioContainer className="container-fluid portfolio">
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
  height: 100vh;
  overflow: auto;
`;

const LoadContainer = styled.div`
  overflow: hidden;
`;


export default Portfolio;
