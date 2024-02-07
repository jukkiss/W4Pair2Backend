const User = require('./usersModel');
const connectDB = require('./db');

// Yhdistetään tietokantaan
connectDB();

// Lisätään käyttäjät tietokantaan
const users = [
    {
        id: 1,
        username: "adminUser",
        email: "admin@example.com",
        role: "admin",
    },
    {
        id: 2,
        username: "guestUser",
        email: "guest@example.com",
        role: "guest",
    },
    {
        id: 3,
        username: "agencyUser",
        email: "agency@example.com",
        role: "travel agency",
    },
    {
        id: 4,
        username: "user1",
        email: "user1@example.com",
        role: "guest",
    },
    {
        id: 5,
        username: "user2",
        email: "user2@example.com",
        role: "guest",
    },
];

// Tallennetaan käyttäjät tietokantaan
User.insertMany(users)
  .then(() => {
    console.log('Käyttäjät lisätty tietokantaan');
  })
  .catch((err) => {
    console.error('Virhe käyttäjien lisäämisessä tietokantaan:', err);
  });
