const db = require('./connection');
const { User, Event } = require('../models');

db.once('open', async () => {

    await Event.deleteMany();
    
    const events = await Event.insertMany([
        {
            name: "Lightning in a Bottle",
            date: "May 24, 2023",
            location: "Bakersfield, California",
            venue: "Buena Vista Lake",
            artists: ["Antennae", "Clozee", "Player Dave", "Chase Manhattan", "Rexx Life Raj"]
        },
        {
            name: "Shambhala",
            date: "July 23, 2023",
            location: "British Columbia, Canada",
            venue: "Salmo River Ranch",
            artist: ["Mura Masa", "Hermitude", "Of The Trees", "Mala", "Tor"]
        },
        {
            name: "Sonic Bloom",
            date: "June 15, 2023",
            location: "Rya, Colorado",
            venue: "Humingbird Ranch",
            artist: ["Clozee", "Dirtwire", "Inzo", "Notlo", "Maddy O'Neal"]
        },
        {
            name: "Secret Dreams",
            date: "August 17, 2023",
            location: "Thornville, Ohio",
            venue: "Legend Valley",
            artist: ["Yheti", "Tipper", "Daily Bread", "Papadosio", "Kursa"]
        },
        {
            name: "What The Festival",
            date: "July 25, 2023",
            location: "Dufur, Oregon",
            venue: "Wolf Run Ranch",
            artist: ["Stooki Sound", "FKJ", "Electric Mantis", "Sofi Tucker", "Lafa Taylor"]
        },
        {
            name: "Actualize Art Festival",
            date: "October 13, 2023",
            location: "Grass Valley, Oregon",
            venue: "On The Ranch",
            artist: ["Eastghost", "Sylk", "Pop The Trunk", "Dan Villa", "Blanck"]
        },
        {
            name: "The Untz Festival",
            date: "May 12, 2023",
            location: "Browns Valley, California",
            venue: "Sycamore Ranch",
            artist: ["Location", "Fly", "Blaap", "Hamdi", "Ternion Sound"]
        },
        {
            name: "Lucidity Festival",
            date: "April 8, 2024",
            location: "Santa Barbara, California",
            venue: "Live Oak Campground",
            artist: ["Ivy Lab", "Mike Love", "Morillo", "Savej", "Mr. Carmack"]
        }
    ]);

    console.log('events seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Jared',
        lastName: 'P',
        email: 'keramel@gmail.com',
        // process ENV for pass? Maybe we can gitignore the seed file?
        password: 'password', 
        artist: true,
        artistName: "K E R A M E L",
        heroImage: "Keramel-V.mp4",
        secondaryImage: "keramel-2.jpg",
        thumbnailImg: "keramel-5.jpg",
        artistDescription: "Keramel is a electronic musician hailing from Los Angeles and currently residing in Portland. Blending genres and creating his own unique sound, Keramel produces mesmerizing electronic beats that are entirely his own. He is a master of genre blending, fusing elements of hip hop, ambient, and experimental music to create a sound that is both captivating and otherworldly. With his enigmatic style and captivating music, Keramel is a rising star in the electronic music scene.",
        spotifyId: "1lCQ5s85YXUlfEOfesbcTD",
        instagramUrl: "https://www.instagram.com/ker.a.mel/?hl=en",
        spotifyUrl: "https://open.spotify.com/artist/1lCQ5s85YXUlfEOfesbcTD",
        soundcloudUrl: "https://soundcloud.com/keramelmusic",
        // event id's are being stored only at this time. Will need to look at when connecting event component
        events: [events[0], events[4], events[5], events[6]]
    });

    await User.create({
        firstName: 'T',
        lastName: 'F',
        email: 'tfmarz@gmail.com',
        password: 'password12345',
        artist: true,
        artistName: "TF Marz",
        heroImage: "TFMarz-V.mp4",
        secondaryImage: "TFMarz-2.jpg",
        thumbnailImg: "TFMarz-3.jpg",
        artistDescription: "TF Marz is a Denver-based musician who produces his own soulful electronic beats. With a unique blend of hip hop, R&B, and feel-good vibes, TF Marz's music is a testament to his versatility and skill as a producer. His beats are simultaneously smooth and hard-hitting, creating a sound that is both uplifting and energizing. With a focus on creating music that makes people feel good, TF Marz's music is perfect for those who want to dance and vibe out to something that has substance. His dedication to his craft and passion for creating memorable music make him an iconic member of this community.",
        spotifyId: "5ue8Z5w3uBorBDZtwhsRy2",
        instagramUrl: "https://www.instagram.com/tfmarz/",
        spotifyUrl: "https://open.spotify.com/artist/5ue8Z5w3uBorBDZtwhsRy2",
        soundcloudUrl: "https://soundcloud.com/tfmarz",
        events: [ events[1], events[2], events[3], events[7]]
    });

    console.log('users seeded');

    process.exit();
});
