<template>
  <v-container>
    <div class="cuadroapu">
      <h2>ANÁLISIS DE PRECIOS UNITARIOS</h2>
      <v-divider></v-divider>
      <v-btn @click="materiales">ir a Materiales</v-btn>
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
  },
};
</script>

<style></style>
