const express = require('express');
const router = express.Router();

const {login, studentSignupHandler, teacherSignupHandler} = require('../controller/controllers');


router.post('/teacherSignup', teacherSignupHandler);

router.post('/studentSignup', studentSignupHandler);

router.post('/login', login);

module.exports = router;