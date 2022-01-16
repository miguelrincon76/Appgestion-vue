<template>
  <v-container>
    <div class="ingreso">
      <h2>FORMULARIO DE INGRESO</h2>
      <v-divider></v-divider>
      <v-btn class="ma-2" color="indigo" outlined small @click="home"
        >ingresar</v-btn
      >
    </div>
  </v-container>
</template>

<script>
export default {
  components: {},
  methods: {
    home() {
      this.$router.push("/home");
    },
  },
};
</script>

<style></style>
