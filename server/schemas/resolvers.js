const { User, Event } = require('../models');

// Will need to add context
const resolvers = {
    Query: {
        users: async (parent, args) => {
            return await User.find({});
        },
        events: async (parent, args) => {
            return await Event.find({});
        }
    },

    Mutation: {
        // User Mutations
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
            };
        },
        removeUser: async (parent, { id }) => {
            try {
                const user = await User.findOneAndDelete(id);
                return user;
            } catch {
                throw new Error('Could not remove user')
            };
            // if (context.user) {
            //     const user = await User.findOneAndUpdate(
            //         { _id: context.user._id },
            //         { $pull: { savedBooks: { bookId }}},
            //         { new: true }
            //     )

            //     return user;
            // }

            // throw new AuthenticationError('You need to be logged in to delete a book!')
        },

        // Event Mutations
        addEvent: async (parent, args) => {
            const eventdata = await Event.create(args);

            return eventdata ;
        }
    }
}

module.exports = resolvers;