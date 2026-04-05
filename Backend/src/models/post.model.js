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
     userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "user",                          
        required: true                        
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
})

const postModel = mongoose.model("post", postSchema);

module.exports = postModel