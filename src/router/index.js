import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      default: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
      //      header: () => import('../components/Header.vue'),
      sidebar: () => import("../components/SideNavigation.vue"),
      footer: () => import("../components/Footer.vue"),
    },
  },
  {
    path: "/ingreso",
    name: "Ingreso",
    components: {
      default: () =>
        import(/* webpackChunkName: "ingreso" */ "../views/Ingreso.vue"),
      //      header: () => import('../components/Header.vue'),
      sidebar: () => import("../components/SideNavigation.vue"),
      footer: () => import("../components/Footer.vue"),
    },
  },
  {
    path: "/cuadrocotiza",
    name: "CuadroCotiza",
    components: {
      default: () =>
        import(
          /* webpackChunkName: "cuadro" */ "../components/CuadroCotizacion.vue"
        ),
      //      header: () => import('../components/Header.vue'),
      sidebar: () => import("../components/SideNavigation.vue"),
      footer: () => import("../components/Footer.vue"),
    },
  },
  {
    path: "/editarcuadrocotiza",
    name: "EditarCuadroCotizacion",
    components: {
      default: () =>
        import(
          /* webpackChunkName: "editcuadro" */ "../components/EditarCuadroCotizacion.vue"
        ),
      //      header: () => import('../components/Header.vue'),
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
      //      header: () => import('../components/Header.vue'),
      sidebar: () => import("../components/SideNavigation.vue"),
      footer: () => import("../components/Footer.vue"),
    },
  },
  {
    path: "/cuadroapu",
    name: "APU",
    components: {
      default: () => import(/* webpackChunkName: "apu" */ "../views/APU.vue"),
      //      header: () => import('../components/Header.vue'),
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
      //      header: () => import('../components/Header.vue'),
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
      //      header: () => import('../components/Header.vue'),
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
      //      header: () => import('../components/Header.vue'),
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
