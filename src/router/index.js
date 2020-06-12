// dependencies
import Vue from "vue";
import VueRouter from "vue-router";

// views
import Home from "../views/Home.vue";
import Tunes from "../views/Tunes.vue";

// styles
import "@/assets/scss/main.scss";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/tunes",
    name: "Tunes",
    component: Tunes
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
