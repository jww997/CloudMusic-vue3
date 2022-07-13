/**
 * 看一看
 */
const Layout = () => import("@/pages/layout");
const Video = () => import("@/pages/watch/video");

export default {
  index: 0,
  path: "/watch",
  name: "Watch",
  meta: { title: "看一看", icon: "el-icon-film" },
  component: Layout,
  redirect: "/watch/video",
  children: [
    {
      path: "video",
      name: "Video",
      meta: { title: "视频" },
      component: Video,
    },
  ]
}