const express = require("express");
const router = express.Router();
const { create, getTodayData, updateData } = require("../components/reps");

router.route("/").get(getTodayData).post(create).put(updateData);

module.exports = router;
