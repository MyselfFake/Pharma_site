<template>
  <section class="steps container">
    <div class="step" v-for="(step, index) in steps" :key="index">
      <img :src="step.image" />
      <div class="badge">{{ index + 1 }}</div>
      <p>{{ step.text }}</p>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    image: '/steps/envoi.jpg',
    text: "Prenez en photo votre ordonnance",
  },
  {
    image: '/steps/preparation.jpg',
    text: "Nous préparons vos produits",
  },
  {
    image: '/steps/commande.jpg',
    text: "Votre commande est prête",
  },
]
</script>

<style scoped>
.steps {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 0;
}
.step {
  text-align: center;
  max-width: 200px;
}
.badge {
  background: #3b82f6;
  color: white;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  margin: 0 auto 0.5rem;
}
</style>
