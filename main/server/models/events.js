const { Schema, Types, default: mongoose } = require('mongoose');

const ToDoEventSchema = new mongoose.Schema({
  title: String,
  description: String,
  weekday: String,
});

module.exports = mongoose.model('Event', toDoEvent);
