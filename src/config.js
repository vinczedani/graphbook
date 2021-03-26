const config = {
  mongodb: {
    url: process.env.MONGO_URL,
    db: process.env.MONGO_DATABASE
  }
};

module.exports = config;
