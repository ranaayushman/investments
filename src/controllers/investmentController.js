const Investment = require("../models/Investment");

exports.getInvestments = async (req, res) => {
  try {
    const investments = await Investment.find({ userId: req.user.userId });
    res.json(investments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching investments" });
  }
};
