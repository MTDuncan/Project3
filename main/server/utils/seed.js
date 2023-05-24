const mongoose = require('mongoose');
const ToDoEvent = require('./models/ToDoEvent');
const { weekdays, personalEvents, publicEvents } = require('./events.json');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/calendar', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const createEventObjects = (weekdays, eventList, isPublic) => {
  const events = [];

  weekdays.forEach(weekday => {
    eventList.forEach(eventName => {
      events.push({
        title: eventName,
        description: `${eventName} on ${weekday}`,
        weekday: weekday,
      });
    });
  });

  return events;
};

const seedData = async () => {
  try {
    const personalEventObjects = createEventObjects(weekdays, personalEvents);
    const publicEventObjects = createEventObjects(weekdays, publicEvents);

    await ToDoEvent.insertMany(personalEventObjects);
    await ToDoEvent.insertMany(publicEventObjects);

    console.log('Data seeded!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

seedData();
