import React, { useState, useEffect } from "react";
import RepoCard from "../components/RepoCard";
import API from "../utils/API";
import styled from "styled-components";
import Loading from "../components/Loading";
import Navigation from "../components/Navigation";
import SideNav from "../components/SideNav";

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
      <>
        {/* <SideNavContainer>
          <SideNav />
        </SideNavContainer> */}
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
        <PortfolioWrapper>
          <PortfolioContainer className="container-fluid">
            <PortfolioRow className="row mt-3 mb-3">
              <div className="col">
                <PortfolioHeader>Portfolio</PortfolioHeader>
              </div>
            </PortfolioRow>
            <PortfolioRow className="row mt-0 mb-5 row-cols-3 justify-content-center">
              {repoState.map((repo) => {
                return <RepoCard value={repo} key={repo._id} />;
              })}
            </PortfolioRow>
          </PortfolioContainer>
        </PortfolioWrapper>
      </>
    );
  }
};

const NavigationContainer = styled.div`
  position: fixed;
  top: 0%;
  right: 0%;
  z-index: 9999;
`;

const PortfolioWrapper = styled.div`
  position: fixed;
  top: 2%;
  height: 100%;
  width: 100%;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
`

const PortfolioContainer = styled.div`
  
`

const PortfolioRow = styled.div`
  margin-top: 11%;
`;

const LoadContainer = styled.div`
`;

// const SideNavContainer = styled.div`
//   i{
//     color: #182628;
//   }
//   @media (min-width: 576px) {
//   }
//   @media (min-width: 768px) {
//   }
//   @media (min-width: 992px) {
//   }
//   @media (min-width: 1200px) {
//   }
// `

const PortfolioHeader = styled.h1`
  color: #F2F2F2;
  border-bottom: 0.5px solid #3B945E;
`


export default Portfolio;
