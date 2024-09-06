<template class="app">
    <v-responsive>
      <v-app>
        <navBar/>
        <v-main>
          <router-view></router-view>
        </v-main>
      </v-app>
    </v-responsive>
  </template>
  
  <script setup>
  import navBar from "./components/navBar.vue";
    </script>