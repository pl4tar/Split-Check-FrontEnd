<template>
  <v-container class="d-flex " max-width="100%" fluid>
    <v-container max-width="33%">
      <peopleCard class="ma-2" />
    </v-container>    
    <v-container>
      <productCard class="ma-2" />
    </v-container>
  </v-container>
</template>

<script setup>
import productCard from "@/components/productCard.vue";
import peopleCard from "@/components/peopleCard.vue";
</script>

<style scoped>
</style>