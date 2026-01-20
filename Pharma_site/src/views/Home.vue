<template>
  <div>
    <!-- Hero / Accueil -->
    <HeroSection />

    <!-- Services -->
    <ServicesSlider />

    <!-- Social / Réseaux -->
    <SocialWidget />

    <!-- Autres sections si besoin -->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import HeroSection from "@/components/Home/HeroSection.vue";
import ServicesSlider from "@/components/Home/ServicesSlider.vue";
import SocialWidget from "@/components/Home/SocialWidget.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    HeroSection,
    ServicesSlider,
    SocialWidget,
  },
};
</script>

<style scoped>
/* Styles globaux pour Home si nécessaire */
</style>
