<template>
  <v-container>
    <v-app-bar dark app class="py-2" fixed elevate-on-scroll clipped-left>
      <v-app-bar-nav-icon
        class="black"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-app-bar-title class="d-none d-sm-block"
        ><h6 class="red--text text-center">
          SISTEMA DE GESTIÓN DE OBRAS DE CONSTRUCCIÓN
        </h6>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="salir()">
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" fixed bottom clipped>
      <v-list nav dense class="py-0">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6"> ¡SPIDER! </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item-group
          v-model="group"
          active-class=" red--text text--accent-1"
          class="text-left"
          link
        >
          <v-list>
            <v-list-item href="/home">
              <v-list-item-icon>
                <v-icon> mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title> Inicio </v-list-item-title>
            </v-list-item>
            <v-list-group sub-group prepend-icon="mdi-spider" no-action>
              <template v-slot:activator>
                <v-list-item-title>Spider Presupuestos</v-list-item-title>
              </template>
              <v-list-item href="/cotizaciones">
                <v-list-item-title> Cotizaciones </v-list-item-title>
                <v-list-item-icon>
                  <v-icon> mdi-account-wrench-outline </v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item href="/presupuestos">
                <v-list-item-title> Presupuestos </v-list-item-title>
                <v-list-item-icon>
                  <v-icon> mdi-cash-multiple </v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item href="/cuadroapu">
                <v-list-item-title> A.P.U.'s </v-list-item-title>
                <v-list-item-icon>
                  <v-icon> mdi-book-open</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item href="/cuadromateriales">
                <v-list-item-title> Insumos </v-list-item-title>
                <v-list-item-icon>
                  <v-icon> mdi-clipboard-text-play-outline</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
            <v-list-item href="/about">
              <v-list-item-icon>
                <v-icon> mdi-help-box</v-icon>
              </v-list-item-icon>
              <v-list-item-title> About </v-list-item-title>
            </v-list-item>

            <v-list-item href="/pruebas">
              <v-list-item-icon>
                <v-icon> mdi-power-socket-us</v-icon>
              </v-list-item-icon>
              <v-list-item-title> Pruebas </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      right: null,
      drawer: false,
      group: null,
    };
  },
  components: {},
  methods: {
    inicio() {
      this.$router.push("/home");
    },
    salir() {
      this.$router.push("/");
    },
  },
};
</script>
