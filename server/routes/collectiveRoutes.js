const express = require("express");

const {
  getAllCollectives,
  getCollectiveByName,
  getCollectiveById,
  createCollective,
  updateCollective,
} = require("../controllers/collectiveController");

const router = express.Router();

router.route("/all").get(getAllCollectives);
router.route("/name/:name").get(getCollectiveByName);
router.route("/id/:id").get(getCollectiveById);
router.route("/create").post(createCollective);
router.route("/update/:id").post(updateCollective);

module.exports = router;
