
## 技术栈
`mysql typeorm koa graphql nodemon winston redis`
## 安装redis
1. [redis官网下载](https://redis.io/download)
## 建表
1. `CREATE DATABASE cookbook;`
2. `CREATE USER 'cookbook'@'localhost' IDENTIFIED BY 'cookbook';`
3. `GRANT ALL ON cookbook.* TO 'cookbook'@'%';`
## 技术选型（typeorm 和 sequlize）
1. 对比两者支持的数据库，sequlize 不支持mongondb，但是我以后可能会用mongodb
2. 对比语法，sequlize有点啰嗦，比较喜欢类似于java清晰的注解，另外以后也可能会用到ts
3. 对比migration，按照官方文档，typeorm我可以直接写sql语句，比较符合习惯
<!-- （虽然typeorm可以将createConection在启动的时候连接，用的时候getConection就可以了）   -->
4. 项目分层(controller层有restful和graphql)
## 为什么不用egg，nest之类的框架
1. 刚开始做，想踩一点坑，而且也想深入了解一下koa
## 搭建过程
1. 安装 typeorm
`npm install typeorm -g`
2. 使用 typeorm 初始化项目
`typeorm init --name service --database mysql`
3. 安装依赖
`cd service && npm i`
4. 启动项目(包含热更新)
`npm start`
7. 编译ts项目
配置tsconfig.json，运行 `tsc -p ./tsconfig.json`
8. 热更新
安装nodemon `npm install --save-dev nodemon`
配置nodemon.json，大致上是监听src下的文件ts和js文件变化，重新在内存编译
9. tslint
配置rules和vscode的autoFixOnSave
## 项目部署
1. 安装pm2
`npm i pm2 -g`
2. 编译
`npm run deploy`  编译的配置看tsconfig.json
3. 部署
`pm2 start .\ecosystem.config.js`
## 开发环境搭建
1. devDependencies
  1). 使用nodemon热更新
  2). 可以用断点调试，配置vscode的launch.json
  3). launch.json有两种模式(launch, attach)
  4). launch 运行某个脚本并且将vscode的debugger调试器attach (包括启动服务和attach)
  5). attach 只是单纯的 attach上某个服务 (先启动了某个服务，然后在配attach)
  6). 通过node --inspect=9229可以启动调试模式，端口默认为9229(node --inspect),ts-node同理
  7). 在launch.json里面，port是调试器将要attach的端口，就是9229啦
  8). nodemon inspect模式的时候会有端口已使用的错误，所以用了kill-port，但并没有起效
## 注意事项
有个问题没有解决，每次nodemon监听到文件变化会重新运行脚本，这个时候会提示：
```
[nodemon] restarting due to changes...
[nodemon] starting `kill-port --port 9229 && ts-node --inspect src/index.ts`
Process on port 9229 killed
Starting inspector on 127.0.0.1:9229 failed: address already in use
[nodemon] app crashed - waiting for file changes before starting...
```
用了kill-port，但还是没用，每次都会有端口已占用的报错，虽然没什么影响
## 关于migration
如果设置了synchronize: true ,在重启服务的时候会自动同步表结构
## api-key
61c8b173-422f-4301-a71c-02d8a259480c
je65vd
## 开发注意事项
1. 数据流: router(接口入口) -> controller(处理接口参数，调用相应service)--已去除该层 -> service(只负责纯粹的输入和输出函数)
2. migrate
* 每次改动数据库的时候记得运行`npm run migration:create create-user`
* 每次发现migrate有修改的时候记得先运行`npm run migration:up`
## 参考文档
1. [typeorm doc](http://typeorm.cn)
2. [sequlize doc](http://docs.sequelizejs.com/manual/migrations.html)
3. [pm2 doc](https://pm2.io/doc/zh/runtime/overview/)
4. [nodemon doc](https://github.com/remy/nodemon#nodemon)
5. [Node.js with TypeScript, Debug inside VSCode and Nodemon](https://dev.to/oieduardorabelo/nodejs-with-typescript-debug-inside-vscode-and-nodemon-23o7)
6. [using --inspect crashes on restart](https://github.com/JacksonGariety/gulp-nodemon/issues/139)
7. [vscode launch.json](https://code.visualstudio.com/docs/editor/debugging)
8. [TSlint](https://palantir.github.io/tslint/)
9. [全局winston生效的issue，要用add而不是createLogger哦](https://github.com/winstonjs/winston/issues/802)
10. [winston](https://github.com/winstonjs/winston#formats)