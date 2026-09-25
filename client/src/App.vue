<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NonExistentComponent from './components/NonExistentComponent.vue'
</script>

<template>
  <header>
    <RouterLink to="/guider">Utpost</RouterLink>
  </header>
  <main>
    <NonExistentComponent />
    <RouterView />
  </main>
</template>
