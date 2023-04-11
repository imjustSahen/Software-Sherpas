const { gql } = require('apollo-server-express');

const typeDefs = gql`

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

    type Event {
        _id: ID!
        name: String!
        date: DateTime!
        location: String!
        venue: String!
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

    # type UpdateResponse {
    #     success: Boolean!
    #     user: User
    # }

    type Query {
        users: [User]
    }

    type Mutation {
        login(email: String!, password: String!): User
        addUser(firstName: String!, lastName: String!, email: String!, password: String!, artist: Boolean!): User
        # updateUser(id: ID!): User
        # removeUser(): 
        addEvent(name: String!, date: DateTime!, location: String!, venue: String!): Event
        # updateEvent()
        # removeEvent()
    }
`;

module.exports = typeDefs;