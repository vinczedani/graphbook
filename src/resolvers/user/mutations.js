const crypto = require('crypto');
const User = require('../../models/user');

async function createUser(parent, userData) {
  // todo, move this to some util function, paired with verify
  userData.password = crypto.createHash('md5').update(userData.password).digest('hex');
  const user = await User.create(userData);

  return user;
}

module.exports = {
  createUser,
};
