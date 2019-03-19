const express = require("express");
const router = express.Router();

const Festival = require("../../models/Festival");

// @route  GET /api/festivals/test
// @desc   Tests festivals route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Festivals works" }));

// @route  POST /api/festivals
// @desc   Tests festivals route
// @access Private
router.post("/festivals", (req, res) => {});

module.exports = router;
