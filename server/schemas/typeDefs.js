const { gql } = require('apollo-server-express');

const typeDefs = gql`
# Scalars are the basic data types used in a GraphQL API. 
# Allow developers to define the structure of data in their GraphQL schema and specify how data is accepted as input and returned as output.
    scalar DateTime
    scalar Array

    # Using type User for query specifically, password not included
    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        artist: Boolean!
        artistName: String
        heroImage: String
        secondaryImage: String
        artistDescription: String
        spotifyId: String
        instagramUrl: String
        spotifyUrl: String
        soundcloudUrl: String
        events: [Event]
    }

    # Using input UserInput for artist creation and update, password included
    input UserInput {
        _id: ID
        firstName: String
        lastName: String
        email: String
        password: String
        artist: Boolean
        artistName: String
        heroImage: String
        secondaryImage: String
        artistDescription: String
        spotifyId: String
        instagramUrl: String
        spotifyUrl: String
        soundcloudUrl: String
    }

    type Event {
        _id: ID!
        name: String!
        date: DateTime!
        location: String!
        venue: String!
        artists: Array
        # poster: EventPoster
    }

    input EventInput {
        _id: ID
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
        artists(where: UserInput): [User]
        userbyid(id: ID!): User
        events: [Event]
        eventbyid(id: ID!): Event
    }

    type Mutation {
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