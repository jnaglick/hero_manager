import Koa from 'koa';
import serve from 'koa-static';

const app = new Koa();
app.use(serve('dist/static'));
app.listen(3000);

console.log('listening on port 3k');