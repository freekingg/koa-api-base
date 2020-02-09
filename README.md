# bhpAdmin-node-API服务

## :art: 项目结构
Koa2+MongoDB+JWT -- Restful API
```
|-- README.md      # README
|-- processes.json # pm2-服务守护配置
|-- package.json   # 项目依赖
|-- config.js      # 配置信息
|-- app.js         # 入口
|-- controllers    # 控制器：用于解析用户输入，处理后返回相应的结果
|-- models         # 模型（schema）： 用于定义数据模型
|-- public         # 静态资源
|-- routes         # 路由
```

## :construction_worker: 开发
``` node
$ git clone http://dev-server.vertexdigital.com:9000/eric/betowner-backend-nodejs.git
$ cd betowner-backend-nodejs
$ npm install
$ npm run dev
```


## :rocket: PM2部署
- https://pm2.keymetrics.io/
```
$ npm install -g pm2
$ npm run pm2
```
