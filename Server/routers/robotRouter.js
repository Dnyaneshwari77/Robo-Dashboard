// robotRouter.js

const express = require("express");
const router = express.Router();
const Robot = require("../model/roboData"); // Assuming you have a Robot model defined

// Route to get robots by operational status
router.get("/robots", async (req, res) => {
  try {
    const { operational_status } = req.query;

    if (!operational_status) {
      const allrobots = await Robot.find();
      return res.status(200).json({ data: allrobots, count: allrobots.length });
    }

    const robots = await Robot.find({ operational_status });

    if (!robots || robots.length === 0) {
      return res.status(404).json({
        message: "No robots found with the specified operational status",
      });
    }

    res.status(200).json({ data: robots, count: robots.length });
  } catch (error) {
    console.error("Error fetching robots by operational status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
