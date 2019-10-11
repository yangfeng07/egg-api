const Service = require('egg').Service;

class ScoreService extends Service {
  async getScore(data) {
    const num = (data.pageNo-1)*data.pageSize;
    let list = await this.app.mysql.query('select * from score where (type = ? or ? is null) order by id desc limit ?, ?',[data.type,data.type,num,data.pageSize]);
    const total = await this.app.mysql.query('SELECT count(*) number FROM score where (type = ? or ? is null)',[data.type,data.type]);
    const result = {
      total: total[0].number,
      list: list
    }
    this.logger.info('获取分数信息：'+JSON.stringify(result));
    return result;
  }

  async addScore(score) {
    const jobId = Math.floor(Math.random() * 1000)+(new Date()).getTime() +''
    const createTime = (new Date()).getTime()
    const data = {
      ...score,
      jobId,
      createTime
    }
    const result = await this.app.mysql.insert('score', data);
    this.logger.info('添加分数：'+JSON.stringify(result));
    return result;
  }

  async deleteScore(jobId) {
    const result = await this.app.mysql.delete('score', {
      jobId: jobId
    })
    this.logger.info('删除分数信息：'+JSON.stringify(result));
    return result;
  }

  async editScore(data) {
    console.log(data)
    const result = await this.app.mysql.update('score',{     
      name:data.name,
      age:data.age,
      sex:data.sex,
      score:data.score,
      type:data.type
    },{
      where: {
        jobId:data.jobId
      }
    })
    this.logger.info('编辑分数信息：'+JSON.stringify(result));
    return result;
  }
}

module.exports = ScoreService;