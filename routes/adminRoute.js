const express = require("express");
const {
  getAllUsers,
  findUser,
  deleteUser,
  deleteAllUser,
} = require("../controller/adminController");
const {
  authentication,
  adminAuthorization,
} = require("../Middleware/authMiddleware");
const router = express.Router();
router.route("/getAllUsers").get(
  // authentication, adminAuthorization,
  getAllUsers
);
router.route("/getUser").post(authentication, adminAuthorization, findUser);
router
  .route("/deleteUser")
  .delete(authentication, adminAuthorization, deleteUser);
router
  .route("/deleteAllUser")
  .delete(authentication, adminAuthorization, deleteAllUser);

module.exports = router;
