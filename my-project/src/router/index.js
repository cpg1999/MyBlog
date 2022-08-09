import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: () => import("@/views/Home.vue"),
      meta: {
        showbgc: true,
      },
    },
    {
      path: "/information",
      component: () => import("@/views/Information.vue"),
      meta: {
        name: "个人履历",
        showDetailbgc: true,
      },
    },
    {
      path: "/article",
      component: () => import("@/views/Article.vue"),
    },
    {
      path: "/photo",
      component: () => import("@/views/Photo.vue"),
      meta: {
        name: "相册",
        showDetailbgc: true,
      },
    },
    {
      path: "/message",
      component: () => import("@/views/Message.vue"),
      meta: {
        name: "留言板",
        showDetailbgc: true,
      },
    },
    {
      path: "*",
      redirect: "/home",
    },
  ],
});
