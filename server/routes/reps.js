const express = require("express");
const router = express.Router();
const { create, getTodayData, updateData } = require("../components/reps");

router.route("/").post(create);
router.route("/:date").get(getTodayData).put(updateData);

module.exports = router;
