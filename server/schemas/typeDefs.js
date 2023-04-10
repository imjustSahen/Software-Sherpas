const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Query {
        artists: [Artist]
    }

    type Artist {
        _id: ID!
        name: String!
        email: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        addArtist(name: String!, email: String!, password: String!): Artist
    }

`;

module.exports = typeDefs;