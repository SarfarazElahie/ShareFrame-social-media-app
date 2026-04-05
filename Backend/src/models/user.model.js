const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: { 
        type: String, 
        required: true,
        unique: true  
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel;