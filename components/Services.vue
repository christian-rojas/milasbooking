<template>
  <div class="container mb-5" id="services">
    <ul class="nav nav-pills p-2" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-home"
          type="button"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
        >
          Consultas
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-profile"
          type="button"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="false"
        >
          Gastroenterología
        </button>
      </li>
    </ul>
    <div class="tab-content pl-5 pr-5" id="pills-tabContent">
      <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
        <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <div class="details">
            <h3 style="display: inline-flex">Consultas</h3>
            <font-awesome-icon
              :icon="['fas', 'notes-medical']"
              style="font-size: 35px; margin-left: 15px; color: #d44a4a"
            />
            <p>
              exámenes físicos completos de los animales y pruebas adicionales según sea necesario. vacunas y asesoria
              sobre la prevención de enfermedades. Diagnóstico y tratamiento. pruebas de laboratorio, como análisis de
              sangre y pruebas de diagnóstico por imagen, como radiografías y ecografías.
            </p>
            <button class="btn btn-primary d-block m-auto">Reservar</button>
          </div>
        </div>
      </div>
      <div class="tab-pane fade pl-5 pr-5" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
        <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <div class="details">
            <h3 style="display: inline-flex">Cirugías</h3>
            <font-awesome-icon icon="heart-pulse" style="font-size: 35px; margin-left: 15px; color: #d44a4a" />
            <p>
              desarrollo planes de tratamiento adecuados, que pueden incluir medicamentos, cirugía u otros
              procedimientos médicos. Realizar procedimientos de esterilización/castración en animales domésticos.
            </p>
            <button class="btn btn-primary d-block m-auto">Reservar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css"></style>
