const { Artist } = require('../models');

const resolvers = {
    Query: {
        allArtist: async (parent, args) => {
            const artistData = await Artist.find({});

            return artistData;
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