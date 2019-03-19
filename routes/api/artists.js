const express = require("express");
const router = express.Router();

// @route  GET /api/artists/test
// @desc   Tests artists route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Artists works" }));

module.exports = router;
