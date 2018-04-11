const Router = require('koa-router');
const router = new Router();
const controller =  require('./controllers/contentController');

router.get('/getAll', controller.getAll);
router.get('/postOne', controller.postOne);
router.get('/editOne', controller.editOne);
router.get('/deleteOne', controller.deleteOne);

module.exports = router;
