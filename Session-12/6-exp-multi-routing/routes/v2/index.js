const router = require("express").Router();
const userRouter = require("./users");
const todosRouter = require("./todos");
const postsRouter = require("./posts");
const photosRouter = require("./photos");
const commentsRouter = require("./comments");
const albumsRouter = require("./albums");

router.use("/users", userRouter);
router.use("/todos", todosRouter);
router.use("/posts", postsRouter);
router.use("/comments", commentsRouter);
router.use("/photos", photosRouter);
router.use("/albums", albumsRouter);

module.exports = router;
