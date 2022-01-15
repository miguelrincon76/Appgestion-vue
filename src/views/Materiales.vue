<template>
  <v-container>
    <h1>Items</h1>

    <form @submit.prevent="agregarItem()">
      <h3>Agregar</h3>
      <input type="text" class="form-control" my-2 placeholder="ItemId" v-model="itemnew.itemId" />
      <input type="text" class="form-control" my-2 placeholder="Descripcion" v-model="itemnew.descripcion" />
      <v-btn small type="submit">Agregar</v-btn>
    </form>

    <v-simple-table dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Item</th>
            <th class="text-center">Descripcion</th>
            <th class="text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cotItem" :key="item._id">
            <td>{{ item.itemId }}</td>
            <td>{{ item.descripcion }}</td>
            <td> 
              <v-btn class="danger" small @click="eliminarItem(item._id)">Eliminar</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>


  </div>
</template>


<!--//
<template>
  <div class="cuadromateriales">
    <h2>GESTIÓN DE INSUMOS</h2>
        <v-divider></v-divider>
    <v-btn @click="about1">ir a About</v-btn>

  </div>
</template> 
-->

<script>


export default {
  data() {
    return {
      cotItem: [],
      itemnew: { itemId: "", descripcion: "" },

    };
  },

  components: {

  },

  created() {
    this.listarcotItems();
  },

  methods: {
    listarcotItems() {
      this.axios
        .get("/item")
        .then((res) => {
          this.cotItem = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    about1() {
      this.$router.push("/about");
    },

    agregarItem() {
      this.axios.post('/nuevo-item',this.itemnew)
      .then((res) => {
        this.cotItem.push(res.data);
        this.itemnew.itemId = "";
        this.itemnew.descripcion = "";

      });
    },

  },
};
</script>