const { toDoEvent } = require('./models/index.js');

const resolvers = {
  Query: {
    events: async () => {
      return await toDoEvent.find({});
    },
    event: async (_, { weekday }) => {
      return await toDoEvent.findOne({ weekday });
    },
  },
  Mutation: {
    createEvent: async (_, { weekday, description }) => {
      const newEvent = new toDoEvent({ weekday, description });
      await newEvent.save();
      return newEvent;
    },
    deleteEvent: async (_, { weekday }) => {
      return await toDoEvent.findOneAndDelete({ weekday });
    },
  },
};

module.exports = resolvers;
