const hashController = require('../controls/hash');
const router = require('express').Router();


router.post(`/`, hashController.handleHash);

module.exports = router;