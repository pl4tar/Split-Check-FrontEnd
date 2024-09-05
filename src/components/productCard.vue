<template>
  <v-card
    class="rounded-xl align-center text-align-center pa-4"
    variant="tonal"
    elevation="0"
  >
    <h1 class="justify-center align-center d-flex px-2">Список продуктов</h1>
    <v-container>
      <v-list
        elevation="16"
        :items="items"
        item-title="name"
        item-value="id"
        class="rounded-xl"
      ></v-list>
    </v-container>
    <v-responsive class="px-4 pt-4 align-center"
      ><v-text-field
        clearable
        label="Введите введите продукт"
        variant="solo-filled"
      ></v-text-field
    ></v-responsive>

    <v-card-actions class="justify-center align-center d-flex px-2">
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
      },      {
        name: "Item #7",
        id: 7,
      },
      {
        name: "Item #8",
        id: 8,
      },
      {
        name: "Item #9",
        id: 9,
      },
      {
        name: "Item #10",
        id: 10,
      },
      {
        name: "Item #11",
        id: 11,
      },
    ],
  }),
};
</script>

<style scoped>
</style>
