import Vue from "vue";
import VueRouter from "vue-router";
import Users from "../views/Users.vue";
import Home from "../views/Home.vue";
import Account from "../views/Account.vue";
import Dashboard from "../layouts/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    name: "LandPage",
    component: Dashboard,
    children: [
      {
        path: "users",
        name: "Users",
        component: Users,
      },
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "my-account",
        name: "Account",
        component: Account,
      },
    ],
  },
  {
    path: "/",
    component: () => import(/* webpackChunkName: "auth" */ "../layouts/Auth.vue"),
    children: [
      {
        path: "",
        name : "Login",
        component: () => import(/* webpackChunkName: "login") */ "../views/login.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
