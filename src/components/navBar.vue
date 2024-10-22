<template>
  <v-app-bar :elevation="10" class="rounded-b-xl">
      <v-icon
          icon="mdi-account-group"
          class="mx-2"
          size="x-large"
      />
      <v-app-bar-title class="ml-3 pa-1">
        <h2>Делим счет</h2>
      </v-app-bar-title>
      <v-switch
          @click="toggleTheme"
          label="Сменить тему"
          class="d-flex justify-center align-center ma-auto"
      >
      </v-switch>
      <v-btn
          @click="$router.push({name:'info'})"
          icon="mdi-information-box-outline"
      />
      <v-btn
          @click="$router.push({name:'calculation'})"
          icon="mdi-cart-check"
      />
      <v-btn
          @click="$router.push({name:'result'})"
          icon="mdi-account-cash-outline"
      />
  </v-app-bar>
</template>

<script setup>
import {useTheme} from "vuetify";

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>