const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true
  },
  password: String,
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});

module.exports = model('User', UserSchema);
