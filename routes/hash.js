const hashController = require('../controls/hash');
const router = require('express').Router();


router.post(`/api`, hashController.handleHash);

module.exports = router;