<template> </template>
<script>
export default {
  methods: {
    inicio() {
      this.$router.push("/");
    },
    login() {
      this.$router.push("/ingreso");
    },
    cotizaciones() {
      this.$router.push("/cotizaciones");
    },
    presupuestos() {
      this.$router.push("/cuadrocotiza");
    },
  },
};
</script>
