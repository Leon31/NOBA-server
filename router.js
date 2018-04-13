const Router = require('koa-router');
const router = new Router();
const multer = require('koa-multer');
const controller =  require('./controllers/contentController');
const collection = require('./db');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: './Users/necatiozmen/desktop/pic',
  filename(req, file, cb) {
    cb(null, `${new Date()}-${file.originalname}`);
  },
});

const upload = multer({ dest: '/Users/necatiozmen/desktop/pic' });

router.post('/upload', upload.any(), async ctx => {
  const newPost = {
    title: ctx.req.body,
    file: ctx.req.files,
    data: fs.readFileSync(ctx.req.files[0].path),
    contentType: 'image/png',
  };
  collection.collection.insert(newPost);
  ctx.response.status = 200;

  console.log('file ', ctx.req.files);
  console.log('body ', ctx.req.body);
  console.log('body ', ctx.req.files[0].path);
});








//
router.get('/getAll', controller.getAll);
// router.post('/gettest', controller.getTest);
//
// router.post('/postOne', upload.any(), async ctx => { controller.postOne(ctx) } );
//
// router.put('/editOne', controller.editOne);
// router.delete('/deleteOne', controller.deleteOne);

module.exports = router;
