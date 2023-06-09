const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const { typeDefs, resolvers } = require('./schemas/index.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/calendar', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database!');

    // Create your Apollo Server instance
    const server = new ApolloServer({ typeDefs, resolvers });
    // app.get('/events', async (req, res) => {
    //   try {
    //     const events = await ToDoEvent.find();
    //     res.json(events);
    //   } catch (err) {
    //     res.status(500).json({ error: err.message });
    //   }
    // });
    // Start the server and apply the middleware
    server.start().then(() => {
      server.applyMiddleware({ app });

      // Start the server
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      });
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

