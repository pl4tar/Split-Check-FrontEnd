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
        Список продуктов
      </h3>
    </v-card-title>
    <!--    список продуктов -->
    <v-container
        v-if="foodStore.foodList.length > 0"
        class="overflow-y-auto"
        max-height="500"
    >
      <v-list
          elevation="10"
          v-for="(foodList, index) in foodStore.foodList"
          :key="foodList.id"
          class="d-flex flex-row justify-space-between align-center rounded-xl ma-3 "
      >
        <p class="d-flex ma-2 align-center">
          {{ index + 1 }}. {{ foodList.foodName }}
        </p>
        <!--        <v-chip-group-->
        <!--            v-for="person in foodList.peopleList"-->
        <!--            :key="person"-->
        <!--        >-->
        <!--          <v-chip>{{foodStore.getPersonName(person)}}</v-chip>-->
        <!--        </v-chip-group>-->
        <div>
          <p
              class="d-flex ma-2 align-center"
          >
            {{ foodList.cost }}
            <v-icon
                size="x-small"
                icon="mdi-currency-rub"
            />
            <v-btn
                density="compact"
                icon="mdi-minus"
                class="d-flex ma-3"
                @click="foodStore.deleteFoodItem(foodList.id)"
            >
            </v-btn>
          </p>
        </div>
      </v-list>
    </v-container>
    <!--    ввод продуктов и привязка к пользователю-->
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
          Добавьте продукты
          <v-icon
              size="small"
              icon="mdi-bag-personal-plus-outline"
          />
        </h3>
      </v-card>
    </v-container>
    <v-form>
      <div class="pa-2 ma-2 d-flex align-center justify-space-between">
        <v-text-field
            v-model="foodName"
            label="Название продукта"
            prepend-icon="mdi-food-outline"
            type="text"
            class="w-100"
            hide-details="auto"
            variant="solo-filled"
        />
        <v-text-field
            v-model="foodCost"
            label="Стоимость"
            prepend-icon="mdi-currency-rub"
            class="ml-4 w-75"
            type="number"
            hide-details="auto"
            variant="solo-filled"
        />
      </div>
      <div class="pa-2 ma-2 d-flex align-center justify-space-between">
        <v-combobox
            v-model="peoleList"
            :items="foodStore.peoples"
            item-title="name"
            item-value="id"
            prepend-icon="mdi-account-group-outline"
            clearable
            chips
            multiple
            label="Выбирите друга"
            variant="solo-filled"
            class="w-75"
        />
        <v-combobox
            v-model="whoPaid"
            :items="foodStore.peoples"
            item-title="name"
            item-value="id"
            autocomplete="on"
            clearable
            chips
            label="Выбирите, кто платил за продукт"
            variant="solo-filled"
            class="ml-4 w-75"
        />
      </div>
      <div class="justify-center align-center d-flex">
        <v-btn
            @click="addFoodCard"
            :disabled="!(foodName && foodCost && whoPaid && peoleList)"
            class="border-md rounded-xl d-flex"
        >
          Добавить
        </v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script setup>
import {usePeopleStore} from "@/stores/peopleStore.js";
import {ref} from "vue"

let foodName = ref('')
let foodCost = ref(0)
let peoleList = ref([])
let whoPaid = ref([])
const foodStore = usePeopleStore()
const addFoodCard = () => {
  if (foodName.value.length >= 1) {
    foodStore.addFoodItem(
        foodName.value,
        foodCost.value,
        peoleList.value,
        whoPaid.value
    )
  } else {
    alert('Поле заполнения пустое')
  }
  foodName.value = ''
  foodCost.value = 0
  peoleList.value = []
}
</script>