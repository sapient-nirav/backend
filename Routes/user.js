const express = require("express");
const router = express.Router();
const userAct = require("../Controllers/user");

router.post("/login", userAct.login);
router.post("/signup", userAct.signup);
router.get("/get-users", userAct.getAllUsers);

module.exports = router;
