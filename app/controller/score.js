const Controller = require('egg').Controller;

class ScoreController extends Controller{
    async getScore() {
        const { ctx } = this;
        const data = ctx.request.body;
        const result = await ctx.service.score.getScore(data);
        if(result){
            ctx.body = {
                code: 200,
                msg: '获取成功',
                data: result
            }
        }else{
            ctx.body = {
                code: -2,
                msg: '获取失败'
            }
        }
    }

    async addScore() {
        const { ctx } = this;
        const score = ctx.request.body;
        const result = await ctx.service.score.addScore(score);
        if(result.affectedRows === 1) {
            ctx.body = {
                code: 200,
                msg: '添加成功'
            }
        }else{
            ctx.body = {
                code: -1,
                data: '添加失败'
            }
        }
    }

    async deleteScore() {
        const { ctx } = this;
        const jobId = ctx.request.body.jobId;
        const result = await ctx.service.score.deleteScore(jobId);
        if(result.affectedRows === 1){
            ctx.body = {
                code: 200,
                msg: '删除成功'
            }
        }else{
            ctx.body = {
                code: -1,
                data: '删除失败'
            }
        }
    }

    async editScore() {
        const { ctx } = this;
        const data = ctx.request.body;
        const result = await ctx.service.score.editScore(data);
        if(result.affectedRows === 1) {
            ctx.body = {
                code: 200,
                msg: '编辑成功'
            }
        }else{
            ctx.body = {
                code: 200,
                msg: '编辑失败'
            }
        }
    }
}

module.exports = ScoreController;