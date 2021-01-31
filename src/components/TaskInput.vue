<template>
  <v-container>
    <v-row class="justify-center pt-15 align-items-center mx-3">
      <v-col>
        <h2>NOMBRE TAREA:</h2>
      </v-col>
      <v-col>
        <input
          @change="TaskTextChange"
          v-bind:value="TaskText"
          :rules="rules"
          class="col form-control mr-10"
          placeholder="Text-example"
        />
      </v-col>
      <v-col>
        <button class="btn btn-primary" @click="agregarTarea1">
          AGREGAR TAREA
        </button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";
export default {
  name: "Inicio",

  methods: {
    ...mapActions(["agregarTarea"]),

    TaskTextChange(e){
        this.TaskText = e.target.value;
    },

    agregarTarea1() {
      this.agregarTarea({
        id: v1(),
        title: this.TaskText
      });
      this.TaskText = "";
    }
  },
  data: () => ({
    rules: [
      (value) => !!value || "Requerido.",
      (value) => (value || "").length <= 200 || "Máximo 200 caracteres",
    ],
    TaskText: "",
  }),
};
</script>