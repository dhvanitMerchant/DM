const router = require('express').Router();

//controllers
const PagesController = require('../controllers/pagesController')

//routes
router.get('/', PagesController.show);
router.post('/sendFeedback', PagesController.create);

module.exports = router;