const Reps = require("../models/Reps");

const create = async (req, res) => {
  try {
    const Data = await Reps.create(req.body);
    res.status(201).send(req.body);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getTodayData = async (req, res) => {
  try {
    console.log(req.params.date);
    const Data = await Reps.findOne({ date: req.params.date });
    res.status(201).send(Data);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateData = async (req, res) => {
  try {
    console.log(req.params.date);
    const Data = await Reps.findOneAndUpdate(
      { date: req.params.date },
      req.body
    );
    console.log(Data);
    res.status(201).send(Data);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { create, getTodayData, updateData };
