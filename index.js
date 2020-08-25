const express = require("express");
const app = express();
const users = require("./routes/user");
const profiles = require("./routes/profile");
const notes = require("./routes/notes");

//app.use(express.json);

const port = process.env.PORT || 3000;
app.use(express.json());

app.use("/users", users);
app.use("/profiles", profiles);
app.use("/notes", notes);

app.get("/", (req, res) => {
  res.send("Ola Mundo");
});

app.listen(port, () => {
  console.log(`Server started on localhost:${port}`);
});
