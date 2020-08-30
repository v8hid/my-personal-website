<template>
  <!-- <div> -->
    <v-app id="inspire">
      <div class="container-fluid px-0 base-bg-color">
        <nav-bar></nav-bar>
        <v-main app>
          <v-container fluid >
            <Nuxt />
          </v-container>
        </v-main>

        <v-footer app>

        </v-footer>
      </div>
    </v-app>

  <!-- </div> -->
</template>
<script>
export default {

}
</script>
<style lang=scss>

div{
  p,h1,h2,h3,h4,h5,h6{
    color: $va-text-color;
  }

  .base-bg-color{
  background: $va-body-bg-color;
  .box-bg-color{
    background: $va-box-bg-color;
  }
}
}

</style>
