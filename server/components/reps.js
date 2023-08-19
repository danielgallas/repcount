const getData = async (req, res) => {
  try {
    res.status(200).json({ req });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { getData };
