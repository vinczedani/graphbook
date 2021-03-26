const fs = require('fs');
const { ApolloServer } = require('apollo-server');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs: fs.readFileSync('./src/schema.graphql', 'utf-8'),
  resolvers,
});

module.exports = server;
