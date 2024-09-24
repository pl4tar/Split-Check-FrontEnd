<template>
  <v-card
      class="rounded-xl align-center text-align-center pa-4"

      variant="tonal"
      elevation="0"
  >
    <!--    заголовок-->
    <v-card-title>
      <h3 class="justify-center align-center d-flex px-2">
        Список продуктов
      </h3>
    </v-card-title>
    <!--    список продуктов -->
    <v-container
        v-if="foodStore.foodList.length > 0"
        class="overflow-y-auto"
        max-height="500">
      <v-list
          elevation="10"
          v-for="(foodList, index) in foodStore.foodList"
          :key="foodList.id"
          class="d-flex flex-row justify-space-between align-center rounded-xl ma-3 "
      >
        <p class="d-flex ma-2 align-center">{{ index + 1 }}. {{ foodList.foodName }}</p>

        <div>
          <p class="d-flex ma-2 align-center">{{ foodList.cost }}
            <v-icon size="x-small" icon="mdi-currency-rub"/>
            <v-btn density="compact" icon="mdi-minus" class="d-flex ma-3"></v-btn>
          </p>
        </div>
      </v-list>
    </v-container>
    <!--    ввод продуктов и привязка к пользователю-->
    <v-container
        v-else
        class="overflow-y-auto text-center border-sm">
      <h3
          class="font-weight-bold"
      >
        Добавьте продукты
        <v-icon
            size="small"
            icon="mdi-bag-personal-plus-outline"
        />
      </h3>
    </v-container>
    <div class="pa-2 ma-2 d-flex align-center justify-space-between">
      <v-text-field
          v-model="name"
          label="Название продукта"
          prepend-icon="mdi-food-outline"
          type="text"
          class="w-100"
          hide-details="auto"
          variant="solo-filled"
      />
      <v-text-field
          v-model="price"
          label="Стоимость"
          prepend-icon="mdi-currency-rub"
          class="ml-4 w-75"
          type="number"
          hide-details="auto"
          variant="solo-filled"
      />
    </div>
    <div class="d-flex px-4 align-center">
      <v-combobox
          prepend-icon="mdi-account-group-outline"
          clearable
          chips
          multiple
          label="Выбирите друга"
          :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
          variant="solo-filled"
      ></v-combobox>
    </div>
    <v-card-actions class="justify-center align-center d-flex">
      <v-btn class="border-md rounded-xl">Добавить</v-btn>
      <!--      <v-btn icon="mdi-arrow-right-circle-outline"></v-btn>-->
    </v-card-actions>
  </v-card>
</template>

<script setup>
import {usePeopleStore} from "@/stores/peopleStore.js";

const foodStore = usePeopleStore()
</script>

<style scoped>
</style>
