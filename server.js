// Dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes")

//Express instance
const app = express();

// Variable Port
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API Routes
app.use(routes);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolio", 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);



// Start the Server
app.listen(PORT, () => {
  if (process.env.NODE_ENV !== "production") {
    console.log(`Server listening at http://localhost:${PORT}`);
  }
});
