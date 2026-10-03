const express = require("express");
const {shortenURL, redirectURL, getURL,getAllURLs,deleteURL} = require("../controllers/urlcontrollers");
const router = express.Router();


router.post("/shorten", shortenURL);
router.get("/url/:shortCode", getURL);
router.get("/urls", getAllURLs);
router.get("/:shortCode", redirectURL);
router.delete("/url/:shortCode", deleteURL);

module.exports = router;