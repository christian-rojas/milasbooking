<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <div class="details">
            <h3>Consultas</h3>
            <font-awesome-icon :icon="['fas', 'notes-medical']" style="font-size: 35px" />
            <p>
              exámenes físicos completos de los animales y pruebas adicionales según sea necesario. vacunas y asesoria
              sobre la prevención de enfermedades. Diagnóstico y tratamiento. pruebas de laboratorio, como análisis de
              sangre y pruebas de diagnóstico por imagen, como radiografías y ecografías.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <div class="details">
            <h3>Cirugías</h3>
            <font-awesome-icon icon="heart-pulse" style="font-size: 35px" />
            <p>
              desarrollo planes de tratamiento adecuados, que pueden incluir medicamentos, cirugía u otros
              procedimientos médicos. Realizar procedimientos de esterilización/castración en animales domésticos.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  components: {
    FontAwesomeIcon,
  },
};
</script>
<style scoped>
.container {
  font-family: Arial, sans-serif;
  margin: 0 auto;
}

.card {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  /* box-shadow: 0px 0px 3px 0px; */
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  margin: 10px 10px 10px 10px;
  --e-column-margin-right: 10px;
  --e-column-margin-left: 10px;
  padding: 0px 0px 0px 0px;
}

.icon {
  font-size: 36px;
  margin-right: 20px;
}

.details {
  flex: 1;
  padding: 20px;
}

h3 {
  margin-bottom: 5px;
}

p {
  margin: 0;
  line-height: 1.4;
}

button {
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}
</style>
