import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    components: {
      default: () =>
        import(/* webpackChunkName: "ingreso" */ "../components/Login.vue"),
      footer: () => import("../components/Footer.vue"),
    },
  },
  {
    path: "/register",
    name: "Register",
    components: {
      default: () =>
        import(/* webpackChunkName: "ingreso" */ "../components/Register.vue"),
      footer: () => import("../components/Footer.vue"),
    },
  },
  {
    path: "/home",
    name: "Home",
    components: {
      default: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
      sidebar: () => import("../components/SideNavigation.vue"),
      footer: () => import("../components/Footer.vue"),
    },
    meta: { requireAuth: true },
  },
  {
    path: "/presupuestos",
    name: "Presupuestos",
    components: {
      default: () =>
        import(
          /* webpackChunkName: "cuadro" */ "../components/Presupuestos.vue"
        ),
      sidebar: () => import("../components/SideNavigation.vue"),
      footer: () => import("../components/Footer.vue"),
    },
  },
  {
    path: "/editarpresupuesto",
    name: "EditarPresupuesto",
    components: {
      default: () =>
        import(
          /* webpackChunkName: "editcuadro" */ "../components/EditarPresupuestos.vue"
        ),
      sidebar: () => import("../components/SideNavigation.vue"),
      footer: () => import("../components/Footer.vue"),
    },
  },
  {
    path: "/cotizaciones",
    name: "Cotizaciones",
    components: {
      default: () =>
        import(/* webpackChunkName: "apu" */ "../components/Cotizaciones.vue"),
      sidebar: () => import("../components/SideNavigation.vue"),
      footer: () => import("../components/Footer.vue"),
    },
  },
  {
    path: "/cuadroapu",
    name: "APU",
    components: {
      default: () => import(/* webpackChunkName: "apu" */ "../views/APU.vue"),
      sidebar: () => import("../components/SideNavigation.vue"),
      footer: () => import("../components/Footer.vue"),
    },
  },
  {
    path: "/cuadromateriales",
    name: "Materiales",
    components: {
      default: () =>
        import(/* webpackChunkName: "materiales" */ "../views/Materiales.vue"),
      sidebar: () => import("../components/SideNavigation.vue"),
      footer: () => import("../components/Footer.vue"),
    },
    meta: { requireAuth: true },
  },
  {
    path: "/pruebas",
    name: "Prueba",
    components: {
      default: () =>
        import(
          /* webpackChunkName: "pruebas" */ "../views/pruebacuadrocrud.vue"
        ),
      sidebar: () => import("../components/SideNavigation.vue"),
      footer: () => import("../components/Footer.vue"),
    },
  },
  {
    path: "/about",
    name: "About",
    components: {
      default: () =>
        import(/* webpackChunkName: "About" */ "../views/About.vue"),
      sidebar: () => import("../components/SideNavigation.vue"),
      footer: () => import("../components/Footer.vue"),
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const protectedRoute = to.matched.some((item) => item.meta.requireAuth);
  if (protectedRoute && localStorage.getItem("token") === null) {
    next("/");
  } else {
    next();
  }
});

export default router;
