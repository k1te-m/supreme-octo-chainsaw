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
    setTimeout(() => {
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
      <div className="container-fluid">
        <Navigation />
          <PortfolioRow className="row row-cols-3 justify-content-center">
              {repoState.map((repo) => {
                return <RepoCard value={repo} key={repo._id} />;
              })}
          </PortfolioRow>
      </div>
    );
  }
};

const PortfolioRow = styled.div`
  margin-top: 11%;
`;

const LoadContainer = styled.div`
`;


export default Portfolio;
