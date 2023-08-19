const express = require("express");
const router = express.Router();
const { getData } = require("../components/reps");

router.route("/").get(getData);

module.exports = router;
