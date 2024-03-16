<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
    <div class="container">
      <a class="navbar-brand" href="#" style="color: white">MilasVet</a>
      <img src="./../assets/milas_logo.png" width="45px" alt="" />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#services">Agendar</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style lang="css">
#navbar {
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(167, 91, 209, 1) 0%, rgba(0, 212, 255, 1) 100%);
}
</style>
