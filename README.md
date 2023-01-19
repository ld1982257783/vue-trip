# 创建项目

```js
    npm init vue@latest
    npm install
```

## 项目初始化配置

```js
    jsconfig.json

    创建对应目录文件夹
    assets
    components
    hooks
    mock
    router
    service
    store
    utils
    views
```

## css 样式重置

```js
    npm install less -D
    npm install normalize.css
    main.js 引入
    import "normalize.css"

    创建 reset.css common.css index.css
    main.js 引入
    import "index.css"

```

## 路由配置

```js
    npm install vue-router

    import {createRouter,createWebHashHistory} from "vue-router"

    const route = [

    ]

    const router = createRouter({
        history: createWebHashHistory(),
        routes: route
    })

    export default router

    main.js 引入 
    import router from './router'
    createApp(App).use(router).mount('#app')
```

## pinia 的初步配置

```js
    npm install pinia

    import {createPinia} from "pinia"

    const pinia = createPinia()

    export default pinia

    main.js 引入
    import store from "./store"
    createApp(App).use(store).mount('#app')
```

## 项目 引入 ui 库 Vant

```js
    npm install vant

    // 按需引入
    npm i unplugin-vue-components -D

    // vite.config.js 进行配置
```

## 将当前项目 交于 git 管理

```js
    git init 
    git add .
    git commit -m "项目第一天"

```

## 整合 axios

```js
    npm install axios

```

## 整合 防抖 节流 库

```js
    npm install underscore
```

## 当前项目 整个 postcss 插件

```js
    // 将所有的px 转变为 vw vh
    // postcss-px-to-viewport 是一款 PostCss 插件 用于将 px 单位转换为 vw/vh 单位
    1 npm install postcss-px-to-viewport -D
    2 根目录 创建 postcss.config.js
    3 复制如下配置
       // postcss.config.js
        module.exports = {
            plugins: {
                'postcss-px-to-viewport': {
                    viewportWidth: 375,
                },
            },
        };
```
