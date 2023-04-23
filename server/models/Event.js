const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
    hostArtist: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        // required: true,
    },
    date: {
        type: Date,
        // required: true,
    },
    location: {
        type: String,
        // required: true,
    },
    venue: {
        type: String,
        // required: true,
    },
    artists: { 
        type: Array,
    },
});

const Event = mongoose.model('Event', eventSchema);

module.exports =  Event;