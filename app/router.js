'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/login', controller.user.login);
  router.post('/getScore', controller.score.getScore);
  router.post('/addScore', controller.score.addScore);
  router.post('/deleteScore', controller.score.deleteScore);
  router.post('/editScore', controller.score.editScore);
};
