# bhpAdmin-node-API服务

## 项目结构
- Koa2+MongoDB+JWT -- Restful API

```
|-- .gitignore
|-- README.md
|-- package-lock.json
|-- package.json      # 项目依赖
|-- app
    |-- config.js     # 数据库（mongodb）配置信息
    |-- index.js      # 入口
    |-- controllers   # 控制器：用于解析用户输入，处理后返回相应的结果
    |-- models        # 模型（schema）： 用于定义数据模型
    |-- public        # 静态资源
    |-- routes        # 路由
```

## 开发使用说明
```
npm install
npm run dev
```

## PM2部署
- https://pm2.keymetrics.io/