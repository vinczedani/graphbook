const mongoose = require('mongoose');
const config = require('./config');

const url = `${config.mongodb.url}/${config.mongodb.db}`;

console.log(url);

const connection = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = { connection };
