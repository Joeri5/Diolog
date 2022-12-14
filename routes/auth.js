const express = require('express');

const {singup, login} = require("../controllers/auth.js");

const router = express.Router();

router.post('/signup', singup);
router.post('/login', login);

module.exports = router;
