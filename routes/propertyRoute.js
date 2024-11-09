const express = require("express");
const {
  createProperty,
  getAllProperty,
  findProperty,
  deleteProperty,
  updateProperty,
} = require("../controller/propertyController");
const router = express.Router();
router.route("/createProperty").post(createProperty);
router.route("/fetchAllProperty").get(getAllProperty);
router.route("/findPropertyById/:id").get(findProperty);
router.route("/deletePropertyById/:id").delete(deleteProperty);
router.route("/updatePropertyById/:id").put(updateProperty);
module.exports = router;
