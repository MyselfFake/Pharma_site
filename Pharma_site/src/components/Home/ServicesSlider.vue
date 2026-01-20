<template>
  <section class="services-slider py-5">
    <h2 class="text-center mb-4">Nos services</h2>
    <div class="slider-wrapper flex overflow-x-auto space-x-4 px-3">
      <ServiceCard
        v-for="(service, index) in services"
        :key="index"
        :title="service.title"
        :img="service.img"
        :description="service.description"
        :link="service.link"
      />
    </div>
  </section>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue'

defineProps({
  services: {
    type: Array,
    default: () => [
      { title: 'Maintien à domicile', img: '/assets/services/maintien.png', description: 'Nous vous aidons à rester à domicile', link: '#' },
      { title: 'Carte fidélité', img: '/assets/services/fidelite.png', description: 'Profitez de nos avantages toute l’année', link: '#' },
      { title: 'Location matériel médical', img: '/assets/services/materiel.png', description: 'Location et vente de matériel médical', link: '#' }
    ]
  }
})
</script>

<style scoped>
.services-slider .slider-wrapper {
  scroll-snap-type: x mandatory;
}
.services-slider .slider-wrapper > * {
  scroll-snap-align: start;
  min-width: 250px;
}
</style>
