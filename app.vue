<!-- ExampleComponent.vue -->
<template>
  <!-- Navbar -->
  <Navbar />
  <!-- Slider -->
  <!-- <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://via.placeholder.com/800x400" class="d-block w-100" alt="Slider Image 1">
      </div>
      <div class="carousel-item">
        <img src="https://via.placeholder.com/800x400" class="d-block w-100" alt="Slider Image 2">
      </div>
      <div class="carousel-item">
        <img src="https://via.placeholder.com/800x400" class="d-block w-100" alt="Slider Image 3">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div> -->

  <!-- <div class="card bg-dark text-dark d-flex flex-column">
    <img class="card-img" src="./assets/banner_milasbooking.png" alt="Card image" />
    <div class="card-img-overlay">
    </div>
  </div> -->
  <div class="card">
    <img src="./assets/banner_milasbooking.png" class="card-img-top" alt="Your Image" />
    <div class="card-body">
      <div class="d-flex justify-content-center">
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
  <Certs />
  <!-- <Section /> -->
  <Services />
  <Booking />
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Section from "./components/Section.vue";
import Welcome from "./components/Welcome.vue";
import Footer from "./components/Footer.vue";
import Certs from "./components/Certs.vue";
import MercadoPago from "./components/MercadoPago.vue";
import Booking from "./components/Booking.vue";
import Services from "./components/Services.vue";
export default {
  components: {
    Navbar,
    Section,
    Welcome,
    Footer,
    Certs,
    MercadoPago,
    Booking,
    Services,
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
