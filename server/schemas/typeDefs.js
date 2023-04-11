const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Query {
        users: [User]
    }

    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        artist: Boolean
        artistName: String
        spotifyId: Schema.Types.ObjectId
    }

    type Event {
        _id: ID!
        name: String!
        date: DateTime!
        location: String!
        venue: String!
        artists: Array
        poster: EventPoster
    }

    type EventPoster {
        data: String!
        contentType: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        addUser(name: String!, email: String!, password: String!): User
    }

`;

module.exports = typeDefs;