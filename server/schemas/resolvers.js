const { User } = require('../models');

const resolvers = {
    Query: {
        users: async (parent, args) => {
            return await User.find({});
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
        const artistdata = await User.create(args);
        // const token = signToken(user);
      
        return artistdata ;
        },
    }
}

module.exports = resolvers;