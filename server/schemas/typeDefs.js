const { gql } = require('apollo-server-express');

const typeDefs = gql`
# Scalars are the basic data types used in a GraphQL API. 
# Allow developers to define the structure of data in their GraphQL schema and specify how data is accepted as input and returned as output.
    scalar DateTime
    scalar Array

    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        artist: Boolean!
        artistName: String
        spotifyId: String
    }

    input UserInput {
        _id: ID
        firstName: String
        lastName: String
        email: String
        artist: Boolean
        artistName: String
        spotifyId: String
    }

    type Event {
        _id: ID!
        name: String
        date: DateTime
        location: String
        venue: String
        artists: Array
        # poster: EventPoster
    }

    # type EventPoster {
    #     data: String!
    #     contentType: String!
    # }

    # type Auth {
    #     token: ID!
    #     user: User
    # }

    type Query {
        me: User
        users: [User]
        userbyid(id: ID!): User
        events: [Event]
    }

    type Mutation {
        login(email: String!, password: String!): User
        addUser(firstName: String!, lastName: String!, email: String!, password: String!, artist: Boolean!): User
        updateUser(id: ID!, UserInput: UserInput!): User
        removeUser(id: ID!): User
        addEvent(name: String!, date: DateTime!, location: String!, venue: String!): Event
        # updateEvent()
        # removeEvent()
    }
`;

module.exports = typeDefs;