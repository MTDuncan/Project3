const mongoose = require('mongoose');
const ToDoEvent = require('../models/events.js');
const { weekdays, personalEvents, publicEvents } = require('./events.json');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/calendar', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const createEventObjects = (weekdays, eventList, eventType) => {
  const events = [];

  weekdays.forEach(weekday => {
    eventList.forEach(eventName => {
      events.push({
        title: eventName,
        description: `${eventName} on ${weekday}`,
        weekday: weekday,
        eventType: eventType,
      });
    });
  });

  return events;
};

const seedData = async () => {
  try {
    const personalEventObjects = createEventObjects(weekdays, personalEvents, 'personal');
    const publicEventObjects = createEventObjects(weekdays, publicEvents, 'public');
    console.table(personalEventObjects);
console.table(publicEventObjects);

    await ToDoEvent.insertMany(personalEventObjects);
    await ToDoEvent.insertMany(publicEventObjects);

    console.log('Data seeded!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

seedData();
