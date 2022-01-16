<template>
  <v-container>
    <h3 class="center">CUADRO DE COSTOS DIRECTOS</h3>

    <div>
      <v-row class="text-left">
        <v-col cols="7">
          <v-file-input
            show-size
            truncate-length="40"
            accept=".xls, .csv"
            placeholder="Seleccione un archivo"
            label="Cuadro de cantidades"
          >
          </v-file-input>
        </v-col>
        <v-col cols="5">
          <v-btn class="ma-2" color="indigo" outlined small @click="regresar()"
            >REGRESAR</v-btn
          >
          <v-btn
            class="ma-2"
            color="indigo"
            outlined
            small
            @click="editarpresupuesto"
          >
            EDITAR CANTIDADES</v-btn
          >
        </v-col>
      </v-row>
      <v-card class="mx-auto mt-5">
        <v-card-title>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          dense
          :headers="columnas"
          :items="itemscotizacion"
          class="elevation-1"
          :search="search"
        ></v-data-table>
      </v-card>

      <v-row>
        <v-col cols="10">
          <p class="left">SUBTOTAL COSTOS DIRECTOS</p>
        </v-col>
        <v-col cols="2">
          <p class="right">$ 150.000</p>
          <div></div>
        </v-col>
      </v-row>
    </div>
    <div class="text-md-left body-2">
      <v-card class="pa-2" outlined tile>
        <v-row>
          <v-col cols="12"
            ><v-text-field
              dense
              label="Observaciones"
              placeholder="1. 2. ..."
              hide-details="auto"
            ></v-text-field
          ></v-col>
        </v-row>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import storeindirectos from "../store/tbl_Indirectos";
import storeimpuestos from "../store/tbl_Impuestos";
//import storecotizacion from "../store/tbl_Cotizacion.js";
//import store from "../store/tbl_items.js";

import storeitems from "../store/index.js";

export default {
  data: () => ({
    rules: [
      (value) => !!value || "Requerido",
      (value) => (value && value.length >= 3) || "Min 3 caracteres",
    ],

    indirectos: storeindirectos.indirectos,
    impuestos: storeimpuestos.impuestos,
    //cotizacion: storecotizacion.cotizacion,
    search: " ",
    columnas: [
      {
        text: "ÍTEM",
        align: "center",
        sortable: true,
        value: "itemId",
        class: "grey",
      },
      {
        text: "DESCRIPCIÓN",
        alingn: "start",
        sortable: false,
        value: "descripcion",
        class: "grey",
      },
      {
        text: "UNIDAD",
        align: "center",
        sortable: false,
        value: "unidad",
        class: "grey",
      },
      {
        text: "CANTIDAD",
        align: "center",
        sortable: false,
        value: "cantidad",
        class: "grey",
      },
      {
        text: "VALOR UNITARIO",
        align: "right",
        sortable: false,
        value: "valorunit",
        class: "grey",
      },
      {
        text: "VALOR TOTAL",
        align: "end",
        sortable: false,
        value: "valortotal",
        class: "grey",
      },
    ],

    columnasTbl2: [
      {
        text: "Descripción",
        sortable: false,
        align: "start",
        value: "descripcion",
        class: "grey",
      },
      {
        text: "Porcentaje",
        sortable: false,
        align: "center",
        value: "porcentaje",
        class: "grey",
      },
      {
        text: "Valor Total",
        sortable: false,
        align: "end",
        value: "vrindirecto",
        class: "grey",
      },
    ],
  }),

  methods: {
    editarpresupuesto() {
      console.log("...editando presupuesto...");
      this.$router.push("/editarpresupuesto");
    },
    regresar() {
      this.$router.push("/cotizaciones");
    },
  },
  components: {},

  computed: {
    itemscotizacion: () => {
      return storeitems.state.itemscotizacion;
    },
  },
  created() {
    storeitems.dispatch("getItemscotizacion");
  },
};
</script>
