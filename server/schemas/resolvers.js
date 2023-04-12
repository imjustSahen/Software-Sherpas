const { User, Event } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

// Will need to add context to resolvers after contructing
const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                 const userData = await User
                .findOne({_id: context.user._id })
                .select('-__v -password');

                return userData;
            }
            throw new AuthenticationError('You must be logged in!');
        },
        users: async (parent, args) => {
            try {
               return await User.find({}); 
            } catch {
                throw new Error('Could not find Users');
            };
        },
        userbyid: async (parent, { id }) => {
            try {
                return await User.findById( id );
            } catch {
                throw new Error('Could not find User matching given id')
            };
        },
        events: async (parent, args) => {
            try {
              return await Event.find({});  
            } catch {
                throw new Error('Could not find events');
            };
        },
        eventbyid: async (parent, { id }) => {
            try {
                return await Event.findById( id );  
            } catch {
                throw new Error('Could not find Event matching given id');
            };
        }
    },

    Mutation: {
        // User Mutations
        addUser: async (parent, args) => {
            try {
               const userdata = await User.create(args); 
               // const token = signToken(user);
               return userdata;
            } catch {
                throw new Error('Could not create user');
            };
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
            // -----------------------------> remove user w/ context example
            // if (context.user) {
            //     const user = await User.findOneAndUpdate(
            //         { _id: context.user._id },
            //         { $pull: { savedBooks: { bookId }}},
            //         { new: true }
            //     )

            //     return user;
            // }

            // throw new AuthenticationError('You need to be logged in to delete a book!')
            // ------------------------------>
        },

        // Event Mutations
        addEvent: async (parent, args) => {
            try {
                const eventdata = await Event.create(args);
                return eventdata ; 
            } catch {
                throw new Error('Could not create event');
            }
       
        },
        updateEvent: async (parent, {id, EventInput}) => {
            try {
                const eventdata = await Event.findByIdAndUpdate(id, EventInput, {new: true});
                return eventdata;
            } catch {
                throw new Error('Could not update event');
            }
        },
        removeEvent: async (parent, { id }) => {
            try {
                const event = await Event.findByIdAndDelete( id );
                return event;
            } catch {
                throw new Error('Could not delete event');
            }
        }
    }
}

module.exports = resolvers;