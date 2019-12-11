import { IMiddleware } from 'koa-router'
import Character from 'model/character'

const CharDB: Array<Character> = [new Character()]

export const index: IMiddleware = function(ctx, next) {
    ctx.body = {
        characters: CharDB
    };
}