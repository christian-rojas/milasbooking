<template>
  <div class="container" id="footer">
    <div class="row">
      <div class="col"></div>
      <div class="col-9">
        <p class="text-muted">¿Tienes dudas?</p>
        <h3 class="text-center">Contáctanos</h3>
        <ul class="list-unstyled custom-list">
          <li>
            <font-awesome-icon :icon="['fas', 'envelope']" style="font-size: 35px; color: #c71610" />
            <p>milasvet-2024@gmail.com</p>
          </li>
          <li>
            <font-awesome-icon :icon="['fab', 'whatsapp']" style="font-size: 35px; color: #25d366" />
            <p>+569-81831013</p>
          </li>
          <li>
            <font-awesome-icon :icon="['fab', 'facebook']" style="font-size: 35px; color: #4267b2" />
            <p>/milasvet</p>
          </li>
          <li>
            <font-awesome-icon :icon="['fab', 'instagram']" style="font-size: 35px; color: #c13584" />
            <p>@milasvet</p>
          </li>
        </ul>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
p {
  margin-left: 20px;
}
li {
  display: inline-flex;
  width: 100%;
  /* text-align: left; */
}
/* ul {
  text-align: left;
} */
.custom-list {
  text-align: left;
}

.custom-list li {
  text-align: left;
  display: flex;
}
.custom-list p {
  align-items: center;
}
p {
  line-height: 1.5; /* Adjust the value as needed */
  padding: 5px;
}

ul {
  text-align: left; /* Align the list items to the left */
  display: inline-block;
  margin-left: auto;
}
#footer {
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(167, 91, 209, 1) 0%, rgba(0, 212, 255, 1) 100%);
}
#footer p,
h3 {
  color: white;
}
</style>
