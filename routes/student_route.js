const express = require('express');
const studentController = require('../controllers/student_controller');

const router = express.Router();

router.route('/')
    .post(studentController.addStudent)
    .get(studentController.getStudent);
router.route('/:id')
    .post(studentController.addStudent)
    .get(studentController.getStudent);

module.exports = router;