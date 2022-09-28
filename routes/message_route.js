const express = require('express');
const studentController = require('../controllers/student_controller');

const router = express.Router();

router.route('/')
    .get(studentController.sendMessage);
router.route('/:id')
    .get(studentController.sendMessage);

module.exports = router;