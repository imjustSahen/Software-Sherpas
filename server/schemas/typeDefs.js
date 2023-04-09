const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Query {
        allArtist: Artist
    }

    type Artist {
        _id: ID 
        name: String!,
        email: String!
    }

    type Mutation {
        addArtist(name: String!, email: String!, password: String!): Artist
    }

`;

module.exports = typeDefs;