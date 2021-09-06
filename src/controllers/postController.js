const postModel = require('../models/post')

exports.getAllPosts = async(req, res) => {
    try {
        const posts = await postModel.find({})
        return res.send(posts)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
exports.getOnePost = async(req, res) => {
    try {
        const post = await postModel.findById(req.params.id)
        if (!post)
            throw new Error("Post not found!")
        res.send(post)
    } catch (error) {
        res.status(404).send(error.message)
    }
}
exports.createPost = async(req, res) => {
    try {
        const post = await postModel.create(req.body)
        return res.send(post)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
exports.updatePost = async(req, res) => {
    try {
        const post = await postModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!post)
            throw new Error("Post not found")
        return res.send(post)
    } catch (error) {
        res.status(404).send(error.message)
    }
}
exports.deletePost = async(req, res) => {
    try {
        const post = await postModel.findByIdAndDelete(req.params.id)
        if (!post)
            throw new Error("Post not found")
        return res.send(post)
    } catch (error) {
        res.status(404).send(error.message)
    }
}