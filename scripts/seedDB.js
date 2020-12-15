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
        description: "This is a MERN stack web game that is designed to take the user on an educational journey while interacting with NASA information to gain explorative knowledge. Gain credits as rewards for answering correct quiz questions while transversing the universe. Purchase and upgrade ships throught your journey."
    },
    {
        name: "EcommerceApp",
        github: "k1te-m",
        imageURL: "../images/limitelec.PNG",
        description: "This is as mock ecommerce site. Product data is stored in a MySQL database, and the users can browse in a variety of ways. They can see all of our products on one page, they can refine their search to a particular category or brand of product via a dropdown menu, and they can search for all products that partially match a string (e.g., television). Users can optionally create an account, and log in and log out. While logged in, they can view their member information."
    },
    {
        name: "Employee-Directory",
        github: "k1te-m",
        imageURL: "../images/employeedirect.PNG",
        description: "A React application that acts as an employee directory for employees or managers to be able to quickly view non-sensitive information about their colleagues."
    },
    {
        name: "Restaurant-Roulette",
        github: "k1te-m",
        imageURL: "../images/restroulette.PNG",
        description: "An application that returns a random restaurant selection based on the user city location via Zomato's API."
    },
    {
        name: "Budget-Tracker",
        github: "k1te-m",
        imageURL: "../images/budget.PNG",
        description: "Created a PWA from provided front-end and back-end files for a budget tracking app."
    },
    {
        name: "Employee-Tracker",
        github: "k1te-m",
        imageURL: "../images/employeetrack.PNG",
        description: "This application is intended to be used as a Content Management System for a fictional company. Allowing non-developers the ability to view and interact with information stored in our database."
    },
    {
        name: "React-Portfolio",
        github: "k1te-m",
        imageURL: "../images/portfolioex.PNG",
        description: "A React application to display some quick information about myself along with my resume, LinkedIn profile, and GitHub repositories."
    },
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