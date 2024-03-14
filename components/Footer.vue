<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col-9">
        <h3 class="text-center">Contáctanos</h3>
        <ul class="list-unstyled custom-list">
          <li>
            <font-awesome-icon :icon="['fas', 'envelope']" style="font-size: 35px" />
            <p>milasvet-2024@gmail.com</p>
          </li>
          <li>
            <font-awesome-icon :icon="['fab', 'whatsapp']" style="font-size: 35px" />
            <p>+569-81831013</p>
          </li>
          <li>
            <font-awesome-icon :icon="['fab', 'facebook']" style="font-size: 35px" />
            <p>/milasvet</p>
          </li>
          <li>
            <font-awesome-icon :icon="['fab', 'instagram']" style="font-size: 35px" />
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
</style>
