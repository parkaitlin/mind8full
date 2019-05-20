const express = require('express');
const router = express.Router();
const controller = require('../controllers/authC');

router.post('/login', controller.authorize);
router.post('/register', controller.new);
router.post('/logout', controller.logout)


module.exports = router;