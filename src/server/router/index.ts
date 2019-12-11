import Router from 'koa-router';
const router = new Router({
    prefix: '/api'
});

import * as user from 'server/router/user'
import * as character from 'server/router/character'

router
.all('*', (ctx, next) => {
    ctx.type = 'application/json';
    next();
})
.get('/user', user.index)
.get('/user/:id', user.get)
.get('/character', character.index)
;

export default router;