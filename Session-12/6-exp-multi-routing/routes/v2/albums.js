const router = require("express").Router();
const albums = require("../../data/albums");

router.get("/", (req, res) => {
  res.send("Albums");
});

router.get("/all", (req, res) => {
  res.send(albums);
});

router.get("/:id", (req, res) => {
  const data = albums.find((item) => item.id == req.params.id);
  res.json(data);
});

router.get("/user/:id", (req, res) => {
  const data = albums.filter((item) => item.userId == req.params.id);
  res.json(data);
});

module.exports = router;
