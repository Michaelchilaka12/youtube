const express = require("express");
const { validateVideo } = require("../controllers/videoController");

const router = express.Router();

router.post("/validate", validateVideo);

module.exports = router;
