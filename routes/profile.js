const express = require("express");
const { Profile } = require("../models/index");
const router = express.Router();

//username
//avatar
//profilePicture
//bio
//userId

router.get("/", async (req, res) => {
  const profiles = await Profile.findAll();
  res.send(profiles);
});

//create a profile
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

//modify my profile
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

//get my profile
router.get("/:userid", async (req, res) => {
  const profiles = await Profile.findOne({
    where: { userId: req.params.userid },
    attributes: {
      exclude: ["id", "userId", "createdAt"],
    },
  });

  res.send(profiles);
});

//TODO delete my profile

module.exports = router;
