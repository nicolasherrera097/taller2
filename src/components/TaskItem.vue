<template>
  <v-container>
    <div class="row my-3 justify-content-between">
      <h3 v-if="!editing">{{ task.title }}</h3>
      <input v-bind:value="TaskText" @change="TaskTextChange" v-else type="text" class="col form-control">
      <div>
        <v-btn @click="editarTarea1(task)" color="success" class="mx-2">{{editing?'Update': 'Editar'}}</v-btn>
        <v-btn @click="eliminarTarea(task.id)" color="error">Eliminar</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TaskItem",

  props: {
    task: {},
  },
  methods: {
      ...mapActions(["eliminarTarea", "editarTarea"]),
      TaskTextChange(e) {
          this.TaskText = e.target.value;
      },
      editarTarea1(task){
          this.editing = this.editing==true?false:true;
          if(this.editing){
              this.TaskText = task.title;
              this.editarTarea(task);
          }else{
              task.title = this.TaskText;
          }
      },
  },

  data: () => ({
      TaskText:"",
      editing: false,
  }),
};
</script>