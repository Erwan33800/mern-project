const router = require('express').Router();
const postController = require('../controllers/post.controller');

// CRUD post
router.get('/', postController.readPost);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;

