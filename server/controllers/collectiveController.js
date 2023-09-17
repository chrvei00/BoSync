const collective = require("../models/collective");
const collectiveService = require("../services/collectiveService");

exports.getAllCollectives = async (req, res) => {
  try {
    const collectives = await collectiveService.getAllCollectives();
    res.json({ data: collectives, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCollectiveByName = async (req, res) => {
  try {
    const collective = await collectiveService.getCollectiveByName(
      req.params.name
    );
    res.json({ data: collective, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCollectiveById = async (req, res) => {
  try {
    const collective = await collectiveService.getCollectiveById(req.params.id);
    res.json({ data: collective, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createCollective = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "du må ha navn" });
    } else if (await collectiveService.getCollectiveByName(name)) {
      return res.status(400).json({ message: "navn allerede i bruk" });
    } else {
      req.session.collective = await collectiveService.createCollective(
        new collective({ name: name, members: [req.session.user._id] })
      );
      res
        .status(201)
        .json({ data: req.session.collective, message: "collective created" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCollective = async (req, res) => {
  try {
    const collective = await collectiveService.updateCollective(
      req.params.id,
      req.body
    );
    req.session.collective._id === collective._id
      ? (req.session.collective = collective)
      : null;
    res.json({ data: collective, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
