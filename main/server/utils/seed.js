const db = require('../config/connection');
const ToDoEvent = require('../models/events');
const { getRandomPersonalEvents, getRandomPublicEvents } = require('./eventData');
const eventData = require('./events.json')

// connection.on('error', console.error.bind(console, 'connection error:'));

db.once('open', async () => {
  console.log('connected');

  // Drop existing ToDoEvents
  try {
    const events = await ToDoEvent.find({});
    if (!events) {
        console.log('No ToDoEvent found.');
    } else {
        for(let event of events) {
            await event.remove();
        }
    }
  } catch(err) {
    console.log('Error finding ToDoEvent:', err);
  };
  
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

    // Add events to the collection and await the results
    // await ToDoEvent.create(events[i]);
  } 
  ToDoEvent.insertMany(events)

  // Log out the seed data to indicate what should appear in the database
  console.table(events);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});