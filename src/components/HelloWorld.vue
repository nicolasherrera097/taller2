<template>
  <v-container>
    <v-row class="justify-center pt-5">
      <h1>LOGIN</h1>
    </v-row>
    <v-row class="justify-center pt-5">
      <v-card elevation="16" width="600"> 
        <v-card-title class="justify-center">INGRESE DATOS</v-card-title>
        <v-row class="pt-5">
          <v-card-subtitle class="pt-5">USERNAME</v-card-subtitle>
          <v-text-field :rules="rules" class="pr-8"></v-text-field>
        </v-row>
        <v-row>
          <v-card-subtitle class="pt-5">PASS</v-card-subtitle>
          <v-text-field :rules="rules" class="pr-10" type="password"></v-text-field>
        </v-row>
        <v-row class="justify-center pt-10">
          <v-btn elevation="2" color="blue" router-link to="/Inicio">INGRESAR</v-btn>
        </v-row>
      </v-card>
    </v-row> 
  </v-container>
  
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    rules: [
      (value) => !!value || "Campo requerido",
      (value) => (value || "").length <= 20 || "Máximo 20 caracteres",
    ],
  }),
};
</script>
