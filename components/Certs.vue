<template>
  <div class="container pt-5 pb-5">
    <div class="row">
      <div class="col-md-4 mt-3 w-50 d-block m-auto">
        <div class="card shadow-lg bg-body-tertiary rounded p-3 certs">
          <font-awesome-icon :icon="['fas', 'bacteria']" style="font-size: 35px" />
          <p>Diplomado en Gastroenterología</p>
        </div>
      </div>
      <div class="col-md-4 mt-3 w-50 d-block m-auto">
        <div class="card shadow-lg bg-body-tertiary rounded p-3 certs">
          <font-awesome-icon :icon="['fas', 'bacteria']" style="font-size: 35px" />
          <p>Diplomado en Cirugía animales menores</p>
        </div>
      </div>
      <div class="col-md-4 mt-3 w-50 d-block m-auto">
        <div class="card shadow-lg bg-body-tertiary rounded p-3 certs">
          <font-awesome-icon :icon="['fas', 'bacteria']" style="font-size: 35px" />
          <p>Diplomado del paciente hospitalizado</p>
        </div>
      </div>
      <div class="col-md-4 mt-3 w-50 d-block m-auto">
        <div class="card shadow-lg bg-body-tertiary rounded p-3 certs">
          <font-awesome-icon :icon="['fas', 'bacteria']" style="font-size: 35px" />
          <p>Diplomado cirugía en tejidos blandos</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css">
p {
  text-align: center;
}
.certs {
  height: 150px;
}
</style>
