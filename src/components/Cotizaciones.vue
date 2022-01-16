<template>
  <v-container>
    <h3 class="center">INFORMACIÓN COTIZACIONES</h3>
    <br />
    <v-btn class="ma-2" color="indigo" outlined small @click="regresar">
      REGRESAR
    </v-btn>
    <v-btn class="ma-2" color="indigo" outlined small @click="presupuestos">
      EDITAR CUADRO CANTIDADES</v-btn
    >
    <template>
      <v-card class="pa-2 mx-auto" elevation="5" tile outlined>
        <v-row>
          <v-col cols="6" class="text-left">
            <v-row>
              <v-card class="ma-auto" outlined tile width="120">
                <v-img
                  :src="require('../assets/logo.png')"
                  class="my-3"
                  contain
                  height="100"
                />
              </v-card>
            </v-row>

            <v-row>
              <v-text-field
                v-model="editedItem.clienteId"
                dense
                placeholder="Nombre Cliente: "
                :rules="rules"
                hide-details="auto"
              ></v-text-field
            ></v-row>
          </v-col>

          <v-col cols="6" class="text-left">
            <v-row>
              <v-card class="ma-auto" outlined tile width="120">
                <v-img
                  :src="require('../assets/logo.svg')"
                  class="my-3"
                  contain
                  height="100"
                />
              </v-card>
            </v-row>

            <v-row
              ><v-text-field
                v-model="editedItem.proponenteId"
                dense
                placeholder="Nombre Proponente: "
                :rules="rules"
                hide-details="auto"
              ></v-text-field
            ></v-row>
          </v-col>
        </v-row>
      </v-card>
    </template>

    <v-data-table
      dense
      :headers="columnas"
      :items="cotizacion"
      :single-select="true"
      item-key="cotizacionId"
      show-select
      checkbox-color="red ligthen-4"
      mobile-breakpoint="md"
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
                Agregar Cotización
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
                    <v-col cols="7">
                      <v-text-field
                        v-model="editedItem.cotizacionId"
                        dense
                        label="Numero Cotización: "
                        :rules="rules"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="5">
                      <v-checkbox
                        v-model="editedItem.activo"
                        dense
                        label="Cot Activa?"
                        hide-details="auto"
                      ></v-checkbox>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.clienteId"
                        label="Nombre Cliente: "
                        :rules="rules"
                        hide-details="auto"
                      ></v-text-field>
                      <v-text-field
                        v-model="editedItem.proponenteId"
                        label="Nombre Proponente: "
                        :rules="rules"
                        hide-details="auto"
                      ></v-text-field>
                      <v-text-field
                        v-model="editedItem.proyecto"
                        label="Descripción proyecto "
                        :rules="rules"
                        hide-details="auto"
                      ></v-text-field>
                      <v-text-field
                        v-model="editedItem.contenido"
                        label="Contenido Cotización "
                        :rules="rules"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="7">
                      <v-text-field
                        v-model="editedItem.ciudad"
                        dense
                        label="Ciudad ejecución proyecto "
                        :rules="rules"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="5">
                      <v-text-field
                        v-model="editedItem.fecha"
                        dense
                        label="Fecha cotización"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
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
                >Está seguro de eliminar este Cotización?</v-card-title
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
      </template>
      <template v-slot:item.activo="{ item }">
        <v-checkbox v-model="item.activo" disabled></v-checkbox>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import storecotizaciones from "../store/cotizaciones";

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    mensaje: { color: "success", texto: "" },
    id: null,
    columnas: [
      {
        text: "COT #",
        align: "center",
        value: "cotizacionId",
        class: "grey",
        width: "7%",
        divider: "true",
      },
      {
        text: "PROYECTO",
        align: "start",
        value: "proyecto",
        class: "grey",
        width: "auto",
        divider: "true",
      },
      {
        text: "CONTENIDO",
        align: "start",
        value: "contenido",
        class: "grey",
        width: "auto",
        divider: "true",
      },
      {
        text: "FECHA",
        align: "center",
        value: "fecha",
        class: "grey",
        width: "7%",
        divider: "true",
      },
      {
        text: "CIUDAD",
        align: "start",
        value: "ciudad",
        class: "grey",
        width: "7%",
        divider: "true",
      },
      {
        text: "COT ACTIVA",
        align: "center",
        value: "activo",
        class: "grey",
        width: "7%",
        divider: "true",
      },
      {
        text: "ACCIONES",
        align: "start",
        class: "grey",
        width: "7%",
        value: "actions",
        divider: "true",
      },
      {
        text: "CLIENTE",
        align: "start",
        value: "clienteId",
        class: "blue",
        width: "5%",
        divider: "true",
      },
      {
        text: "PROPONENTE",
        align: "start",
        value: "proponenteId",
        class: "blue",
        width: "5%",
        divider: "true",
      },
    ],

    rules: [
      (value) => !!value || "Requerido",
      (value) => (value && value.length >= 3) || "Min 3 caracteres",
    ],
    search: "",
    editedIndex: -1,
    editedItem: {
      cotizacionId: "",
      clienteId: "",
      proyecto: "",
      contenido: "",
      fecha: 12 / 12 / 21,
      ciudad: "",
      proponenteId: "",
      activo: true,
    },
    defaultItem: {
      cotizacionId: "",
      clienteId: "",
      proyecto: "",
      contenido: "",
      fecha: 12 / 12 / 21,
      ciudad: "",
      proponenteId: "",
      activo: true,
    },
  }),

  computed: {
    cotizacion: () => {
      return storecotizaciones.state.cotizacion;
    },
    formTitle() {
      return this.editedIndex === -1
        ? "Nueva cotización"
        : "Editar cotización ";
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
    storecotizaciones.dispatch("getCotizacion");
  },

  methods: {
    eliminarCotizacion(id) {
      let obj = { id };
      storecotizaciones.dispatch("deleteCotizacion", obj).then(() => {
        storecotizaciones.dispatch("getCotizacion");
      });
    },
    insertarCotizacion() {
      let obj = {
        cotizacionId: this.editedItem.cotizacionId,
        clienteId: this.editedItem.clienteId,
        proyecto: this.editedItem.proyecto,
        contenido: this.editedItem.contenido,
        fecha: this.editedItem.fecha,
        ciudad: this.editedItem.ciudad,
        proponenteId: this.editedItem.proponenteId,
        activo: this.editedItem.activo,
      };
      storecotizaciones.dispatch("setCotizacion", obj).then(() => {
        storecotizaciones.dispatch("getCotizacion");
      });
    },

    editarCotizacion(id) {
      let obj = {
        id: id,
        cotizacionId: this.editedItem.cotizacionId,
        clienteId: this.editedItem.clienteId,
        proyecto: this.editedItem.proyecto,
        contenido: this.editedItem.contenido,
        fecha: this.editedItem.fecha,
        ciudad: this.editedItem.ciudad,
        proponenteId: this.editedItem.proponenteId,
        activo: this.editedItem.activo,
      };
      storecotizaciones.dispatch("editCotizacion", obj).then(() => {
        storecotizaciones.dispatch("getCotizacion");
        this.id = null;
      });
    },

    btnEditar(
      id,
      cotizacionId,
      clienteId,
      proyecto,
      contenido,
      fecha,
      ciudad,
      proponenteId,
      activo
    ) {
      this.id = id;
      this.editedItem.cotizacionId = cotizacionId;
      this.editedItem.clienteId = clienteId;
      this.editedItem.proyecto = proyecto;
      this.editedItem.contenido = contenido;
      this.editedItem.fecha = fecha;
      this.editedItem.ciudad = ciudad;
      this.editedItem.proponenteId = proponenteId;
      this.editedItem.activo = activo;
    },

    editItem(item) {
      this.editedIndex = this.cotizacion.indexOf(item);
      this.btnEditar(
        item,
        this.editedItem.cotizacionId,
        this.editedItem.clienteId,
        this.editedItem.proyecto,
        this.editedItem.contenido,
        this.editedItem.fecha,
        this.editedItem.ciudad,
        this.editedItem.proponenteId,
        this.editedItem.activo
      );
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.cotizacion.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.cotizacion.splice(this.editedIndex, 1);
      this.eliminarCotizacion(this.editedItem._id);
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
        this.editarCotizacion(this.editedItem._id);
      } else {
        this.insertarCotizacion();
        console.log(this.editedIndex);
      }
      this.close();
    },
    presupuestos() {
      this.$router.push("/presupuestos");
    },
    regresar() {
      this.$router.push("/home");
    },
  },
};
</script>
