const mongoose = require("mongoose");

const connectDB = async () => {
    mongoose
        .connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true, //make this true
            autoIndex: true, //make this also true
        })
        .then(() => {
            console.log("Connected to Database");
        })
        .catch((err) => {
            console.error("Can't connect to Database: ", err);
            process.exit();
        });
};

module.exports = connectDB;
