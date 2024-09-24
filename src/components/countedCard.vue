<template>
  <v-container class="" max-width="100%" fluid
  >
    <v-card
        class="rounded-xl align-center text-align-center pa-4"
        variant="tonal"
        elevation="0"
    >
      <v-card-title> Итоговый счет за всех</v-card-title>
      <v-list
          elevation="16"
          v-for="(item, index) in items"
          class="d-flex flex-row justify-space-between align-center rounded-xl ma-3"
      >
        <p class="ma-2">{{ index + 1 }}. {{ item.name }}</p>
      </v-list>
      <v-card-actions class="justify-center align-center d-flex">
        <v-btn class="border-md rounded-xl">Рассчитать</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
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