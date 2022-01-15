<template>
  <v-container class="d-flex">
    <v-footer app dark padless fixed inset>
      <v-card class="flex" flat tile>
        <v-card-title class="blue-grey lighten-2  text-center font-weight-bold">
          ¡ Mantente conectado a nuestras redes sociales !
          <v-spacer />
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="30px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 red--text text-center font-weight-bold">
          {{ new Date().getFullYear() }} — >Copyright © - SE&C INGENIERIA S.A.S.
          - All Rights Reserved
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    name: "footer",
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
