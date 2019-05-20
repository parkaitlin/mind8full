const express = require('express');
const router = express.Router();
const controller = require('../controllers/userC')

router.get('/', controller.index);
router.get('/profile', controller.profile);
router.get('/random', controller.munch);
router.get('/:category', controller.bearAndDrop);
router.post('/entry', controller.saveEntry);
router.delete('/deactivate', controller.deactivate);
router.put('/edit', controller.updateProfile);


module.exports = router;