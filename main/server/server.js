const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./schemas/index.js');
const resolvers = require('./resolvers/index.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/calender', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database!');

    // Create your Apollo Server instance
    const server = new ApolloServer({ typeDefs, resolvers });

    // Apply the Apollo Server middleware to Express app
    server.applyMiddleware({ app });

    // Start the server
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });