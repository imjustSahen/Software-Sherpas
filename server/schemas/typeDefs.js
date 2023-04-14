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
        socialMedia: Array
        events: [Event]
    }

    input UserInput {
        _id: ID
        firstName: String
        lastName: String
        email: String
        password: String
        artist: Boolean
        artistName: String
        spotifyId: String
        socialMedia: Array
        events: Array
    }

    type Event {
        _id: ID!
        hostArtist: Array
        name: String!
        date: DateTime!
        location: String!
        venue: String!
        artists: Array
        # poster: EventPoster
    }

    input EventInput {
        _id: ID
        hostArtist: Array
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

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        userbyid(id: ID!): User
        events: [Event]
        eventbyid(id: ID!): Event
    }

    type Mutation {
        # both add user and add event using the input type do not work but the update mutations do
        login(email: String!, password: String!): Auth
        # logout: Boolean
        addUser(input: UserInput): Auth
        updateUser(id: ID!, userInput: UserInput!): User
        removeUser(id: ID!): User

        addEvent(eventInput: EventInput!): User
        updateEvent(id: ID!, eventInput: EventInput!): Event
        removeEvent(id: ID!): Event
    }
`;

module.exports = typeDefs;