const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserDB = require("../models/users");
require("dotenv").config("../.env");

const JWT_SECRET = process.env.JWT_SECRET;

// @desc    Add New User(Register)
// @route   POST /api/user/auth/register
// @access  Public
exports.register = async (req, res) => {
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
                    return res.status(422).json({
                        success: false,
                        errorMessage: "Please Check Inputs again",
                    });
                } else if (err.code === 11000) {
                    return res.status(409).json({
                        success: false,
                        errorMessage: "Conflict",
                    });
                } else {
                    return res.status(500).json({
                        success: false,
                        errorMessage: "Internal Server Error",
                    });
                }
            } else {
                return res.status(201).json({
                    success: true,
                    successMessage: "Successfully Registered",
                });
            }
        }
    );
};

// @desc    Login a user
// @route   POST /api/user/auth/login
// @access  Public
exports.login = async (req, res) => {
    const { userName, password } = req.body;

    const user = await UserDB.findOne({ userName }).lean();

    if (!user) {
        return res.status(404).json({
            success: false,
            errorMessage: "Invalid User-Name/Password",
        });
    }

    if (await bcrypt.compare(password, user.password)) {
        return res.status(200).json({
            success: true,
            successMessage: "Successfully Logged-in",
            token: jwt.sign(
                {
                    id: user._id,
                    userName: user.userName,
                },
                JWT_SECRET
            ),
        });
    } else {
        return res.status(404).json({
            success: false,
            errorMessage: "Invalid User-Name/Password",
        });
    }

    res.status(500).json({
        success: false,
        errorMessage: "Internal Server Error",
    });
};

// @desc    Send user details
// @route   GET /api/user/
// @access  Public
exports.userDetails = async (req, res) => {
    const { token } = req.query;

    try {
        const decodedToken = jwt.verify(token, JWT_SECRET);

        const _id = decodedToken.id;

        const user = await UserDB.findById(_id);

        return res.status(200).json({
            success: true,
            successMessage: "User Found",
            data: {
                firstName: user.firstName,
                lastName: user.lastName,
                userName: user.userName,
                email: user.email,
                mobile: user.mobileNumber,
                address: user.address,
            },
        });
    } catch (err) {
        return res.status(404).json({
            success: false,
            errorMessage: "Invalid Token",
        });
    }
};
