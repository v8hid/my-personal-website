<template>
  <div class="row justify-content-center align-content-center ">
        <div class="my-auto mr-n1 w-25 dropdown-divider"></div>
        <i :class="iconClass"></i>
        <div class="my-auto ml-n1 w-25 dropdown-divider"></div>
  </div>
</template>

<script>
export default {
props:{
  icon:String,
},
computed:{
  iconClass(){
    return "fa-2x " + this.icon;
  }
}
}
</script>

<style lang='scss' scoped>
div{
  .dropdown-divider{
    border-color:$primary;
  }
  color:$primary;
}
</style>
