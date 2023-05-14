const { createUser, login, get } = require("../controllers/usercontroller");
const {protect} = require('../middleware/auth')
const router = require("express").Router();

router.post("/", createUser);
router.post("/login", login);
router.get("/for/testing/only", protect, get);

module.exports = router;
