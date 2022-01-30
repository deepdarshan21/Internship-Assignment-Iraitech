const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userOperations = require("./routes/users");

require("dotenv").config();

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/user", userOperations);
app.get("*", (req, res) => {
    res.send("Server is up :)");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is runnign at port: ${PORT}`);
});
