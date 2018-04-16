const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const cors = require('koa-cors');

const router = require('./router');


require('dotenv').config();

app
.use(cors())
.use(bodyParser())

.use(router.routes())
.listen(process.env.PORT || 3001, () => console.log(`server running at ${process.env.PORT}`));


