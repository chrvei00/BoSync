//Dependencies
const path = require("path");
//  Server-dependencies
const express = require("express");

const app = express();
app.use(express.json());

const { PORT } = require("./config/config");

//Headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

// Have Node serve the files for our built React app
app.use(express.static(path.join(__dirname, "../bosync", "dist")));

// Handle all other GET-reqs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../bosync", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
