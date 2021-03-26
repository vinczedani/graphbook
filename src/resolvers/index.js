const userQueries = require('./user/queries');
const userMutations = require('./user/mutations');

module.exports = {
  Query: {
    healthCheck: () => 'ok',

    ...userQueries,
  },
  Mutation: {
    ...userMutations,
  }
};
