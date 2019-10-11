const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');
const secret = 'jwtToken'

class UserController extends Controller{
    async login() {
        const { ctx } = this;
        const r_body = ctx.request.body
        const userName = r_body.userName;
        const user = await ctx.service.user.login(userName);
        if(user){
            if(user.password == r_body.password){
                let payload = {userName:r_body.userName,time:new Date().getTime(),timeout:1000*60*60*2}
                const token = jwt.sign(payload, secret)
                ctx.body = {
                    code: 200,
                    msg: '登陆成功',
                    data: {
                        token: token,
                        user_url:user.url
                    }
                }
            }else{
                ctx.body = {
                    err: -1,
                    msg: '密码错误'
                }
            }
        }else{
            ctx.body = {
                err: -1,
                msg: '用户名不存在'
            }
        }
    }
}

module.exports = UserController;