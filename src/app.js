const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service.js")

const app = express();
app.use(express.json());

const upload = multer({storage: multer.memoryStorage()})

app.post("/create-post", upload.single("image"), async(req, res)=>{

    console.log("req.body : ",req.body);
    console.log("req.file : ",req.file);

    const result = await uploadFile(req.file.buffer);
    console.log(result)

    res.send("File Recived.")

})


module.exports = app;