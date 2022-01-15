<template>
  <v-container>
    <h3 class="center">EDICIÓN CUADRO DE CANTIDADES</h3>
    <br />
    <v-btn class="ma-2" color="indigo" outlined small @click="regresar">
      Regresar
    </v-btn>
    <v-btn class="ma-2" color="indigo" outlined small @click="costosdirectos">
      Calcular</v-btn
    >
    <v-data-table
      dense
      :headers="columnas"
      :items="itemscotizacion"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>
            <!-- Agregar acá numero de cotizacion -->
          </v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="ma-2"
                color="indigo"
                outlined
                small
                v-bind="attrs"
                v-on="on"
              >
                Agregar Ítem
              </v-btn>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Buscar"
                single-line
                hide-details
              ></v-text-field>
              <!-- OJO AL DAR AGREGAR DEBE SALIR UN ITEM POR DEFECTO , NO FUNCIONA AUN-->
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.itemId"
                        label="Ítem"
                      ></v-text-field>
                    </v-col>
                    <v-text-field
                      v-model="editedItem.descripcion"
                      label="Descripción"
                    ></v-text-field>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.unidad"
                        label="Unidad"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.cantidad"
                        label="Cantidad"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.valorunit"
                        label="Valor Unitario"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>

                <!--<v-btn color="blue darken-1" text @click="llenar"> Reiniciar Entrada </v-btn>
                <v-spacer></v-spacer> -->

                <v-btn color="blue darken-1" text @click="close">
                  Cancelar
                </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Grabar </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Está seguro de eliminar este item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancelar</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        <v-btn class="ma-1" color="secundary"
          >APU <v-icon small class="mr-2"> mdi-checkbox-marked-circle </v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import storeitems from "../store/index.js";

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    mensaje: { color: "success", texto: "" },
    search: "",
    id: null,
    columnas: [
      {
        text: "ÍTEM",
        align: "center",
        value: "itemId",
        class: "grey",
        width: "10%",
        divider: "true",
      },
      {
        text: "DESCRIPCIÓN",
        alingn: "start",
        sortable: false,
        value: "descripcion",
        class: "grey",
        width: "40%",
        divider: "true",
      },
      {
        text: "UNIDAD",
        align: "center",
        sortable: false,
        value: "unidad",
        class: "grey",
        width: "10%",
        divider: "true",
      },
      {
        text: "CANTIDAD",
        align: "center",
        sortable: false,
        value: "cantidad",
        class: "grey",
        width: "10%",
        divider: "true",
      },
      {
        text: "A.P.U. ASIGNADO",
        align: "center",
        sortable: false,
        value: "valorunit",
        class: "grey",
        divider: "true",
      },

      {
        text: "ACCIONES",
        align: "center",
        value: "actions",
        sortable: false,
        class: "grey",
      },
    ],

    editedIndex: -1,
    editedItem: {
      itemId: "",
      descripcion: "",
      unidad: "",
      cantidad: 0,
      valorunit: 0,
      valortotal: 0,
    },
    defaultItem: {
      itemId: "1,1",
      descripcion: "Suministro, transporte e instalación de ...",
      unidad: "Ml",
      cantidad: 1,
      valorunit: 1,
      valortotal: 1,
    },
  }),

  computed: {
    itemscotizacion: () => {
      return storeitems.state.itemscotizacion;
    },
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Item" : "Editar Item ";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    storeitems.dispatch("getItemscotizacion");
  },

  methods: {
    eliminarItemcotizacion(id) {
      let obj = { id };
      storeitems.dispatch("deleteItemcotizacion", obj).then(() => {
        storeitems.dispatch("getItemscotizacion");
      });
    },

    insertarItemcotizacion() {
      let obj = {
        itemId: this.editedItem.itemId,
        descripcion: this.editedItem.descripcion,
        unidad: this.editedItem.unidad,
        cantidad: this.editedItem.cantidad,
        valorunit: this.editedItem.valorunit,
        valortotal: this.editedItem.cantidad * this.editedItem.valorunit,
      };
      storeitems.dispatch("setItemscotizacion", obj).then(() => {
        storeitems.dispatch("getItemscotizacion");
      });
    },

    editarItemcotizacion(id) {
      let obj = {
        id: id,
        itemId: this.editedItem.itemId,
        descripcion: this.editedItem.descripcion,
        unidad: this.editedItem.unidad,
        cantidad: this.editedItem.cantidad,
        valorunit: this.editedItem.valorunit,
        valortotal: this.editedItem.cantidad * this.editedItem.valorunit,
      };
      storeitems.dispatch("editItemscotizacion", obj).then(() => {
        storeitems.dispatch("getItemscotizacion");
        this.id = null;
      });
    },

    btnEditar(id, itemId, descripcion, unidad, cantidad, valorunit) {
      this.id = id;
      this.editedItem.itemId = itemId;
      this.editedItem.descripcion = descripcion;
      this.editedItem.unidad = unidad;
      this.editedItem.cantidad = cantidad;
      this.editedItem.valorunit = valorunit;
      this.editedItem.valortotal = cantidad * valorunit;
    },

    editItem(item) {
      this.editedIndex = this.itemscotizacion.indexOf(item);
      this.btnEditar(
        item,
        this.itemscotizacion.itemId,
        this.itemscotizacion.descripcion,
        this.itemscotizacion.unidad,
        this.itemscotizacion.cantidad,
        this.itemscotizacion.valorunit
      );
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.itemscotizacion.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.itemscotizacion.splice(this.editedIndex, 1);
      this.eliminarItemcotizacion(this.editedItem._id);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        console.log(this.editedIndex);
        //        console.log(this.itemscotizacion[this.editedIndex])
        this.editarItemcotizacion(this.editedItem._id);
      } else {
        this.insertarItemcotizacion();
      }
      this.close();
    },

    costosdirectos() {
      const costodirecto = this.itemscotizacion.reduce(
        (k, d) => k + d.valortotal,
        0
      );
      console.log(costodirecto);
      return costodirecto;
    },
    regresar() {
      this.$router.push("/cuadrocotiza");
    },
  },
};
</script>
