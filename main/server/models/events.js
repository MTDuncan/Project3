
const mongoose = require('mongoose');

const ToDoEventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  weekday: {
    type: String,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  },
  is_completed: {
    type: Boolean,
    default: false,
  },
});

const ToDoEvent = mongoose.model('ToDoEvent', ToDoEventSchema);

module.exports = ToDoEvent;
