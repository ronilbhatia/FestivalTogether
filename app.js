const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const festivals = require("./routes/api/festivals");
const artists = require("./routes/api/artists");
const users = require("./routes/api/users");

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB using Mongoose
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// Use Routes
app.use("/api/festivals", festivals);
app.use("/api/artists", artists);
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
