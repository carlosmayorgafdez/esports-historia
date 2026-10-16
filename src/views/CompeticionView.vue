<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'

const route = useRoute()
const competicion = ref(null)

onMounted(async () => {
  const snap = await getDoc(doc(db, 'competiciones', route.params.id))
  competicion.value = snap.exists() ? snap.data() : null
})
</script>

<template>
  <RouterLink to="/" class="volver">← Volver</RouterLink>

  <div v-if="competicion" class="detalle">
    <h1>{{ competicion.nombre }}</h1>
    <p class="meta">{{ competicion.juego }} · {{ competicion.anio }}</p>
    <p>{{ competicion.descripcion }}</p>
  </div>
  <p v-else>Cargando o no encontrado...</p>
</template>

<style scoped>
.volver {
  display: inline-block;
  margin-bottom: 16px;
  color: #1a1a2e;
  font-weight: bold;
  text-decoration: none;
}
.detalle {
  background: white;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
.detalle h1 {
  margin-top: 0;
}
.meta {
  color: #666;
}
</style>