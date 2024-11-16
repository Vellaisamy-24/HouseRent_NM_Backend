const express = require("express");
const {
  CreateBooking,
  fetchBookings,
} = require("../controller/BookingController");
const router = express.Router();
router.post("/createBooking", CreateBooking);
router.get("/fetchBookings/:id", fetchBookings);
module.exports = router;
