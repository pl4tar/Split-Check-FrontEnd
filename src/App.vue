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
  import countedPage from "./pages/countedPage.vue";
  import countPage from "./pages/countPage.vue";
  import navBar from "./components/navBar.vue";
  import infoPage from "./pages/infoPage.vue";
  </script>