const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const artistSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        }
    }
)

const Artist = model('Artist', artistSchema)

module.exports = Artist;