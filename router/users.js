const express = require("express");
const router = express.Router();

//  Index Page
router.get("/users", (req, res) => res.render("users"));

module.exports = router;
