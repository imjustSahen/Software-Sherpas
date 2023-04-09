const { Artist } = require('../models');

const resolvers = {
    Query: {
        artists: async (parent, args) => {
            return await Artist.find({});
        }
    },

    Mutation: {
        addArtist: async (parent, args) => {
        const artist = await Artist.create(args);
        // const token = signToken(user);
      
        return { artist };
        },
    }
}

module.exports = resolvers;