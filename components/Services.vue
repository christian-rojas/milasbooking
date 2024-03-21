<template>
  <div class="container mb-5" id="services">
    <h5 class="text-center">Selecciona el tipo de servicio que deseas agendar</h5>
    <p class="text-muted d-flex justify-content-start">
      **Se solicitará completar una ficha con los antecedentes de su mascotas
    </p>
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
          Consulta General
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
            <!-- <h3 style="display: inline-flex">Consultas</h3> -->
            <font-awesome-icon
              :icon="['fas', 'notes-medical']"
              style="font-size: 35px; margin-left: 15px; color: #d44a4a; display: block; margin: auto; padding: 20px"
            />
            <p>Asesoria sobre la prevención de enfermedades. Diagnóstico y tratamiento.</p>
            <button
              type="button"
              class="btn btn-primary d-block m-auto"
              data-bs-toggle="modal"
              data-bs-target="#bookingModal"
              @click="click()"
            >
              Reservar
            </button>
          </div>
        </div>
      </div>
      <div class="tab-pane fade pl-5 pr-5" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
        <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <div class="details">
            <!-- <h3 style="display: inline-flex">Cirugías</h3> -->
            <font-awesome-icon
              icon="heart-pulse"
              style="font-size: 35px; margin-left: 15px; color: #d44a4a; display: block; margin: auto; padding: 20px"
            />
            <p>
              En las consultas se solicitarán examenes complementarios, se instaurará tratamientos y en algunos casos
              hay patologias que requieren resolución quirúrgica, procedimientos u otros.
            </p>
            <button class="btn btn-primary d-block m-auto">Reservar</button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="modal-dialog modal-dialog-centered" id="bookingModal" tabindex="-1" aria-hidden="true"> -->
    <!-- <MercadoPagoComponent /> -->
    <!-- </div> -->
    <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingModal">
      Launch demo modal
    </button> -->

    <!-- Modal -->
    <div class="modal fade" id="bookingModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Reserva</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              @click="close()"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>nada para mostrar</p>
            <MercadoPagoComponent />
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MercadoPagoComponent from "./MercadoPagoComponent.vue";
let tempWindows = null;
export default {
  components: {
    MercadoPagoComponent,
  },
  methods: {
    async click(type) {
      if (sessionStorage.getItem("purchased")) {
        Calendly.initPopupWidget({ url: "https://calendly.com/milasvet-2024/30min" });
        return;
      }
      const config = useRuntimeConfig();
      const mp = new MercadoPago(config.public.meli, { locale: "es-CL" });
      const bricksBuilder = mp.bricks();
      const renderPaymentBrick = async (bricksBuilder) => {
        const settings = {
          initialization: {
            amount: 100,
            // preferenceId: "<PREFERENCE_ID>",
            payer: {
              firstName: "",
              lastName: "",
              email: "",
            },
          },
          customization: {
            visual: {
              style: {
                theme: "default",
              },
            },
            paymentMethods: {
              creditCard: "visa",
              debitCard: "visa",
              ticket: "all",
              bankTransfer: "all",
              atm: "all",
              maxInstallments: 1,
            },
          },
          callbacks: {
            onReady: () => {
              /*
             Callback llamado cuando el Brick está listo.
             Aquí puede ocultar cargamentos de su sitio, por ejemplo.
            */
            },
            onError: (error) => {
              // callback llamado para todos los casos de error de Brick
              console.error(error);
            },
            onSubmit: async ({ selectedPaymentMethod, formData }) => {
              try {
                let paymentResponse = null;
                await fetch("https://us-central1-vetsly.cloudfunctions.net/milasbooking", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(formData),
                })
                  .then((response) => response.json())
                  .then((res) => {
                    paymentResponse = res;
                    console.log("morris", paymentResponse);
                    if (paymentResponse.status == "approved") {
                      sessionStorage.setItem("purchased", true);
                    }
                    this.renderStatusScreenBrick(bricksBuilder, paymentResponse);
                  });
                // renderStatusScreenBrick(bricksBuilder);
              } catch (error) {
                console.log(error);
              }
            },
          },
        };
        tempWindows = window;
        window.paymentBrickController = await bricksBuilder.create("payment", "paymentBrick_container", settings);
      };
      renderPaymentBrick(bricksBuilder);
    },
    async close() {
      tempWindows.paymentBrickController.unmount();
    },
    async renderStatusScreenBrick(bricksBuilder, payment) {
      const settings = {
        initialization: {
          paymentId: payment.id,
        },
        callbacks: {
          onReady: () => {
            window.paymentBrickController.unmount();
          },
          onError: (error) => {
            // callback llamado solicitada para todos los casos de error de Brick
            console.error(error);
          },
        },
      };
      window.statusScreenBrickController = await bricksBuilder.create(
        "statusScreen",
        "statusScreenBrick_container",
        settings
      );
      setTimeout(() => {
        document.getElementById("statusScreenBrick_container").style.display = "none";
        Calendly.initPopupWidget({ url: "https://calendly.com/milasvet-2024/30min" });
      }, 6000);
    },
  },
};
</script>
<style lang="css"></style>
