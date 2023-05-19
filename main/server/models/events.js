const { Schema, Types } = require('mongoose');

const toDoEvent = new Schema(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
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
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = toDoEvent;
