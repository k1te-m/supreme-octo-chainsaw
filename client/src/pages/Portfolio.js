import React, { useState, useEffect } from "react";
import RepoCard from "../components/RepoCard";
import API from "../utils/API";
import styled from "styled-components";




const Portfolio = () => {
    const [repoState, setRepoState] = useState([]);
    let repos = [];

    const getRepos = () => {
        API.getRepos().then((response) => {
          repos = response.data;
          setRepoState(repos);
        })
      }
      useEffect(() => {
        getRepos();
      }, [])
      return (
        <PortfolioContainer className="container-fluid portfolio">
          <div className="row row-cols-3">
            
              {repoState.map(repo => {
                return (
                  <RepoCard value={repo} key={repo._id} />
                )
              })}
            
          </div>
        </PortfolioContainer>
      );
}

const PortfolioContainer = styled.div`
height: 100vh;
overflow: auto;`


export default Portfolio;