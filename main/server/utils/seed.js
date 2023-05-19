const connection = require('../config/connection');
const ToDoEvent = require('../models/events');
const { getRandomPersonalEvents, getRandomPublicEvents } = require('./eventData');

connection.on('error', console.error.bind(console, 'connection error:'));

connection.once('open', async () => {
  console.log('connected');

  // Drop existing ToDoEvents
  ToDoEvent.find({}, function(err, events){
    if (err) {
        console.log('Error finding ToDoEvent:', err);
    } else if (!events) {
        console.log('No ToDoEvent found.');
    } else {
        events.forEach(function(event){
            event.remove();
        });
    }
});
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
    await ToDoEvent.create(events[i]);
  }

  // Log out the seed data to indicate what should appear in the database
  console.table(events);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
