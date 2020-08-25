const express = require("express");
const { User } = require("../models/index");
const router = express.Router();

//create a user/register
//modify user data
//delete user by admin

//firstName
//lastName
//email
//password
//rememberToken
//apiToken

router.post("/", async (req, res) => {
  const user = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });
  res.send(user);
});

router.put("/:id", async (req, res) => {
  const user = await User.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.send("Okay");
});

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

module.exports = router;
