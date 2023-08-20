const express = require("express");
const router = express.Router();
const { create } = require("../components/reps");

router.route("/").post(create);

module.exports = router;
