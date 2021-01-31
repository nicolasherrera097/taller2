<template>
  <v-app>
    <v-app-bar light app>
    <v-toolbar>
      <v-spacer></v-spacer>
      
      <v-btn color="red" to="/Inicio">
        REGISTRO TAREAS
      </v-btn>
      <v-btn color="green" to="/">
        Login
      </v-btn>

    </v-toolbar>
</v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>

</template>

<script>

export default {
  name: "App",
  data(){
    return {
      appTitle: 'Awesome App',
      sidebar: false,
      menuItems: [
          { title: 'Login', path: '/', icon: '' },
          { title: 'Inicio', path: '/Inicio', icon: '' },
     ]
    }
  },
};
</script>
<style>

</style>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:blue;
}

#nav {
  padding: 40px;

  a {
    font-weight: bold;
    color: blue;

    &.router-link-exact-active {
      color: green;
    }
  }
}
</style>
