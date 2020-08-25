const express = require("express");
const { User } = require("../models/index");
const router = express.Router();

//create a user/register
//modify user data
//delete user by admin


router.get("/", async (req, res) => {
    const users = await User.findAll();
    res.send(users);
});

module.exports = router;