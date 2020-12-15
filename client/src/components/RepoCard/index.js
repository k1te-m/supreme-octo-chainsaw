import React from "react";

const RepoCard = ({ value }) => {
  console.log(value);
  return (
    <div className="card">
      <img className="card-img-top" src={value.imageURL} alt={value.name} />
      <div className="card-body">
        <h5 className="card-title">{value.name}</h5>
        <p className="card-text">{value.description}</p>
        <a
          href={`https://www.github.com/${value.github}/${value.name}`}
          className="btn btn-warning"
          target="_blank"
          rel="nonreferrer"
        >
          GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default RepoCard;
