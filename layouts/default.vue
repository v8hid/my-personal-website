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

        <v-footer absolute app class="menu-bg-color">
          <div>Made with VueJS + NuxtJS + ❤️</div>
          <v-spacer></v-spacer>
          <div>&copy; {{ new Date().getFullYear() }}</div>
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
  p,h1,h2,h3,h4,h5,h6,.base-text-color{
    color: $va-text-color !important;
  }

  .base-bg-color{
  background: $va-body-bg-color;
    .box-bg-color{
      background: $va-box-bg-color;
    }
  }
  .menu-bg-color{
    background: $va-menu-bg-color !important;
    color:$va-footer-text-color !important ;
  }
  .sub-box-color{
    background: $va-sub-box-bg-color !important;
  }
}

</style>
