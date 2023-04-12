const { User, Event } = require('../models');

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
        updateUser: async (parent, {id, UserInput}) => {
            try {
                const updateduser = await User.findByIdAndUpdate(id, UserInput, {new: true});
                return updateduser;
            } catch {
                throw new Error('Could not update User.')
            }
        },

        addEvent: async (parent, args) => {
            const eventdata = await Event.create(args);

            return eventdata ;
        }
    }
}

module.exports = resolvers;