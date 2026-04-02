const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    image: { 
        type: String, 
        required: true
    },
    caption: { 
        type: String, 
        required: true,
        default: "" 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
})

const postModel = mongoose.model("post", postSchema);

module.exports = postModel