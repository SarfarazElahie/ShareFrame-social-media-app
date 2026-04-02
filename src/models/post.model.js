const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    imageUrl: { 
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