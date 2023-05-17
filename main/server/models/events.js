// Define Mongoose
const mongoose = require('mongoose');

// Create a new instance of the Mongoose schema to define shape of each document
const toDoEventSchema = new mongoose.Schema({
  // Add individual properties and their types
  // Setting required to true will disallow null values
  title: { type: String, required: true },
  description: String,
  weekday: { 
    type: String, 
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] 
  },
  is_completed: { type: Boolean, default: false },
});

// Using mongoose.model() to compile a model based on the schema
// 'ToDoEvent' is the name of the model
// toDoEventSchema is the name of the schema we are using to create a new instance of the model
const ToDoEvent = mongoose.model('ToDoEvent', toDoEventSchema);

// Error handler function to be called when an error occurs when trying to save a document
const handleError = (err) => console.error(err);

// We use the model to create individual documents that have the properties as defined in our schema
ToDoEvent
  .create({
    title: 'Grocery shopping',
    description: 'Buy milk, eggs, and bread',
    weekday: 'Monday',
    is_completed: false,
  })
  .then(result => console.log('Created new event', result))
  .catch(err => handleError(err));

module.exports = ToDoEvent;
