import Koa from 'koa';
import serve from 'koa-static';
import router from './router/index'; // TODO why does this need index?? >:|

const app = new Koa();

app
.use(router.routes())
.use(router.allowedMethods())
.use(serve('dist/static'))
.listen(3000);

console.log('listening on port 3k');