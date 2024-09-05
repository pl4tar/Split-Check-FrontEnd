<template>
  <v-card
    class="rounded-xl align-center text-align-center pa-4"
    variant="tonal"
    elevation="0"
  >
    <h1 class="justify-center align-center d-flex px-2">
      Список пользователей
    </h1>
    <v-container>
      <v-list
        elevation="16"
        :items="items"
        item-title="name"
        item-value="id"
        class="rounded-xl"
      >
        <v-container class="d-flex justify-end">
          <v-btn density="compact" icon="mdi-check" class="ma-1"></v-btn> 
          <v-btn density="compact" icon="mdi-minus" class="ma-1"></v-btn> 
          </v-container
      ></v-list>
    </v-container>
    <v-responsive class="px-4 pt-4 align-center"
      ><v-text-field
        clearable
        label="Введите имя"
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
    ],
  }),
};
</script>

<style scoped>
</style>
