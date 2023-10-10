const mongoose = require('mongoose');

const EventDetailsSchema = new mongoose.Schema({
    eventId: Number, 
    name: String, 
    desc: String, 
    part: [Number], 
    org: [Number],
});

const EventDetails = mongoose.model('EventDetails', EventDetailsSchema);

module.exports = EventDetails;