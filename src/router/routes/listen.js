/**
 * 听一听
 */
const Layout = () => import("@/pages/layout");
const Recommend = () => import("@/pages/listen/recommend");
const Songlist = () => import("@/pages/listen/songlist");
const Station = () => import("@/pages/listen/station");
const Toplist = () => import("@/pages/listen/toplist");
const Singer = () => import("@/pages/listen/singer");
const Newest = () => import("@/pages/listen/newest");

export default {
  index: 0,
  path: "/listen",
  name: "Listen",
  meta: { title: "听一听", icon: "el-icon-headset" },
  component: Layout,
  redirect: "/listen/recommend",
  children: [
    {
      path: "recommend",
      name: "Recommend",
      meta: { title: "个性推荐" },
      component: Recommend,
    },
    {
      path: "songlist",
      name: "Songlist",
      meta: { title: "歌单" },
      component: Songlist,
    },
    {
      path: "station",
      name: "Station",
      meta: { title: "主播电台" },
      component: Station,
    },
    {
      path: "toplist",
      name: "Toplist",
      meta: { title: "排行榜" },
      component: Toplist,
    },
    {
      path: "singer",
      name: "Singer",
      meta: { title: "歌手" },
      component: Singer,
    },
    {
      path: "newest",
      name: "Newest",
      meta: { title: "最新音乐" },
      component: Newest,
    },
  ]
}