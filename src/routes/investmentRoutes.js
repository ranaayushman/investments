const express = require("express");
const { getInvestments } = require("../controllers/investmentController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getInvestments);

module.exports = router;
