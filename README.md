# 组件库

将项目中常用的组件集中起来。

[Vue 3.x](https://cn.vuejs.org/). Follow is the quick guide for how to use.

[rollup](https://www.rollupjs.com/). Follow is the quick guide for how to use.
<br/>

## 功能介绍
- ES2015+
- Vue3
- Rollup模块化打包
- TypeScript
- Jest + @vue/test-utils 组件单元测试
- ESLint代码规范检查

## 说明
`此项目只作为开发组件添加常用组件使用。`

`开发出来的组件需放在对应的文档项目中引入并编写对应的文档`

`对应的文档项目地址：`[组件库使用文档](https://git.uino.com/xiexiangquan/xxv-components-docs.git)

## Environment Prepare

Install `node_modules`:

```bash
npm install
```

### 开发组件时
访问的是src/pages/index.vue组件作为index.html的渲染内容
```bash
npm run dev
```

### Build project

```bash
npm run build
```

### git commit时会利用钩子执行这两个命令，分别是用来校验代码及组件的单元测试
```
   "lint": "eslint --ext .vue,.ts,.tsx ./src",
   "jest": "jest src --watch",
```

## 项目结构

```
   ├── build
   │   └── rollup.config.dev.js  # 在开发组件时rollup启动配置信息
   │   └── rollup.config.es.js   # 打包esm格式的组件
   │   └── rollup.config.js      # 基本的打包配置，所有格式的组件打包都基于这个配置
   │   └── rollup.config.umd.js  # umd库格式打包组件
   ├── dist
   │   └── xxvcomponent_es.js    # esmodule项目引入组件的入口文件
   │   └── xxvcomponent_umd.js   # umd当项目不支持esm时引入该入口文件
   ├── src
   │   ├── assets                # 本地静态资源
   │   	   ├── styles           # 字体、ui组件样式
   │   	   ├── img              # 图片资源，按照功能模块建立文件夹存放
   │   ├── components            # 业务通用组件，每个业务组件为单独文件夹
   │   	   ├── icon.test.js     # 该组件的单元测试文件
   │   	   ├── icon.vue         # 组件的编写逻辑
   │   	   ├── index.ts         # 组件按需引入时挂载
   │   ├── pages                 # 测试开发的组件时启动服务就是访问的index.vue
   │   ├── utils                 # 存放封装好的系统常用工具文件
   ├── .eslintrc.json            # eslint规范配置
   ├── jest.config.js            # 单元测试配置文件
   ├── tsconfig.json             # ts配置文件
   ├── README.md
   └── package.json
   
   
   1）请开发组件时确保单个业务组件为单独文件夹存放
      开发过程遵循eslint校验，开发过程中可选择不同的开发模式
      例如：TDD(测试驱动开发)、BDD(行为驱动开发)、TADD(验收测试驱动开发)。    
```

### 团队基础编码规范，请仔细阅读
[编码规约](https://git.uinnova.com/thingjs/jail/onlineJail/zf-safety-web/-/wikis/%E5%AE%89%E9%98%B2%E5%9B%A2%E9%98%9F%E5%9F%BA%E7%A1%80%E7%BC%96%E7%A0%81%E8%A7%84%E7%BA%A6)
### 项目更新日志转TAPD文档查看
[更新日志]()