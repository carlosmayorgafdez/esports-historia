<script setup>
defineProps({
  id: String,
  nombre: String,
  anio: Number,
})
</script>

<template>
  <RouterLink :to="`/competicion/${id}`" class="card">
    <h2>{{ nombre }}</h2>
    <p>{{ anio }}</p>
  </RouterLink>
</template>
<style scoped>
.card {
  display: block;
  background: white;
  padding: 16px 20px;
  margin-bottom: 16px;
  border-radius: 10px;
  text-decoration: none;
  color: #1a1a2e;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.15s;
}
.card:hover {
  transform: translateY(-3px);
}
.card h2 {
  margin: 0 0 6px;
  font-size: 1.2rem;
}
.card p {
  margin: 0;
  color: #666;
}
</style>