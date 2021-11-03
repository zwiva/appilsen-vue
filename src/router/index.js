import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requirelogin: false,
    },
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    meta: {
      requirelogin: false,
    },
  },
  {
    path: "/carrito",
    name: "shopCart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "shopcart" */ "../views/ShopCart.vue"),
    meta: {
      requirelogin: false, // pasar a true
    },
  },
  {
    path: "/armar",
    name: "shopForm",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "shopform" */ "../views/ShopForm.vue"),
    meta: {
      requirelogin: false, // pasar a true
    },
  },
  {
    path: "/beerstock",
    name: "externalBeers",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "external" */ "../views/ExternalBeers.vue"),
    meta: {
      requirelogin: false, // pasar a true
    },
  },
  {
    path: "/recomendaciones",
    name: "userSuggestion",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "internal" */ "../views/Suggestions.vue"),
    meta: {
      requirelogin: false, // pasar a true
    },
  },
  {
    path: "/merch",
    name: "otherproducts",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "otherproducts" */ "../views/Merch.vue"),
    meta: {
      requirelogin: false, // pasar a true
    },
  },
  {
    path: "/ourteam",
    name: "Nosotros",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "internal" */ "../views/About.vue"),
    meta: {
      requirelogin: false, // pasar a true
    },
  },
  {
    path: "/catalogo",
    name: "Catalogo",
    component: () => import("../views/CatalogView.vue"),
    meta: {
      requirelogin: false, // pasar a true
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.meta.requirelogin)
//     if (Store.state.currentUser) {
//       next(); //siguiente
//     } else {
//       next("/login"); //arg opcional para que lleve para el login
//     }
//   else {
//     next();
//   }
// });

export default router;
