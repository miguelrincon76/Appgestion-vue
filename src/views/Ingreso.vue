<template>
  <v-container>
    <div class="ingreso">
      <h2>FORMULARIO DE INGRESO</h2>
      <v-divider></v-divider>
      <v-btn @click="cuadro1">ir a Cuadro Cotizacion</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  components: {},
  methods: {
    cuadro1() {
      this.$router.push("/cuadrocotiza");
    },
  },
};
</script>

<style></style>
