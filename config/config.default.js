/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1569726665679_3158';

  // add your middleware config here
  config.middleware = ['auth'];

  config.auth = {
    enable: true,
    ignore: ['/login']
}

  config.security = {
    csrf: {
        enable: false,
    },
  };

  //mysql
  config.mysql = {
    client: {
      host: '118.89.34.119',
      port: '3306',
      user: 'liuhu',
      database: 'study',
      password: 'liuhu423'
    },
    app: true,
    agent: false
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  


  return {
    ...config,
    ...userConfig,
  };
};
