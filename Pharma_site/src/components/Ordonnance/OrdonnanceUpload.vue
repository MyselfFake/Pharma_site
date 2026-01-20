<template>
  <section class="upload container">
    <div class="upload-box">
      <div class="circle">+</div>
      <h3>Ajoutez votre ordonnance</h3>
      <p>Cliquez ou glissez un fichier</p>

      <input type="file" />
    </div>
  </section>
</template>

<style scoped>
.upload-box {
  border: 2px dashed #ccc;
  padding: 2rem;
  text-align: center;
  border-radius: 8px;
}
.circle {
  width: 50px;
  height: 50px;
  background: #3b82f6;
  color: white;
  border-radius: 50%;
  font-size: 2rem;
  margin: auto;
}
</style>
