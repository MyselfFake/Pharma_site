<template>
  <div class="service-card shadow p-3 rounded text-center">
    <img :src="img" :alt="title" class="mb-3" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <a v-if="link" :href="link" class="btn btn-outline-primary mt-2">En savoir plus</a>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  img: String,
  description: String,
  link: String
})
</script>

<style scoped>
.service-card img {
  max-width: 100px;
  margin: 0 auto;
}
</style>
