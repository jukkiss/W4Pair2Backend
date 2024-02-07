const express = require("express");
const toursController = require("../controllers/toursController");
const { checkRole } = require("../middleware/rolesMiddleware");

const router = express.Router();

// Get all tours
router.get("/", toursController.getTours);

// Get a single tour by ID
router.get("/:id", toursController.getTour);

// Create a new tour
router.post("/", checkRole("admin"), toursController.createTour);

// Update a tour by ID
router.put("/:id", checkRole("admin"), toursController.putTour);

// Delete a tour by ID
router.delete("/:id", checkRole("admin"), toursController.deleteTour);

module.exports = router;
