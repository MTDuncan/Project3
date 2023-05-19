const mongoose = require('mongoose');

const ToDoEventSchema = new mongoose.Schema({
  title: String,
  description: String,
  weekday: String,
});

const ToDoEvent = mongoose.model('ToDoEvent', ToDoEventSchema);

module.exports = ToDoEvent;