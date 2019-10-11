const Service = require('egg').Service;

class UserService extends Service {
  async login(userName) {
    const user = await this.app.mysql.get('user', { userName: userName });
    return user;
  }
  async addUser(user) {
    const result = await this.app.mysql.insert('score', user);
    return result;
  }
}

module.exports = UserService;