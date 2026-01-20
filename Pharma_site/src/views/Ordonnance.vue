<template>
  <main class="content-wrapper">

    <OrdonnanceHero />

    <OrdonnanceSteps />

    <OrdonnanceUpload />

    <OrdonnanceRegister />

  </main>
</template>

<script setup>
import OrdonnanceHero from '@/components/Ordonnance/OrdonnanceHero.vue'
import OrdonnanceSteps from '@/components/Ordonnance/OrdonnanceSteps.vue'
import OrdonnanceUpload from '@/components/Ordonnance/OrdonnanceUpload.vue'
import OrdonnanceRegister from '@/components/Ordonnance/OrdonnanceRegister.vue'
</script>

<style scoped>
.content-wrapper {
  padding-top: 2rem;
}
</style>
