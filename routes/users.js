const express = require("express");
const { addNewUser } = require("../controllers/users");

const router = express.Router();

router.route("/auth/register").post(addNewUser);

module.exports = router;
