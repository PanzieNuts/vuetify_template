<template>
        <h1>Home</h1>
        <p>Welcome to the home page!</p>
        <p>{{ name }}</p>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('test')
</script>

<style scoped>

</style>