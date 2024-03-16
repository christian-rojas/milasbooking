<template>
  <div class="container pt-5 pb-5">
    <div class="row">
      <div class="col-md-6 d-block">
        <div class="card shadow-lg bg-body-tertiary rounded p-3 certs">
          <font-awesome-icon :icon="['fas', 'bacteria']" style="font-size: 35px; color: #3d6531" />
          <p>Diplomado en Gastroenterología</p>
        </div>
      </div>
      <div class="col-md-6 mt-5 d-block">
        <div class="card shadow-lg bg-body-tertiary rounded p-2 certs">
          <font-awesome-icon :icon="['fas', 'truck-medical']" style="font-size: 35px; color: #b76178" />
          <p>Diplomado internacional en terapéutica y monitoreo del paciente hospitalizado</p>
        </div>
      </div>
      <div class="col-md-6 mt-5 d-block">
        <div class="card shadow-lg bg-body-tertiary rounded p-3 certs">
          <font-awesome-icon :icon="['fas', 'dog']" style="font-size: 35px; color: #b97534" />
          <p>Diplomado Cirugía en tejidos blandos</p>
        </div>
      </div>
      <div class="col-md-6 mt-5 d-block">
        <div class="card shadow-lg bg-body-tertiary rounded p-3 certs">
          <font-awesome-icon :icon="['fas', 'kit-medical']" style="font-size: 35px; color: #e54545" />
          <p>Diplomado de emergencias y cuidados intensivos</p>
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
  height: 120px;
  margin-left: 10%;
  margin-right: 10%;
}
</style>
