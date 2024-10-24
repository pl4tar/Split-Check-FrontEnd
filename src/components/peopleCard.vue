<template>
  <v-card
      class="rounded-xl align-center text-align-center pa-4"
      variant="tonal"
      elevation="0"
  >
    <!--    заголовок-->
    <v-card-title>
      <h3
          class="justify-center align-center d-flex px-2"
      >
        Список друзей
      </h3>
    </v-card-title>
    <!--    списко пользователей -->
    <v-container
        v-if="peopleStore.peoples.length > 0"
        class="overflow-y-auto"
        max-height="500"
    >
      <v-list
          elevation="10"
          v-for="(peoples, index) in peopleStore.peoples"
          :key="peoples.id"
          class="d-flex flex-row justify-space-between align-center rounded-xl ma-3"
      >
        <p
            class="ma-2"
        >
          {{ index + 1 }}. {{ peoples.name }}
        </p>
        <!--кнопка удаления-->
        <div>
          <v-btn
              density="compact"
              icon="mdi-minus"
              class="ma-3"
              @click="peopleStore.deletePeoleItem(peoples.id)"
          >
          </v-btn>
        </div>
      </v-list>
    </v-container>
    <v-container
        v-else
        class="overflow-auto d-flex justify-center align-center text-center"
    >
      <v-card
          class="overflow-auto border-sm rounded-xl ma-3 d-flex justify-center align-center text-center"
          min-height="50"
          width="100%"
          elevation="10"
      >
        <h3
            class="font-weight-bold"
        >
          Добавьте друзей
          <v-icon
              size="small"
              icon="mdi-account-plus-outline"
          />
        </h3>
      </v-card>
    </v-container>
    <!--    ввод данных-->
    <v-responsive
        class="px-4 pt-4 align-center"
    >
      <v-text-field
          v-model="name"
          clearable
          label="Введите имя"
          variant="solo-filled"
      ></v-text-field
      >
    </v-responsive>
    <v-card-actions
        class="justify-center align-center d-flex px-2"
    >
      <v-btn
          @click="addPeopleCard"
          :disabled="!name"
          class="border-md rounded-xl"
      >
        Добавить
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import {usePeopleStore} from "@/stores/peopleStore";
import {ref} from "vue"

let name = ref('')
const peopleStore = usePeopleStore()
const addPeopleCard = () => {
  peopleStore.addPeoleItem(
      name.value
  )
  name.value = ''
}
</script>