import React, { useState, useEffect } from "react";
import RepoCard from "../components/RepoCard";
import API from "../utils/API";


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
        <div className="container">
          <div className="row row-cols-3">
            
              {repoState.map(repo => {
                return (
                  <RepoCard value={repo} key={repo._id} />
                )
              })}
            
          </div>
        </div>
      );
}

export default Portfolio;