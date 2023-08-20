// const Reps = require("../models/Reps");

const create = async (req, res) => {
  try {
    await console.log(req.body);
    res.status(201).send(req.body);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { create };
