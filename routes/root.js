const express = require('express');
const router = express.Router();

const getFeed = require('../controllers/feedback');

router.route('/').post(getFeed);

module.exports = router;