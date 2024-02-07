const Service = require("../models/servicesModel");

// Luo uusi palvelu
const createService = async (req, res) => {
  try {
    const { icon, title, text } = req.body;
    if (!icon || !title || !text) {
      return res
        .status(400)
        .json({ error: "All fields (icon, title, text) are required" });
    }

    const newService = new Service({ icon, title, text });
    const savedService = await newService.save();

    res.status(201).json(savedService);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Hae kaikki palvelut
const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Hae yksi palvelu id:n perusteella
const getService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }
    res.json(service);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Poista palvelu id:n perusteella
const deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }
    res.json({ message: "Service deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Päivitä (Patch) yksi palvelu id:n perusteella
const patchService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.json(service);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Korvaa (Put) yksi palvelu id:n perusteella
const putService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }// Päivitetyn dokumentin palauttamiseksi
    );

    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.json(service);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createService,
  getServices,
  getService,
  deleteService,
  patchService,
  putService,
};
