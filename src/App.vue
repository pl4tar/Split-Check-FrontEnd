<template class="app">
    <v-responsive>
      <v-app>
        <navBar/>
        <v-main>
            <countPage />
        </v-main>
      </v-app>
    </v-responsive>
  </template>
  
  <script setup>
  import countPage from "./pages/countPage.vue";
  import navBar from "./components/navBar.vue";
  import infoPage from "./pages/infoPage.vue";
  </script>