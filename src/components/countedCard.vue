<template>
  <v-container max-width="100%" fluid>
    <v-card
        class="rounded-xl align-center text-align-center pa-4"
        variant="tonal"
        elevation="0"
    >
      <v-card-actions class="justify-center align-center d-flex">
        <v-btn @click="calcEach" class="border-md rounded-xl">Рассчитать</v-btn>
      </v-card-actions>
      <v-card-title> Итоговый счет за всех</v-card-title>
      <v-list
          elevation="16"
          v-for="(howOwe, index) in countedStore.howOwe"
          :key="howOwe.id"
          class="d-flex flex-row justify-space-between align-center rounded-xl ma-3"
      >
        <p class="ma-2">{{ index + 1 }}. {{ howOwe.name }}: {{ howOwe.moneyOwn.toFixed(2) }} ₽</p>
      </v-list>
    </v-card>
  </v-container>
</template>

<script setup>
import { usePeopleStore } from "@/stores/peopleStore.js";

const countedStore = usePeopleStore();

const calcEach = () => {
  countedStore.calcForEach();
};
</script>