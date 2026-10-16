<template>
  <nav class="navbar">
    <span class="logo">Esports Historia</span>
    <RouterLink to="/">Inicio</RouterLink>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  gap: 24px;
  align-items: center;
  padding: 16px 32px;
  background: #1a1a2e;
}
.navbar a,
.logo {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
</style>