const User = require('../../models/user');

async function users() {
  // todo, use data access layer instead of direct db calls
  const users = await User.find();

  return users;
}

async function user(parent, { _id }) {
  const user = await User.findById(_id);

  return user;
}

async function friends() {

}

module.exports = {
  users,
  user,
  friends,
};
