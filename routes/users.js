const express = require("express");
const { register, login, userDetails } = require("../controllers/users");

const router = express.Router();

router.route("/auth/register").post(register);
router.route("/auth/login").post(login);

router.route("/").get(userDetails);

module.exports = router;
