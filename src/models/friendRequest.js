const { Schema, model } = require('mongoose');

const FriendRequestSchema = new Schema({
  from: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  to: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = model('FriendRequest', FriendRequestSchema);
