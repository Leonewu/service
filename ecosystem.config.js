module.exports = {
  apps : [{
    name: 'cookbook',
    // 指定解释器
    script: './build/index.js',
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 1,
    autorestart: true,
    watch: false,
    output: './logs/app.log',
    error: './logs/error.log',
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};


/**
 * TODO 分开dev和production的配置文件
 * 开发也是用pm2启动应用，并且热更新（应该是配置watch）
 * 配置log4js，打logger.debug
 * https://feifeiyum.github.io/2017/03/06/node-koa2-web-typescript-md/
 * 想达到的效果：1. 开发也通过pm2部署，并且达到热更新的效果（实时编译成js并且pm2 update）
 * 方法： hmr， nodemon， pm2-dev
 * TODO 打断点，跑migration ，建表， 接入graphql
*/