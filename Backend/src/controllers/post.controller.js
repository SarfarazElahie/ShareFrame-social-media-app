const postModel = require("../models/post.model.js")
const uploadFile = require("../services/storage.service.js")
const userModel = require("../models/user.model.js")

const createPost = async(req, res)=>{
    try {

        const { userName, caption } = req.body

        let user = await userModel.findOne({ userName })

         if (!user) {
            user = await userModel.create({ 
                userName 
            })
        }

        const result = await uploadFile(req.file.buffer);
    
        const post = await postModel.create({
            image: result.url,
            caption: caption,
            userId : user._id
        })
        
        return res.status(201).json({
            message: "Post created succesfully",
            post
        })
    } catch (error) {
         return res.status(500).json({
            message: "Error creating post",
            error: error.message
        });
    }
    
}

const getPosts = async(req, res)=>{
    try {
        const posts = await postModel.find().populate('userId', 'userName createdAt');

        return res.status(200).json({
            message: "Posts fetched succesfully",
            posts
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error fetching posts",
            error: error.message
        });
    }
    
}

module.exports = {createPost, getPosts};