<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style>
html, body {
  overflow-y: auto;           
  scrollbar-gutter: stable;
}

body::-webkit-scrollbar {
  width: 8px;
}

body::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,0.2);
  border-radius: 4px;
}
</style>
