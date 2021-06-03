const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');
const app=express();
app.use(express.urlencoded());
app.use(express.json());
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:slug', courseController.show);

console.log('vao day');

module.exports = router;
