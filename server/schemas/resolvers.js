const { User, Event } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

// Will need to add context to resolvers after contructing once JWT working
const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                try {
                    const userData = await User
                        .findOne({ _id: context.user._id }).populate('events');
                    return userData;
                } catch {
                throw new AuthenticationError('You must be logged in!');
                };
            };
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
                return await User.findById(id);
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
                return await Event.findById(id);
            } catch {
                throw new Error('Could not find Event matching given id');
            };
        }
    },

    Mutation: {
        // User Mutations
        login: async (parent, { email, password }) => {
            try {
                const user = await User.findOne({ email });

                if (!user) {
                    throw new AuthenticationError('No user found with this email address');
                };

                const correctPW = await user.isCorrectPassword(password);

                if (!correctPW) {
                    throw new AuthenticationError('Incorrect credentials');
                };

                const token = signToken(user);
                return { token, user };
            } catch {
                throw new AuthenticationError('failed to authenticate user');
            };
        },
        addUser: async (parent, {input}) => {
            try {
                console.log('hit');
                console.log(input);
                const user = await User.create(input);
                console.log('hit2');
                return user ;
            } catch (e) {
                console.log(e);
                throw new Error('Could not create user with input type');
            }
        },
        updateUser: async (parent, { id, userInput }) => {
            try {
                const updateduser = await User.findByIdAndUpdate(id, userInput, { new: true });
                return updateduser;
            } catch {
                throw new Error('Could not update User.')
            };
            //     if (context.user) {
            //     const user = await User.findOneAndUpdate(
            //         { _id: context.user._id },
            //         { $pull: { savedBooks: { bookId }}},
            //         { new: true }
            //     )

            //     return user;
            //     }

            // throw new AuthenticationError('You need to be logged in to delete a book!')
        },
        removeUser: async (parent, { id }) => {
            try {
                const user = await User.findOneAndDelete(id);
                return user;
            } catch (e) {
                console.log(e);
                throw new Error('Could not remove user')
            };
        },

        addEvent: async (parent, { eventInput }, context) => {
            // const eventdata = await Event.create(args);
            // return eventdata ; 

            // if (context.user) {
                try {
                    console.log('hit');
                    console.log(eventInput);

                    const event = await Event.create(eventInput);
                    console.log(event);

                    const updateduser = await User.findOneAndUpdate(
                        { _id: context.user._id },
                        { $push: { events: event }},
                    );
                    console.log('hit2');
                    return updateduser ;
                } catch (e) {
                    console.log(e);
                    throw new Error('Could not create event');
                }
            // } else {
            //     throw new AuthenticationError('You need to be logged in!');
            // };
        },


        // updateEvent: async (parent, { id, eventInput }) => {
        //     try {
        //         const eventdata = await Event.findByIdAndUpdate(id, eventInput, { new: true });
        //         return eventdata;
        //     } catch {
        //         throw new Error('Could not update event');
        //     }
        //     if (context.user) {
        //         const user = await User.findOneAndUpdate(
        //             { _id: context.user._id },
        //             { $addToSet: { savedBooks: bookData }},
        //             { new: true }
        //         )
        //         return user;
        //     }

        // throw new AuthenticationError('You need to be logged in to save a book!')
        //----------->
        // try {
        //     // Check if user is authenticated
        //     if (!user) {
        //       throw new AuthenticationError('You must be logged in to update an event');
        //     }

        //     // Find the event to update
        //     const event = await Event.findById(id);

        //     // Check if event exists
        //     if (!event) {
        //       throw new UserInputError('Event not found');
        //     }

        //     // Check if user is the owner of the event
        //     if (event.user.toString() !== user.id) {
        //       throw new ForbiddenError('You are not authorized to update this event');
        //     }

        //     // Update the event with the new input
        //     event.name = input.name || event.name;
        //     event.date = input.date || event.date;
        //     event.location = input.location || event.location;
        //     event.venue = input.venue || event.venue
        //     event.artists = input.artists || event.artists
        //     event.poster = input.poster || event.poster

        //     // Save the updated event to the database
        //     const updatedEvent = await event.save();

        //     // Return the updated event
        //     return updatedEvent;
        //   } catch (err) {
        //     throw new ApolloError('Failed to update event', err);
        //   }
        // },
        removeEvent: async (parent, { id }, context) => {
            if (context.user) {
                try {
                    // const event = await Event.findByIdAndDelete(id);
                    // return event;

                    const event = await Event.findByIdAndDelete({ id })

                    await User.findOneAndUpdate(
                        { _id: context.user._id },
                        { $pull: { events: { id } } }
                    );

                    return event;
                } catch (e) {
                    console.log(e);
                    throw new Error('Could not delete event');
                };
            } else {
                throw new AuthenticationError('You need to be logged in to delete an event')
            };
        }
    }
}

module.exports = resolvers;