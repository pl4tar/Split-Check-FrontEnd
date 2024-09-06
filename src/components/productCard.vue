<template>
  <v-card
    class="rounded-xl align-center text-align-center pa-4"
    variant="tonal"
    elevation="0"
  >
    <v-card-title
      ><h1 class="justify-center align-center d-flex px-2">
        Список продуктов
      </h1></v-card-title
    >
    <v-list
      elevation="16"
      v-for="(item, index) in items"
      class="d-flex flex-row justify-space-between align-center rounded-xl ma-3"
    >
      <p class="ma-2">{{ index + 1 }}. {{ item.name }}</p>

      <div>
        <v-btn density="compact" icon="mdi-minus" class="ma-3"></v-btn>
      </div>
    </v-list>
    <div class="pa-2 ma-2 d-flex align-center justify-space-between">
      <v-text-field
        v-model="name"
        label="Название продукта"
        type="text"
        class="w-100"
        hide-details="auto"
        variant="solo-filled"
      />
      <v-text-field
        v-model="price"
        label="Стоимость"
        class="ml-2 w-75"
        type="number"
        hide-details="auto"
        variant="solo-filled"
      />
    </div>
    <div class="d-flex px-4 align-center">
      <v-select
        clearable
        label="Выберете пользователя"
        variant="solo-filled"
      ></v-select>
    </div>
    <v-card-actions class="justify-center align-center d-flex">
      <v-btn class="border-md rounded-xl">Добавить</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        name: "Item #1",
        id: 1,
      },
      {
        name: "Item #2",
        id: 2,
      },
      {
        name: "Item #3",
        id: 3,
      },
      {
        name: "Item #4",
        id: 4,
      },
      {
        name: "Item #5",
        id: 5,
      },
      {
        name: "Item #6",
        id: 6,
      },
    ],
  }),
};
</script>

<style scoped>
</style>
