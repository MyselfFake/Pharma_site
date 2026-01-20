<template>
  <section class="my-4 py-4">
    <div class="container social-widget">
      <div class="row justify-content-center align-items-center">

        <!-- Facebook -->
        <div class="col-6 col-lg-2 text-center mb-4">
          <a
            href="https://www.facebook.com/pharmaciedelafrette/"
            target="_blank"
            class="social-link"
          >
            <img
              width="60"
              height="60"
              src="@/assets/facebook.webp"
              alt="Facebook"
            />
            <div class="mt-1">Suivez-nous sur Facebook !</div>
          </a>
        </div>

        <!-- Instagram -->
        <div class="col-6 col-lg-2 text-center mb-4">
          <a
            href="https://www.instagram.com/pharmaciedelafrette/"
            target="_blank"
            class="social-link"
          >
            <img
              width="60"
              height="60"
              src="@/assets/instagram.png"
              alt="Instagram"
            />
            <div class="mt-1">Suivez-nous sur Instagram !</div>
          </a>
        </div>

        <!-- Autres réseaux si nécessaire -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SocialWidget",
};
</script>

<style scoped>
.social-widget a.social-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.social-widget img {
  border-radius: 50%;
  margin-bottom: 0.5rem;
}
</style>
