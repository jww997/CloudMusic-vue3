import http from "./ajax";

/**
 * 动态加载文件（递归目录）
 */
const modules = require.context(
    "./apis", /*搜索的目录*/
    false,    /*是否还搜索其子目录*/
    /\.js$/,  /*匹配文件的正则表达式*/
);
// 模块结构对象
export const apis = modules
    .keys()   /*返回上下文模块可以处理的所有可能请求的数组*/
    .reduce((res, name) => {
        return Object.assign(res, modules(name));
    }, {});


/**
 * 注入全局
 */
export default {
    ...apis, http
    // install: ({ mixin }) => mixin({
    //     data: () => ({ ...apis, http }),
    // })
}