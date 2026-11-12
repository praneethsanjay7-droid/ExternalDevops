const mongoose = require("mongoose");
const User = require("./models/signIn");

async function seedDB() {
    await mongoose.connect("mongodb://127.0.0.1:27017/usersDB", {
        bufferCommands: false
    });
    await User.insertMany([
        {
            username: "john_doe",
            password: "password123"
        },
        {
            username: "jane_smith",
            password: "password456"
        }
    ]);
}

seedDB()
    .then(() => {
        console.log("Database seeded");
        mongoose.connection.close();
    })
    .catch((err) => {
        console.error("Seeding failed:", err.message);
        mongoose.connection.close();
    });
