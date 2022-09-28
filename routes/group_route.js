const express = require('express');
const studentController = require('../controllers/student_controller');

const router = express.Router();

router.route('/')
    .get(studentController.getAllStudents);

module.exports = router;