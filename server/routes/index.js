const express = require('express');
const router = express.Router();
const mainControler = require('../controlers/mainControler');

/**
 * App Routes
 */

router.get('/', mainControler.homepage);
router.get('/about', mainControler.about)



module.exports = router;
