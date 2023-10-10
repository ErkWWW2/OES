const mongoose = require('mongoose');

const EventDatesSchema = new mongoose.Schema({
    start: Date, 
    end: Date, 
    eventId: Number, 
    votes: Number, 
    voters: [Number] 
});

const EventDates = mongoose.model('EventDates', EventDatesSchema);

module.exports = EventDates;