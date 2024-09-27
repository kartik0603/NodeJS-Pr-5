const { Router } = require("express");
const { getUser, createUser, login, deleteUser } = require("../controllers/user.controller");


const isValid  = require("../middlewares/user.middleware");



const router = Router();

router.get("/", getUser);
router.post("/signup", isValid, createUser);
router.post("/login", isValid, login);
router.delete("/delete/:id", deleteUser);


module.exports = router;