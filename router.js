const Router = require('koa-router');
const router = new Router();
const controller =  require('./controllers/contentController');

router.get('/getAll', controller.getAll);
router.post('/postOne', controller.postOne);
router.put('/editOne', controller.editOne);
router.delete('/deleteOne', controller.deleteOne);

module.exports = router;
