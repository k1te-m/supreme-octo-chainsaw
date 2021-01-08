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
        deployedLink: "https://gentle-atoll-92825.herokuapp.com/",
        imageURL: "../images/explorer.PNG",
        description: "MERN stack web game that is designed to take the user on an educational journey while interacting with NASA information to gain explorative knowledge. Gain credits as rewards for answering correct quiz questions while transversing the universe. Purchase and upgrade ships throught your journey.",
        languages: ["React.js", "MongoDB", "Express", "Node.js", "Bootstrap"],
    },
    {
        name: "EcommerceApp",
        github: "k1te-m",
        deployedLink: "https://fierce-earth-38835.herokuapp.com/",
        imageURL: "../images/limitelec.PNG",
        description: "A mock ecommerce electronics site. Product data is stored in a MySQL database, and the users can browse in a variety of ways. Users can optionally create an account, and log in and log out. While logged in, they can view their member information.",
        languages: ["jQuery", "Handlebars", "MySQL", "Express", "Node.js", "Bootstrap",],
    },
    {
        name: "Employee-Directory",
        github: "k1te-m",
        deployedLink: "https://fierce-falls-06822.herokuapp.com/",
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
        deployedLink: "https://thawing-crag-91029.herokuapp.com/",
        imageURL: "../images/budget.PNG",
        description: "Created a PWA from provided front-end and back-end files for a budget tracking app.",
        languages: ["PWA", "Service Worker", ]
    },
    {
        name: "Employee-Tracker",
        github: "k1te-m",
        deployedLink: "https://github.com/k1te-m/Employee-Tracker",
        imageURL: "../images/employeetrack.PNG",
        description: "This application is intended to be used as a Content Management System for a fictional company. Allowing non-developers the ability to view and interact with information stored in our database.",
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