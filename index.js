const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const router = require('./router');

require('dotenv').config();

app
.use(bodyParser())
.use(router.routes())
.listen(process.env.PORT || 3001);
