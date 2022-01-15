<template>
  <v-container>
    <div class="About">
      <h2>NOSOTROS</h2>

      <v-card class="mx-auto" max-width="344">
        <v-img src="../assets/logo.png" height="200px"></v-img>

        <v-card-title> Software de Gestión de Proyectos </v-card-title>

        <v-card-subtitle>
          ¡ Optimiza tus proyectos de construcción !
        </v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange lighten-2" text @click="inicio()">
            Inicio
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              Dudas y/o Comentarios? por favor escribanos a
              "info@ingenieriasa.com"
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      <v-divider></v-divider>
    </div>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    show: false,
  }),
  components: {},

  methods: {},
};
</script>
