<template>
  <header class="header">

    <!-- Bandeau haut -->
    <div class="header-top">
      <div class="container">
        <div class="logo-block">
          <router-link to="/" class="logo">
            <img src="../assets/logo-pharmacie-reference.svg" alt="Pharmacie de la Frette" />
          </router-link>

          <div class="title">
            <router-link to="/">PHARMACIE DE LA FRETTE</router-link>
            <p>
              Tel :
              <a href="tel:0474546188">04 74 54 61 88</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation principale -->
    <nav class="main-nav">
      <div class="container">
        <ul class="menu">

          <li>
            <router-link to="/ordonnance">Envoi d’ordonnance</router-link>
          </li>

          <li class="has-submenu">
            <span>Services & rendez-vous</span>
            <ul class="submenu">
              <li><router-link to="/rendez-vous">Nos rendez-vous</router-link></li>
              <li><router-link to="/a-propos/teleconsultation-avec-medadom-10">Téléconsultation</router-link></li>
            </ul>
          </li>

          <li class="has-submenu">
            <span>Notre pharmacie</span>
            <ul class="submenu">
              <li><router-link to="/a-propos/pharmacie-de-la-frette-la-frette">Qui sommes-nous ?</router-link></li>
              <li><router-link to="/#horaires">Nos horaires</router-link></li>
              <li><router-link to="/a-propos/le-recyclage-des-medicaments-16">Recyclage</router-link></li>
              <li><router-link to="/a-propos/liens-et-numeros-utiles-5">Liens utiles</router-link></li>
              <li><router-link to="/suivi-grossesse-et-maternite">Suivi grossesse</router-link></li>
              <li><router-link to="/application-mobile">Application mobile</router-link></li>
            </ul>
          </li>

          <li>
            <router-link to="/pharmacies-de-garde">Pharmacies de garde</router-link>
          </li>

          <li class="has-submenu">
            <span>Actualités</span>
            <ul class="submenu">
              <li><router-link to="/actualites">Actualités santé</router-link></li>
              <li><router-link to="/conseils">Conseils médicaux</router-link></li>
              <li><router-link to="/epidemies">Cartes épidémiques</router-link></li>
            </ul>
          </li>

          <li>
            <router-link to="/materiel-medical">Matériel médical</router-link>
          </li>

          <li class="has-submenu">
            <span>En savoir plus</span>
            <ul class="submenu">
              <li><router-link to="/a-propos/catalogue-orkyn-25">Catalogue ORKYN</router-link></li>
              <li><router-link to="/parcourir-la-pharmacie/en-savoir-plus">Toutes les pages</router-link></li>
            </ul>
          </li>

          <li class="account">
            <router-link to="/connexion">Mon compte</router-link>
          </li>

        </ul>
      </div>
    </nav>

  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  border-bottom: 1px solid #ddd;
}

.header-top {
  padding: 10px 0;
}

.logo-block {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo img {
  height: 60px;
}

.title a {
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  color: #000;
}

.main-nav {
  background: #f7f7f7;
}

.menu {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  padding: 10px 0;
  margin: 0;
}

.menu > li {
  position: relative;
}

.menu a,
.menu span {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  cursor: pointer;
}

.has-submenu:hover .submenu {
  display: block;
}

.submenu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #ddd;
  list-style: none;
  padding: 10px;
  min-width: 220px;
  z-index: 10;
}

.submenu li {
  margin-bottom: 6px;
}

.submenu li:last-child {
  margin-bottom: 0;
}

.account {
  margin-left: auto;
  font-weight: bold;
}
</style>
