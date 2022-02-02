const redirectController = require('../controls/redirect');
const router = require('express').Router();


router.get(`/:id`, redirectController.handleRedirect);

module.exports = router;