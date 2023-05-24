const { gql } = require('apollo-server-express');

const ToDoEventTypeDefs = gql`
  type ToDoEvent {
    _id: ID!
    title: String!
    description: String!
    weekday: String!
  }

  type Query {
    toDoEvent(id: ID!): ToDoEvent
    allToDoEvents: [ToDoEvent]
  }

  type Mutation {
    createToDoEvent(title: String!, description: String!, weekday: String!): ToDoEvent
    updateToDoEvent(id: ID!, title: String, description: String, weekday: String): ToDoEvent
    deleteToDoEvent(id: ID!): ToDoEvent
  }
`;

module.exports = ToDoEventTypeDefs;