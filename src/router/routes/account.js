/**
 * 账户
 */
const Layout = () => import("@/pages/layout");
const Oneself = () => import("@/pages/account/oneself");
const Login = () => import("@/pages/account/login");

export default {
  index: 0,
  path: "/account",
  name: "Account",
  meta: { title: "账户信息", hidden: true },
  component: Layout,
  redirect: "/account/oneself",
  children: [
    {
      path: "oneself",
      name: "Oneself",
      meta: { title: "个人信息" },
      component: Oneself,
    },
    {
      path: "login",
      name: "Login",
      meta: { title: "登录" },
      component: Login,
    }
  ]
}