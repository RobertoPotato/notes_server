//delete one of my notes

const express = require("express");
const { Note, User } = require("../models/index");
const router = express.Router();

//title
//content
//imageUrl
//userId

//create my note
router.post("/", async (req, res) => {
  const notes = await Note.create({
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.imageUrl,
    userId: req.body.userId,
  });

  res.send(notes);
});

//see all my notes
router.get("/mine/:myId", async (req, res) => {
  const notes = await Note.findAll({
    where: {
      userId: req.params.myId,
    },
  });

  res.send(notes);
});

//modify one of my notes
router.put("/:id", async (req, res) => {
  const newNote = await Note.update(
    {
      title: req.body.title,
      content: req.body.content,
      imageUrl: req.body.imageUrl,
      userId: req.body.userId,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  res.send(newNote);
});

//delete one of my notes
router.delete("/:id", async (req, res) => {
  const note = await Note.findOne({
    where: {
      id: req.params.id,
    },
  });

  Note.destroy({
    where: {
      id: req.params.id,
    },
  }).then(res.status(200).send(note));
});

router.get('/', async (req, res) => {
    const notes = await Note.findAll();

    res.send(notes);
})

module.exports = router;
