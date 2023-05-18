const connection = require('../config/connection');
const { ToDoEvent } = require('../models');
const { getRandomPersonalEvents, getRandomPublicEvents } = require('./eventData');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing ToDoEvents
  await ToDoEvent.deleteMany({});

  // Create empty array to hold the events
  const events = [];

  // Loop 20 times -- add personal and public events to the events array
  for (let i = 0; i < 20; i++) {
    const personalEvent = getRandomPersonalEvents(1)[0].split(": ");
    const publicEvent = getRandomPublicEvents(1)[0].split(": ");
    
    events.push({
      title: personalEvent[1],
      description: "Personal Event",
      weekday: personalEvent[0],
    });

    events.push({
      title: publicEvent[1],
      description: "Public Event",
      weekday: publicEvent[0],
    });
  }

  // Add events to the collection and await the results
  await ToDoEvent.collection.insertMany(events);

  // Log out the seed data to indicate what should appear in the database
  console.table(events);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
