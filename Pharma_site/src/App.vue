<template>
  <body>
    <Header />
    <router-view />
    <Footer />
  </body>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Styles globaux si besoin */
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
