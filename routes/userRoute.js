const express = require("express");
const { login, signUp, GoogleAuthentication } = require("../controller/userController");
const router = express.Router();
router.route("/login").post(login);
router.route("/signup").post(signUp);
router.route("/googleAuth").post(GoogleAuthentication);
module.exports = router;
