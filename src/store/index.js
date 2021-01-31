import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: [
      {
        id: 1,
        title: "Ejemplo tarea: Programar",
      }
    ],
  },
  getters: {
    allTasks: (state) => state.tareas,
  },
  actions: {
    agregarTarea({ commit }, task) {
      commit("agregarTarea", task);
    },
    eliminarTarea({commit}, id) {
      commit("eliminarTarea", id);
    },
    editarTarea({commit}, task) {
      commit("editarTarea", task);
    },
  },
  mutations: {
    agregarTarea(state, task) {
      state.tareas.push(task);
      console.log(task)
    },
    eliminarTarea(state,id){
      state.tareas = state.tareas.filter((task) => task.id != id);
    },
    editarTarea(state,task){
      let index = state.tareas.findIndex(t => t.id == task.id);
      console.log(index)
    },
  },

  modules: {
  }
})
