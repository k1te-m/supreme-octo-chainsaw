const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || 
    "mongodb://localhost/portfolio"
);

const repoSeed = [
    {
        name: "explorer",
        github: "k1te-m",
        imageURL: "../images/explorer.PNG",
        description: "This is a MERN stack web game that is designed to take the user on an educational journey while interacting with NASA information to gain explorative knowledge.",
        languages: ["React.js", "MongoDB", "Express", "Node.js", "Bootstrap"],
    },
    {
        name: "EcommerceApp",
        github: "k1te-m",
        imageURL: "../images/limitelec.PNG",
        description: "This is as mock ecommerce site. Product data is stored in a MySQL database, and the users can browse in a variety of ways.",
        languages: ["jQuery", "Handlebars", "MySQL", "Express", "Node.js", "Bootstrap",],
    },
    {
        name: "Employee-Directory",
        github: "k1te-m",
        imageURL: "../images/employeedirect.PNG",
        description: "A React application that acts as an employee directory for employees or managers to be able to quickly view non-sensitive information about their colleagues.",
        languages: ["React.js", "Express", "Node.js", "Bootstrap", ]
    },
    // {
    //     name: "Restaurant-Roulette",
    //     github: "k1te-m",
    //     imageURL: "../images/restroulette.PNG",
    //     description: "An application that returns a random restaurant selection based on the user city location via Zomato's API.",
    //     languages: ["React.js", "Express", "Node.js", "Foundation", ]
    // },
    {
        name: "Budget-Tracker",
        github: "k1te-m",
        imageURL: "../images/budget.PNG",
        description: "Created a PWA from provided front-end and back-end files for a budget tracking app.",
        languages: ["PWA", "Service Worker", ]
    },
    {
        name: "Employee-Tracker",
        github: "k1te-m",
        imageURL: "../images/employeetrack.PNG",
        description: "This application is intended to be used as a Content Management System for a fictional company.",
        languages: ["CLI", "MySQL", "Node.js",]
    },
    // {
    //     name: "React-Portfolio",
    //     github: "k1te-m",
    //     imageURL: "../images/portfolioex.PNG",
    //     description: "A React application to display some quick information about myself along with my resume, LinkedIn profile, and GitHub repositories."
    // },
]

db.Repo.remove({})
  .then(() => db.Repo.collection.insertMany(repoSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
  });