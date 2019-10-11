module.exports = () => {
    const jwt = require('jsonwebtoken');
    const secret = 'jwtToken'
    return async function (ctx, next) {
        if(ctx.header.token){
            let decoded;
            try {
                decoded = jwt.verify(ctx.header.token, secret)
            } catch (err) {
                ctx.body = {
                    msg: 'token失效',
                    err: -101
                }
            }
            await next()
        } else {
            ctx.body = {
                msg: 'token不存在',
                err: -101
            }
        }
    }
}