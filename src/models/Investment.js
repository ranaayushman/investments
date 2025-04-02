const mongoose = require("mongoose");

const investmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: { type: String, enum: ["Mutual Fund", "Stock"], required: true },
  name: { type: String, required: true },
  amount: { type: Number, required: true }
});

module.exports = mongoose.model("Investment", investmentSchema);
