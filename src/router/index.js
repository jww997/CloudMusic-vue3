import { createRouter, createWebHashHistory } from "vue-router";

/**
 * 动态加载文件（递归目录）
 */
const modules = require.context(
    "./routes", /*搜索的目录*/
    false,    /*是否还搜索其子目录*/
    /\.js$/,  /*匹配文件的正则表达式*/
);
// 模块结构对象
export const navMenus = modules
    .keys()   /*返回上下文模块可以处理的所有可能请求的数组*/
    .map(name => {
        return modules(name).default;
    })
    .sort((v1, v2) => (v1.index || 0) - (v2.index || 0));


// 1. 定义路由组件
// 也可以从其他文件导入
const Layout = () => import("@/pages/layout");
const Home = () => import("@/pages/Home");

// 2. 定义一些路由
// 每个路由都需要映射到一个组件
// 我们后面再讨论嵌套路由
const routes = [
    {
        path: "/",
        component: Layout,
        redirect: { name: "Home" },
        children: [{ path: "/home", name: "Home", component: Home }],
    },
].concat(navMenus);

// console.log("routes = ", routes);

// 3. 创建路由实例并传递`routes`配置
// 你可以在这里输入更多配置，但我们在这里
// 暂时保持简单
export default createRouter({
    // 4. 内部提供了history模式但实现。为了简单起见，我们在这里使用hash模式
    history: createWebHashHistory(),
    routes, // `routes: routes`的缩写
});