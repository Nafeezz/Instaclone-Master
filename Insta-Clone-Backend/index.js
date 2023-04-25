const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
//connect to DataBase
const server = process.env.DATABASE_URL || "mongodb+srv://Instaclone:Nafeez2901@cluster0.asbvmxl.mongodb.net/test";

mongoose.connect(server, { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("connected to DB");
    }
);
// console.log(process.env.PORT);
app.listen( 7000, () => console.log("Server running ....."));