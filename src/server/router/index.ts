import Router from 'koa-router';
const router = new Router({
    prefix: '/api'
});

import * as user from 'server/router/user'

router
.all('*', (ctx, next) => {
    ctx.type = 'application/json';
    next();
})
.get('/user', user.index)
.get('/user/:id', user.get);

export default router;