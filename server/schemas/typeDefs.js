const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Query {
        users: [User]
    }

    type User {
        _id: ID!
        name: String!
        email: String!
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