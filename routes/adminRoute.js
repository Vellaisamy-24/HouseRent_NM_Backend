const express = require("express");
const {
  getAllUsers,
  findUser,
  deleteUser,
  deleteAllUser,
} = require("../controller/adminController");
const router = express.Router();
router.route("/getAllUsers").get(getAllUsers);
router.route("/getUser").post(findUser);
router.route("/deleteUser").delete(deleteUser);
router.route("/deleteAllUser").delete(deleteAllUser);

module.exports = router;
