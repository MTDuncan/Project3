const { ToDoEvent } = require('../models');

const resolvers = {
  Query: {
    allToDoEvents: async () => {
      return await ToDoEvent.find({});
    },
    toDoEvent: async (_, { id }) => {
      return await ToDoEvent.findById(id);
    },
  },
  Mutation: {
    createToDoEvent: async (_, { title, description, weekday }) => {
      const newEvent = new ToDoEvent({ title, description, weekday });
      await newEvent.save();
      return newEvent;
    },
    updateToDoEvent: async (_, { id, title, description, weekday }) => {
      return await ToDoEvent.findByIdAndUpdate(id, { title, description, weekday }, { new: true });
    },
    deleteToDoEvent: async (_, { id }) => {
      return await ToDoEvent.findByIdAndDelete(id);
    },
  },
};

module.exports = resolvers;