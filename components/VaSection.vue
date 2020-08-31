<template>
  <div class="container-fluid p-0 m-0">
    <div class="row justify-content-center text-center p-2 ">
      <div class="col-12 pb-0">
        <h3>{{title}}</h3>
      </div>
    </div>

    <va-divider v-if="subsection" icon="fab fa-vk" class="m-2"></va-divider>
    <va-divider v-else icon="fas fa-laptop-code" class="m-2"></va-divider>
    <div class="row justify-content-center text-start mx-0 m-4 p-2 box-bg-color rounded">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
props: {
  title:String,
  subsection:Boolean,
},
}
</script>

<style>

</style>
