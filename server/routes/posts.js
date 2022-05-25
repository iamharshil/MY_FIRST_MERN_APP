import express from 'express';

import { getPosts, createPost } from '../controller/posts.js';

const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('THis works');
// });
router.get('/', getPosts);
router.post('/', createPost);

export default router;