<template>
  <v-container>
    <div class="home">
      <h2>PRESENTACIÓN</h2>
      <v-btn class="ma-2" color="indigo" outlined small @click="cotizaciones()">
        COTIZACIONES
      </v-btn>
      <v-btn class="ma-2" color="indigo" outlined small @click="presupuestos()">
        PRESUPUESTOS
      </v-btn>
      <v-btn class="ma-2" color="indigo" outlined small @click="apus()">
        APUS
      </v-btn>
      <v-btn class="ma-2" color="indigo" outlined small @click="insumos()">
        INSUMOS
      </v-btn>
      <v-divider></v-divider>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    cotizaciones() {
      this.$router.push("/cotizaciones");
    },
    presupuestos() {
      this.$router.push("/presupuestos");
    },
    apus() {
      this.$router.push("/cuadroapu");
    },
    insumos() {
      this.$router.push("/cuadromateriales");
    },
  },
};
</script>
