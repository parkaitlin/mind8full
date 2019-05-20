const express = require('express');
const router = express.Router();
const controller = require('../controllers/entryC');

router.delete('/:id', controller.deleteEntry);

module.exports = router;