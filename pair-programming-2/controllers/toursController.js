const Tour = require("../models/toursModel");

// Create a new tour
const createTour = async (req, res) => {
  try {
    const { image, date, title, info, location, duration, cost } = req.body;
    if (!image || !date || !title || !info || !location || !duration || !cost) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newTour = new Tour({ image, date, title, info, location, duration, cost });
    const savedTour = await newTour.save();

    res.status(201).json(savedTour);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET all tours
const getTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET a single tour by ID
const getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) {
      return res.status(404).json({ error: "Tour not found" });
    }
    res.json(tour);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// DELETE a tour by ID
const deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    if (!tour) {
      return res.status(404).json({ error: "Tour not found" });
    }
    res.json({ message: "Tour deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update (Patch) a single tour by ID
const patchTour = async (req, res) => {
  try {
    const tour = await Tour.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!tour) {
      return res.status(404).json({ error: "Tour not found" });
    }

    res.json(tour);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Replace (Put) a single tour by ID
const putTour = async (req, res) => {
  try {
    const tour = await Tour.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!tour) {
      return res.status(404).json({ error: "Tour not found" });
    }

    res.json(tour);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createTour,
  getTours,
  getTour,
  deleteTour,
  patchTour,
  putTour,
};
