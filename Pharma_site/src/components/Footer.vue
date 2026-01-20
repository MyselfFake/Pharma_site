<template>
  <footer class="footer">
    <!-- Réseaux sociaux -->
    <section class="footer-socials">
      <p>Suivez-nous :</p>
      <a href="https://www.instagram.com/pharmaciedelafrette/" target="_blank">Instagram</a>
      |
      <a href="https://www.facebook.com/100057656940550/" target="_blank">Facebook</a>
    </section>

    <!-- Infos principales -->
    <section class="footer-main">
      <div>
        <h3>Pharmacie de la Frette</h3>
        <p>
          100 route de Grenoble<br />
          38260 La Frette
        </p>
        <p>
          Tel : <a href="tel:0474546188">04 74 54 61 88</a><br />
          Email :
          <a href="mailto:pharmaciedelafrette@gmail.com">
            pharmaciedelafrette@gmail.com
          </a>
        </p>
        <router-link to="/contact">Nous contacter</router-link>
      </div>

      <div>
        <h3>Services</h3>
        <ul>
          <li><router-link to="/rendez-vous">Rendez-vous</router-link></li>
          <li><router-link to="/ordonnance">Ordonnance</router-link></li>
          <li><router-link to="/a-propos/teleconsultation-avec-medadom-10">Téléconsultation</router-link></li>
        </ul>
      </div>

      <div>
        <h3>La pharmacie</h3>
        <ul>
          <li><router-link to="/a-propos/pharmacie-de-la-frette-la-frette">Qui sommes-nous</router-link></li>
          <li><router-link to="/pharmacies-de-garde">Pharmacies de garde</router-link></li>
          <li><router-link to="/actualites">Actualités</router-link></li>
        </ul>
      </div>

      <div>
        <h3>Informations</h3>
        <ul>
          <li><router-link to="/mentions-legales">Mentions légales</router-link></li>
          <li><router-link to="/conditions-generales">CGU</router-link></li>
          <li><router-link to="/politique-confidentialite">Confidentialité</router-link></li>
        </ul>
      </div>
    </section>

    <!-- Bas de page -->
    <section class="footer-bottom">
      <small>© 2026 – Pharmacie de la Frette</small>
    </section>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  padding: 2rem;
  background: #f5f5f5;
  font-size: 14px;
}

.footer-socials {
  text-align: center;
  margin-bottom: 1.5rem;
}

.footer-main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.footer-main h3 {
  margin-bottom: 0.5rem;
}

.footer-main ul {
  list-style: none;
  padding: 0;
}

.footer-main li {
  margin-bottom: 0.3rem;
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid #ccc;
  padding-top: 1rem;
  font-size: 12px;
}
</style>
