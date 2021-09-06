const express = require('express')
const postController = require('../controllers/postController')
const router = express.Router()

// "==>/posts/"
router.post('/', postController.createPost)
router.get('/', postController.getAllPosts)
router.get('/:id', postController.getOnePost)
router.patch('/:id', postController.updatePost)
router.delete('/:id', postController.deletePost)

module.exports = router