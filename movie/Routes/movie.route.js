const express = require("express");

const router = express.Router();
const {
    createMovie,
    updateMovie,
    deleteMovie,
    rattingMovie,
    commentMovie,
    filterMovie,
} = require("../controllers/movie.controller");
const isValid = require("../middlewares/movie.middleware");

router.post("/create", isValid, createMovie);
router.patch("/update/:id", isValid, updateMovie);
router.delete("/delete/:id", deleteMovie);
router.post("/ratting/:id", rattingMovie);
router.post("/comment/:id", commentMovie);
router.post("/filter", filterMovie);

module.exports = router;
