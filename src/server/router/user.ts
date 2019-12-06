import { IMiddleware } from 'koa-router'
import User from 'model/user'

const UserDB: Array<User> = [{
    id: '0',
    name: 'anand'
}, {
    id: '1',
    name: 'biff'
}, {
    id: '2',
    name: 'carol'
}]

export const index: IMiddleware = function(ctx, next) {
    ctx.body = {
        users: UserDB
    };
}

export const get: IMiddleware = function(ctx, next) {
    const user = UserDB.find((user) => user.id == ctx.params.id)

    ctx.body = {
        user
    };
}