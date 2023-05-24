const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schemas/index.js');
const mongoose = require('mongoose');
const dbConnection = require('./config/connection.js');
const { typeDefs, resolvers } = require('./schemas');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/calendar', {
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
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
