<template>
  <div class="container">
    <div class="d-block">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" fill="#808">
        <path
          d="M316 189.3c-1.3-21.8-3.5-43.5-6.7-65.1-3.1-14.3-2-35.4-18.7-41-18.4-6-38.3-5.2-57.4-5.3-63.7.7-127.2 1.5-190.9 1.7-12.3 0-18.3 3-18.3 12 1 20 1.7 34.6 1 53-1 25-2 49-2.2 74 .2 14-.5 32.5 7.3 39.7s25.8 2.2 36 .9c21.5-2.3 43-4.1 64.5-5.5 52.9-2.9 112.6-2.4 166-2.2 15.4 0 20.8-4.9 20.3-21.8.6-13.4-.1-26.9-.9-40.4zm-17.7 46.1c-84.9-.4-168.8-1.9-253.3 8.2-1.7-51.2 3.3-95-.7-145.2 41.9-.8 66.4-3.1 108.7-3.8 37.1.5 88.8-3.3 124.5 1 5.4.3 9.2 2.5 9.9 8.2 2.6 9.7 4 19.7 5.3 29.6 4.1 33.7 8.2 68.1 5.6 102z"
        ></path>
        <foreignObject width="100%" height="100%">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style="display: flex; justify-content: center; align-items: center; height: 100%"
          >
            <h1 style="text-align: center; font-size: 50px">Servicios</h1>
          </div>
        </foreignObject>
      </svg>
    </div>
    <div class="row">
      <div class="col-md-12">
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
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <div class="details">
            <h3 style="display: inline-flex">Cirugías</h3>
            <font-awesome-icon icon="heart-pulse" style="font-size: 35px; margin-left: 15px; color: #d44a4a" />
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
