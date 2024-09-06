<template>
  <v-card
    class="rounded-xl align-center text-align-center pa-4"
    variant="tonal"
    elevation="0"
  >
    <v-card-title>
      <h1 class="justify-center align-center d-flex px-2">
        Список пользователей
      </h1>
    </v-card-title>
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
    <v-responsive class="px-4 pt-4 align-center"
      ><v-text-field
        v-model="items.name"
        clearable
        label="Введите имя"
        variant="solo-filled"
      ></v-text-field
    ></v-responsive>

    <v-card-actions class="justify-center align-center d-flex px-2">
      <v-btn @click="createPost" class="border-md rounded-xl">Добавить</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        name: "Item #1",
      },
      {
        name: "Item #2",
      },
      {
        name: "Item #3",
      },
    ],
  }),
  methods: {
    createPost() {
      this.items.name = Date.now();
      this.$emit("create", this.items);
      this.items = {
        name: "",
      };
    },
  },
};
</script>

<style scoped>
</style>
