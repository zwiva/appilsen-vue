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
    name: "Login",
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
    path: "/armar",
    name: "CreateBeer",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "shopform" */ "../views/CreateBeer.vue"),
    meta: {
      requirelogin: false, // pasar a true
    },
  },
  {
    path: "/catalogo",
    name: "Catalog",
    component: () => import("../views/CatalogView.vue"),
    meta: {
      requirelogin: false, // pasar a true
    },
  },
  {
    path: "/merch",
    name: "Merch",
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
    name: "About",
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
    path: "/recomendaciones",
    name: "UserSuggestions",
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
    path: "/beerstock",
    name: "InventoryBeers",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "external" */ "../views/InventoryBeers.vue"),
    meta: {
      requirelogin: false, // pasar a true
    },
  },
  {
    path: "/carrito",
    name: "ShopCart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "shopcart" */ "../views/ShopCart.vue"),
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
