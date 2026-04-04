const postModel = require("../models/post.model.js")
const uploadFile = require("../services/storage.service.js")

const createPost = async(req, res)=>{
    const result = await uploadFile(req.file.buffer);
    
        const post = await postModel.create({
            image: result.url,
            caption: req.body.caption
        })
        
        return res.status(201).json({
            message: "Post created succesfully",
            post
        })
}

const getPosts = async(req, res)=>{
     const posts = await postModel.find()

    return res.status(200).json({
        message: "Posts fetched succesfully",
        posts
    })
}

module.exports = {createPost, getPosts};