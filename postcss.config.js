// postcss.config.js
module.exports = {
    plugins: {
        'postcss-px-to-viewport': {
            viewportWidth: 375,
            // 设置哪些 选择器 不需要转换
            selectorBlackList: ["favor"]
        },
    },
};