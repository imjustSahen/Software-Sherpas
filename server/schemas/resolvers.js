const { User } = require('../models');

const resolvers = {
    Query: {
        users: async (parent, args) => {
            return await User.find({});
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
        const userdata = await User.create(args);
        // const token = signToken(user);
      
        return userdata ;
        },
    }
}

module.exports = resolvers;