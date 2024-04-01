<!-- ExampleComponent.vue -->
<template>
  <!-- Navbar -->
  <NuxtLayout>
    <Navbar />
    <div class="card">
      <img src="./assets/banner_inicio.jpeg" class="card-img-top" alt="Your Image" />
      <div class="card-body">
        <div class="d-flex justify-content-center">
          <h2>Dra. Camila Rojas</h2>
          <!-- <button
          class="btn btn-primary mb-5"
          onclick="Calendly.initPopupWidget({url: 'https://calendly.com/milasvet-2024/30min'});return false;"
        >
          Reserva tu hora
        </button> -->
        </div>
      </div>
    </div>
    <!-- <MercadoPago /> -->
    <Welcome />
    <Description />
    <Certs />
    <!-- <Section /> -->
    <Services />
    <!-- <Booking /> -->
    <Footer />
  </NuxtLayout>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Section from "./components/Section.vue";
import Welcome from "./components/Welcome.vue";
import Footer from "./components/Footer.vue";
import Certs from "./components/Certs.vue";
// import MercadoPago from "./components/MercadoPagoComponent.vue";
import Booking from "./components/Booking.vue";
import Services from "./components/Services.vue";
import Description from "./components/Description.vue";
export default {
  components: {
    Navbar,
    Section,
    Welcome,
    Footer,
    Certs,
    // MercadoPago,
    Booking,
    Services,
    Description,
  },
};
</script>

<style scoped>
/* You can also add custom styles here */
#book {
  position: relative;
  margin-bottom: 0;
}
</style>
