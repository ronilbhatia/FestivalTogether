const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const festivals = require('./routes/api/festivals');
const sets = require('./routes/api/sets');
const artists = require('./routes/api/artists');
const users = require('./routes/api/users');

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB using Mongoose
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err));

// Use Passport
app.use(passport.initialize());

// Passport config
require('./config/passport.js')(passport);

// Use Routes
app.use('/api/festivals', festivals);
app.use('/api/sets', sets);
app.use('/api/artists', artists);
app.use('/api/users', users);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
