import Koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';

const app = new Koa();
const router = new Router();

router.get('/hello', (ctx, next) => {
    ctx.type = 'application/json'
    ctx.body = {
        hello: 'world'
    }
});

app
.use(router.routes())
.use(router.allowedMethods())
.use(serve('dist/static'))
.listen(3000);

console.log('listening on port 3k');