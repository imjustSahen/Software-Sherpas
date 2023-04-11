const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        artist: Boolean!
        artistName: String
        spotifyId: String
    }

    # type Event {
    #     _id: ID!
    #     name: String!
    #     date: DateTime!
    #     location: String!
    #     venue: String!
    #     artists: Array
    #     poster: EventPoster
    # }

    # type EventPoster {
    #     data: String!
    #     contentType: String!
    # }

    # type Auth {
    #     token: ID!
    #     user: User
    # }

    type Query {
        users: [User]
    }

    type Mutation {
        login(email: String!, password: String!): User
        addUser(firstName: String!, lastName: String!, email: String!, password: String!, artist: Boolean!): User
        # updateUser(): User
        # removeUser(): 
        # addEvent()
        # updateEvent()
        # removeEvent()
    }
`;

module.exports = typeDefs;