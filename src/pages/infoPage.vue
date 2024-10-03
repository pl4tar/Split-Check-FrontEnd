<template>
  <v-main class="d-flex justify-center align-center">
    <v-card
        class="w-auto rounded-xl justify-center align-center text-align-center pa-6"
        variant="tonal"
    >
      <h1 class="justify-center align-center d-flex px-2">
        Добро пожаловать!
      </h1>
      <div class="d-flex flex-column text-left align-center justify-center">
          <p>
            Это приложение созданно для больших конмапий, котрые постоянно находятся
          </p>
          <p>
            в затруднительном положении, когда встает вопрос денях)
          </p>
      </div>
      <v-card-text class="d-flex flex-column text-left align-center justify-center text-h6 font-weight-medium">
        <div class="d-flex align-center">
          <v-icon
              size="large"
              icon="mdi-roman-numeral-1"
          />
          Введите всех своих друзей (желательно, чтобы имнеа не повторялись)
        </div>
        <div class="d-flex align-center">
          <v-icon
              size="large"
              icon="mdi-roman-numeral-2"
          />
          Введите все продукты и цены, а также укажите имена друзей
        </div>
        <div class="d-flex align-center">
          <v-icon
              size="large"
              icon="mdi-roman-numeral-3"
          />
          Перейдите на вкладку с расчетем и нажмите рассчитать
        </div>
      </v-card-text>
      <v-card-actions class="justify-center align-center">
        <v-btn @click="$router.push('/calculation')">
          Начать
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-main>
</template>
