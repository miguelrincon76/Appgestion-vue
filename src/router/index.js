import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    components: {
      default: () =>
        import(/* webpackChunkName: "ingreso" */ "../views/Login.vue"),
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

export default router;
