<template>
  <v-container
      max-width="75%"
      fluid
  >
    <v-card
        class="rounded-xl align-center text-align-center pa-4"
        variant="tonal"
        elevation="0"
    >
      <v-card-actions
          class="justify-center align-center d-flex"
      >
        <v-btn
            @click="calcEach"
            class="border-md rounded-xl"
        >
          Рассчитать
        </v-btn>
      </v-card-actions>
      <v-container v-if="calculated && countedStore.howOwe.length === 0" class="d-flex justify-center align-center text-center">
        <h2>Никто никому ничего не должен</h2>
      </v-container>
      <v-container
          v-if="countedStore.howOwe.length > 0"
          class="overflow-y-auto m-0 p-0"
      >
        <v-card-title>
          Итоговый счет за всех
        </v-card-title>
        <v-list
            elevation="10"
            v-for="(howOwe, index) in countedStore.howOwe"
            :key="howOwe.id"
            class="d-flex flex-row justify-space-between align-center rounded-xl ma-3"
        >
          <p class="ma-2">
            {{ index + 1 }}. {{ howOwe.fromName }} должен(а) {{ howOwe.toName }}: {{ howOwe.amount.toFixed(2) }} ₽
          </p>
        </v-list>
      </v-container>
    </v-card>
  </v-container>
</template>

<script setup>
import {ref} from "vue";
import {usePeopleStore} from "@/stores/peopleStore.js";

const countedStore = usePeopleStore();
const calculated = ref(false); // Индикатор расчета

const calcEach = () => {
  countedStore.calcForEach();
  calculated.value = true; // Устанавливаем в true после расчета
};
</script>
