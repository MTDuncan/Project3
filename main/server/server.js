const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const db = require('./config/connection');
// get model
const { toDoEvent } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Creates a new ToDoEvent
app.post('/new-event', (req, res) => {
  const newEvent = new toDoEvent(req.body);
  newEvent.save((err, doc) => {
    if (err) {
      res.status(500).json({ error: 'Something went wrong' });
    } else {
      res.status(201).json(doc);
    }
  });
});

// Retrieves all ToDoEvents
app.get('/all-events', async (req, res) => {
  try {
    const result = await toDoEvent.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Find a specific ToDoEvent by weekday
app.get('/event/:weekday', async (req, res) => {
  try {
    const result = await toDoEvent.findOne({ weekday: req.params.weekday });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Delete a specific ToDoEvent by weekday
app.delete('/delete-event/:weekday', async (req, res) => {
  try {
    const result = await toDoEvent.findOneAndDelete({ weekday: req.params.weekday });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});