<template>
  <div>
    <footer class="footer fixed-bottom bg-light pt-3" id="bookingFooter">
      <div class="container d-flex justify-content-between">
        <a href="#services" class="btn btn-primary m-auto mb-3">Reserva</a>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  mounted() {
    const div = document.getElementById("bookingFooter");
    const windowHeight = window.innerHeight;

    const documentHeight = document.body.clientHeight;
    console.log(documentHeight);

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition + windowHeight >= documentHeight) {
        div.style.display = "none";
      } else {
        div.style.display = "block";
      }
    };

    window.addEventListener("scroll", handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", handleScroll); // Clean up listener
  },
};
</script>
<style lang="css"></style>
