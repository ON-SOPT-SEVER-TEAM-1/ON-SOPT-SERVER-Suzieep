const express = require('express');
const router = express.Router();
const postController = require('../../controller/postController');
const post = require('../../models/post');

router.post('/', postController.createPost);

router.get('/',postController.readPosts);

router.post('/:postId/like',postController.createLike);

module.exports = router;