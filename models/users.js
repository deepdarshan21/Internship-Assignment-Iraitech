const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            trim: true,
            required: [true, "Invalid First-Name"],
            match: [/[A-Z][a-z]*/, "Invalid First-Name"],
        },
        lastName: {
            type: String,
            trim: true,
            required: false,
            match: [/[A-Z][a-z]*/, "Invalid Last-Name"],
        },
        userName: { 
            type: String, 
            required: true, 
            unique: [true, "Invalid User-Name"] },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: [true, "Invalid Email"],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid Email"],
        },
        mobileNumber: {
            type: String,
            trim: true,
            unique: true,
            required: [true, "Invalid Mobile-Number"],
            match: [/^[6789]\d{9}$/, "Invalid Mobile-Number"],
        },
        address: {
            type: String,
            required: false,
        },
        password: {
            type: String,
            required: [true, "Invalid Password"],
        },
    },
    { collection: "iraitech" }
);

const UserDB = mongoose.model("UserSchema", UserSchema);

module.exports = UserDB;
