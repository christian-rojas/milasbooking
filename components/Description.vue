<template>
  <div class="container p-3">
    <div class="jumbotron">
      <h1 class="display-4 text-center">¿cómo funciona?</h1>
      <p class="lead text-muted">
        De acuerdo al motivo de consulta se evaluará si el servicio es apto para telemedicina. Si no es el caso, se
        devolverá el 100% del dinero en un plazo de 48 horas
      </p>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary d-block m-auto"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Términos y Condiciones
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <!-- <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5> -->
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p class="card-text">
                Para garantizar la mejor atención posible, la idoneidad del servicio de telemedicina se determinará en
                función del motivo de consulta.
              </p>
              <ul>
                <li>¿Qué se evalúa?</li>
                <ul>
                  <li>La complejidad del problema o condición médica.</li>
                  <li>La necesidad de un examen físico presencial.</li>
                  <li>La disponibilidad de tecnología adecuada por parte del paciente</li>
                  <li>La capacidad del paciente para comprender y utilizar la plataforma de telemedicina.</li>
                </ul>
                <li>¿En qué casos la telemedicina NO es recomendable?</li>
                <ul>
                  <li>Urgencias o emergencias médicas.</li>
                  <li>Condiciones que requieren un examen físico completo.</li>
                  <li>Procedimientos médicos que no pueden realizarse a distancia.</li>
                  <li>Pacientes con dificultades para comprender o utilizar la plataforma de telemedicina</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- <p><a class="btn btn-primary btn-lg" href="/terminos" role="button">Learn More</a></p> -->
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css"></style>
