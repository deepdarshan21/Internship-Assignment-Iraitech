const bcrypt = require("bcryptjs");
const UserDB = require("../models/users");

// @desc    Add New User(Register)
// @route   POST /api/user/auth/register
// @access  Public
exports.addNewUser = async (req, res) => {
    const { firstName, lastName, userName, email, mobileNumber, address, password } = req.body;

    await UserDB.create(
        {
            firstName,
            lastName,
            userName,
            email,
            mobileNumber,
            address,
            password: await bcrypt.hash(password, 10),
        },
        (err) => {
            if (err) {
                if (err.errors) {
                    res.status(422).json({
                        success: false,
                        errorMessage: "Please Check Inputs again",
                    });
                } else if (err.code === 11000) {
                    res.status(409).json({
                        success: false,
                        errorMessage: "Conflict",
                    });
                } else {
                    res.status(500).json({
                        success: false,
                        errorMessage: "Internal Server Error",
                    });
                }
            } else {
                res.status(201).json({
                    success: true,
                    successMessage: "Successfully Registered",
                });
            }
        }
    );
};
