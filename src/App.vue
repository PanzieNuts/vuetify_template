<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style>
/* Hide scrollbar globally */
html, body {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE 10+ */
}

html::-webkit-scrollbar,
body::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Edge */
}
</style>
