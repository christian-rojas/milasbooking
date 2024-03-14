<template>
  <div>
    <button type="submit" class="btn btn-primary" @click="click()">Enviar</button>
    <div id="paymentBrick_container"></div>
    <div id="statusScreenBrick_container"></div>
  </div>
</template>
<script>
export default {
  methods: {
    async click() {
      const config = useRuntimeConfig();

      const mp = new MercadoPago(config.public.meli, { locale: "es-CL" });
      const bricksBuilder = mp.bricks();
      const renderPaymentBrick = async (bricksBuilder) => {
        const settings = {
          initialization: {
            amount: 10000,
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
                await fetch("http://localhost:4000/payment", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(formData),
                })
                  .then((response) => response.json())
                  .then((res) => {
                    console.log(res);
                  });
              } catch (error) {
                console.log(error);
              }

              const renderStatusScreenBrick = async (bricksBuilder) => {
                const settings = {
                  initialization: {
                    paymentId: "1317414674", // id de pago para mostrar
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
                }, 6000);
              };
              renderStatusScreenBrick(bricksBuilder);
            },
          },
        };
        window.paymentBrickController = await bricksBuilder.create("payment", "paymentBrick_container", settings);
      };
      renderPaymentBrick(bricksBuilder);
    },
  },
};
</script>
<style lang="css"></style>
