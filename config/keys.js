module.exports = {
  mongoURI:
    process.env.MONGO_URI || require('./dev_keys.js').mongoURI,
  secretOrKey: process.env.SECRET_OR_KEY || require('./dev_keys.js').secretOrKey,
};
