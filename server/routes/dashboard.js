const express = require('express');
const router = express.Router();
const { isLoggendIn } = require ('../middleware/checkAuth');
const dashboardControler = require('../controlers/dashboardControler');

/**
 * Dashboard Routes
 */

router.get('/dashboard', isLoggendIn, dashboardControler.dashboard);
router.get('/dashboard/item/:id', isLoggendIn, dashboardControler.dashboardViewNote);
router.put('/dashboard/item/:id', isLoggendIn, dashboardControler.dashboardUpdateNote);
router.delete('/dashboard/item-delete/:id', isLoggendIn, dashboardControler.dashboardDeleteNote);
router.get('/dashboard/add', isLoggendIn, dashboardControler.dashboardAddNote);
router.post('/dashboard/add', isLoggendIn, dashboardControler.dashboardAddNoteSubmit);
router.get('/dashboard/search', isLoggendIn, dashboardControler.dashboardSearch);
router.post('/dashboard/search', isLoggendIn, dashboardControler.dashboardSearchSubmit);



module.exports = router;