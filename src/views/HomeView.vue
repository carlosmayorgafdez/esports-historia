<script setup>
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import CompeticionCard from '../components/CompeticionCard.vue'

const competiciones = ref([])

onMounted(async () => {
  const snap = await getDocs(collection(db, 'competiciones'))
  competiciones.value = snap.docs.map(d => ({ id: d.id, ...d.data() }))
})
</script>

<template>
  <h1>Historia de los esports</h1>
  <CompeticionCard
    v-for="c in competiciones"
    :key="c.id"
    :id="c.id"
    :nombre="c.nombre"
    :anio="c.anio"
  />
</template>