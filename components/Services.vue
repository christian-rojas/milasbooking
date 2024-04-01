<template>
  <div class="container mb-5" id="services">
    <h5 class="text-center">Selecciona el tipo de servicio que deseas agendar</h5>
    <p class="text-muted d-flex justify-content-start">
      Se solicitará completar una ficha con los antecedentes de su mascotas
    </p>
    <p class="text-muted d-flex justify-content-start">
      Recuerde que es un servicio de telemedicina por lo tanto que no se realizaran vacunas ni antiparsitarios
    </p>
    <div class="row">
      <div class="col-md-12">
        <ul class="nav nav-pills flex-column p-2 d-block m-auto" id="pills-tab" role="tablist">
          <li class="nav-item d-grid" role="presentation">
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
          <li class="nav-item d-grid" role="presentation">
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
          <li class="nav-item d-grid" role="presentation">
            <button
              class="nav-link"
              id="pills-heridas-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-heridas"
              type="button"
              role="tab"
              aria-controls="pills-heridas"
              aria-selected="false"
            >
              Manejo de heridas
            </button>
          </li>
        </ul>
      </div>
    </div>
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
            <div class="text-center">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#bookingModal"
                @click="click()"
                id="apple"
                v-show="isBooked"
              >
                Reservar
              </button>
            </div>
            <div class="text-center">
              <a
                v-show="!isBooked"
                class="btn btn-primary"
                @click="setup('consulta')"
                href="https://milasvet.youcanbook.me"
                >Agendar</a
              >
            </div>
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
            <div class="text-center">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#bookingModal"
                @click="click()"
                id="apple"
                v-show="isBooked"
              >
                Reservar
              </button>
            </div>
            <div class="text-center">
              <a
                v-show="!isBooked"
                class="btn btn-primary"
                @click="setup('gastro')"
                href="https://milasvet.youcanbook.me"
                >Agendar</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade pl-5 pr-5" id="pills-heridas" role="tabpanel" aria-labelledby="pills-heridas-tab">
        <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <div class="details">
            <!-- <h3 style="display: inline-flex">Cirugías</h3> -->
            <font-awesome-icon
              :icon="['fas', 'bone']"
              style="font-size: 35px; margin-left: 15px; color: #d44a4a; display: block; margin: auto; padding: 20px"
            />
            <p>
              En esta consulta se necesitara fotos de la lesiones y se abarcara el tratamiento adecuado para su
              cicatrizacion optima en la cual se entregara asesoria por ejemplo: manejo quirurjico primario y/o manejos
              con apositos adecuados dependiendo del tipo de herida y su condicion. Eventualmente se gestionara en caso
              de ser necesario derivaciones directo a pabellon y/o personas que puedan ir a realizar los vendajes en
              casa o entregar asesoria para que ustedes como tutores puedan realizar los cambios.
            </p>
            <div class="text-center">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#bookingModal"
                @click="click()"
                id="apple"
                v-show="isBooked"
              >
                Reservar
              </button>
            </div>
            <div class="text-center">
              <a
                v-show="!isBooked"
                @click="setup('heridas')"
                class="btn btn-primary"
                href="https://milasvet.youcanbook.me"
                >Agendar</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="bookingModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Confirma tu reserva: ${{ totalAmount }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              @click="close()"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div v-show="isPayed">
              <p>Por favor completa el siguiente formulario para conocer mas a tu mascota y preparas nuestra reunion</p>
              <a href="https://forms.gle/qVXXeehKk9o2P3iN8">formulario de consulta</a>
            </div>
            <MercadoPagoComponent v-show="!isPayed" />
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MercadoPagoComponent from "./MercadoPagoComponent.vue";
import { useRoute } from "nuxt/app";
let tempWindows = null;
export default {
  data() {
    return {
      isBooked: false,
      isPayed: false,
      services: {
        consulta: 15000,
        gastro: 25000,
        heridas: 15000,
      },
      totalAmount: 15000,
    };
  },
  components: {
    MercadoPagoComponent,
  },
  mounted() {
    const route = useRoute();
    const click = route.query.click;

    if (click) {
      this.isBooked = true;
      document.getElementById("apple").click();
    }
  },
  methods: {
    async click() {
      const isPayedCheck = sessionStorage.getItem("isPayed");
      if (isPayedCheck) {
        this.isPayed = true;
      }
      const config = useRuntimeConfig();
      const pk = "APP_USR-2477016f-7b97-4fad-aa38-407bcf8c1849";
      const mp = new MercadoPago(pk, { locale: "es-CL" });
      const bricksBuilder = mp.bricks();
      let monto = this.services[sessionStorage.getItem("type")] || 15000;

      const renderPaymentBrick = async (bricksBuilder) => {
        const settings = {
          initialization: {
            amount: monto,
            // preferenceId: "<PREFERENCE_ID>",
            // payer: {
            //   firstName: "",
            //   lastName: "",
            //   email: "",
            // },
          },
          customization: {
            visual: {
              style: {
                theme: "default",
              },
            },
            paymentMethods: {
              creditCard: "all",
              debitCard: "all",
              ticket: "all",
              bankTransfer: "all",
              atm: "all",
              maxInstallments: 1,
              mercadoPago: "all",
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
                fetch("https://us-central1-vetsly.cloudfunctions.net/milasbooking", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(formData),
                })
                  .then((response) => response.json())
                  .then((res) => {
                    if (res.status == "approved") {
                      sessionStorage.setItem("isPayed", true);
                      this.isPayed = true;
                    }
                    paymentResponse = res;
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
      }, 8000);
    },
    setup(type) {
      sessionStorage.setItem("type", type);
      this.totalAmount = this.services[type];
    },
  },
};
</script>
<style lang="css"></style>
