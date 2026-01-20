<template>
  <section class="hero-banner text-center py-5 bg-light">
    <h1>Bienvenue dans notre pharmacie</h1>
    <p>Profitez de nos services en ligne : horaires, ordonnances, rendez-vous</p>
    <div class="hero-buttons mt-4">
      <a class="btn btn-primary mx-2" href="/a-propos">En savoir plus</a>
      <a class="btn btn-outline-primary mx-2" href="/ordonnance">Envoyer une ordonnance</a>
      <a class="btn btn-outline-primary mx-2" href="/rendez-vous">Prendre rendez-vous</a>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero-banner {
  background-color: #f3f5f7;
}
.hero-buttons a {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
}
</style>
