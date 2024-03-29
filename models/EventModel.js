const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  beginTime: {
    type: Date,
    required: true,
  },
  finishTime: {
    type: Date,
    required: true,
  },
  img:{
    type: String,
  },
  location: {
    type: String,
  },
  organizer: {
    type: String,
  },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
