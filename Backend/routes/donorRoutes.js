const express = require("express");
const router = express.Router();
const Donor = require("../models/Donor");

// REGISTER DONOR API
router.post("/", async (req, res) => {
  try {
    const donor = await Donor.create(req.body);

    res.status(201).json({
      message: "Donor registered successfully",
      donor,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to register donor",
    });
  }
});

module.exports = router;
