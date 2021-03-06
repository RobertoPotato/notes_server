const express = require("express");
const { Profile } = require("../models/index");
const router = express.Router();

//TODO Test route, to be removed
router.get("/", async (req, res) => {
  const profiles = await Profile.findAll();
  res.send(profiles);
});

//create profile
router.post("/", async (req, res) => {
  const profile = await Profile.create({
    username: req.body.username,
    avatar: req.body.avatar,
    profilePicture: req.body.profilePicture,
    bio: req.body.bio,
    userId: req.body.userId,
  });
  res.send(profile);
});

//modify profile
router.put("/:id", async (req, res) => {
  const updatedProfile = await Profile.update(
    {
      username: req.body.username,
      avatar: req.body.avatar,
      profilePicture: req.body.profilePicture,
      bio: req.body.bio,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  res.send(updatedProfile);
});

//get profile
router.get("/:userid", async (req, res) => {
  const profiles = await Profile.findOne({
    where: { userId: req.params.userid },
    attributes: {
      exclude: ["id", "userId", "createdAt"],
    },
  });

  res.send(profiles);
});

//TODO delete profile

module.exports = router;
