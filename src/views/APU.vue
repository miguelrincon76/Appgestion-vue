<template>
  <v-container>
    <div class="cuadroapu">
      <h3>ANÁLISIS DE PRECIOS UNITARIOS</h3>
      <v-divider></v-divider>
      <v-btn class="ma-2" color="indigo" outlined small @click="regresar">
        Regresar
      </v-btn>
      <v-btn lass="ma-2" color="indigo" outlined small @click="materiales"
        >ir a Materiales</v-btn
      >
    </div>
  </v-container>
</template>

<script>
export default {
  components: {},
  methods: {
    materiales() {
      this.$router.push("/cuadromateriales");
    },
    regresar() {
      this.$router.push("/editarpresupuesto");
    },
  },
};
</script>

<style></style>
