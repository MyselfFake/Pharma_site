/*
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
})

export default router
*/

// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Ordonnance from '../views/Ordonnance.vue';
import RendezVous from '../views/RendezVous.vue';
import Teleconsultation from '../views/Teleconsultation.vue';
import PharmacieInfo from '../views/PharmacieInfo.vue';
import PharmaciesDeGarde from '../views/PharmaciesDeGarde.vue';
import Actualites from '../views/Actualites.vue';
import MaterielMedical from '../views/MaterielMedical.vue';
import Parcourir from '../views/Parcourir.vue';
import Contact from '../views/Contact.vue';
import Connexion from '../views/Connexion.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/ordonnance', component: Ordonnance },
  { path: '/rendez-vous', component: RendezVous },
  { path: '/a-propos/teleconsultation-avec-medadom-10', component: Teleconsultation },
  { path: '/a-propos/pharmacie-de-la-frette-la-frette', component: PharmacieInfo },
  { path: '/pharmacies-de-garde', component: PharmaciesDeGarde },
  { path: '/actualites', component: Actualites },
  { path: '/materiel-medical', component: MaterielMedical },
  { path: '/parcourir-la-pharmacie/en-savoir-plus', component: Parcourir },
  { path: '/contact', component: Contact },
  { path: '/connexion', component: Connexion },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
