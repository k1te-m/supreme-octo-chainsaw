import React, { useState, useEffect } from "react";
import API from "../utils/API";


const Portfolio = () => {
    const [repoState, setRepoState] = useState([]);
    let repos = [];

    const getRepos = () => {
        API.getRepos().then(function(response) {
          console.log(response.data);
          repos = response.data;
          setRepoState(repos);
        })
      }
      useEffect(() => {
        getRepos();
      }, [])

      return (
        <div className="container">
          Hello
        </div>
      );
}

export default Portfolio;