const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    venue: {
        type: String,
        required: true,
    },
    artists: { 
        type: Array,
    },
    // poster: {
    //     // will holf binary data from a jpeg file
    //     data: Buffer,
    //     //used to store the MIME type of the image
    //     contentType: String
    // }
});

const Event = mongoose.model('Event', eventSchema);

module.exports =  Event;