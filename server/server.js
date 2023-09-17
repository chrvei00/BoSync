//Dependencies
const path = require("path");
//  Server-dependencies
const express = require("express");
const session = require("express-session");
//  DB-dependencies
const mongoose = require("mongoose");
const MongoDBStore = require("connect-mongodb-session")(session);
mongoose.set("strictQuery", false);

//Define constants

const app = express();
app.use(express.json());

const { PORT, SESS_SECRET, NODE_ENV, COOKIE_NAME } = require("./config/config");
const { MongoURI } = require("./config/database");
const MAX_AGE = 1000 * 60 * 60 * 3; // Three hours

//configure mongoose
mongoose.connect(MongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// setting up connect-mongodb-session store
const mongoDBstore = new MongoDBStore({
  uri: MongoURI,
  collection: "sessions",
});

// Express-Session
app.set("trust proxy", 1);
app.use(
  session({
    name: COOKIE_NAME,
    secret: SESS_SECRET,
    resave: false,
    saveUninitialized: false,
    store: mongoDBstore,
    cookie: {
      maxAge: MAX_AGE,
      sameSite: false,
      secure: NODE_ENV === "production",
    },
  })
);

//Headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Have Node serve the files for our built React app
app.use(express.static(path.join(__dirname, "../bosync", "dist")));

//api-calls
const userRouter = require("./routes/userRoutes");
const collectiveRouter = require("./routes/collectiveRoutes");
app.use("/api/user", userRouter);
app.use("/api/collective", collectiveRouter);

// Handle all other GET-reqs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../bosync", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
