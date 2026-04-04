const express = require("express");
const multer = require("multer");
const router = express.Router();

const upload = multer({storage: multer.memoryStorage()})

const {createPost , getPosts} = require("../controllers/post.controller.js")

router.post("/create-post", upload.single("image"), createPost)

router.get("/posts", getPosts)

module.exports = router ; 