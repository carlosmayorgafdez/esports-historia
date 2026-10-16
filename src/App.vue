<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
</template>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f4f4f8;
}
main {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
}
</style>