const mongoose = require('mongoose');
const { Schema, model} = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  artist: {
    type: Boolean,
    required: true,
  },
  artistName: {
    type: String,
  },
  heroImage: {
    type: String
  },
  secondaryImage: {
    type: String
  },
  thumbnailImg: {
    type: String
  },
  artistDescription: {
    type: String,
    trim: true
  },
  spotifyId: {
    type: String
  },
  instagramUrl: {
   type: String
  },
  spotifyUrl: {
    type: String
  },
  soundcloudUrl: {
    type: String
  },
  events: [{type: Schema.Types.ObjectId, ref: 'Event'}],
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
