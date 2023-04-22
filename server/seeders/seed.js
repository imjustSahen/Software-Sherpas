const db = require('../config/connection');
const { User, Event } = require('../models');
const userSeeds = require('./userSeeds.json');
const eventSeeds = require('./eventSeeds.json');

db.once('open', async () => {
  try {
    await Event.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < eventSeeds.length; i++) {
      const { _id, hostArtist } = await Event.create(eventSeeds[i]);
      const user = await User.findOneAndUpdate(
        { artistName: hostArtist},
        {
          $addToSet: {
            events: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
