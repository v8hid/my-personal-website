<template>
  <div class="container-fluid no-gutters  p-1" >

    <va-section title="About Me">
      <div class="col-8 col-sm-4">
        <img src="~/assets/images/vahid.jpg" alt="My Picture" class="img-fluid rounded-circle img-max">
      </div>

      <div class="col-12 col-sm-8">
        <h5>Vahid Khorasani-nejad </h5>
        <div class="text-primary"><i class="fas fa-map-marked-alt"></i> Istanbul, Turkey</div>
        <p v-html="aboutText"></p>
      </div>
      <div class="col-12 col-sm-4">
        <div class="container-fluid">
          <div class="row">
            <div class="badge p-2 mr-2 text-center">
              <i class="fas fa-medal fa-2x"></i>
            </div>
            <div>
                <h6 class="mb-0">6 Years job</h6>
                <p class="mb-0 text-primary">experience</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-4">
        <div class="container-fluid">
          <div class="row">
            <div class="badge p-2 mr-2 text-center">
              <i class="fas fa-medal fa-2x"></i>
            </div>
            <div>
                <h6 class="mb-0">6 Years job</h6>
                <p class="mb-0 text-primary">experience</p>
            </div>
          </div>
        </div>
      </div>


    </va-section>
    <div class="row justify-content-center text-start mx-0 m-4 p-2 box-bg-color rounded">

    </div>
  </div>
</template>

<script>

export default {
data() {
  return {
    aboutText : "I'm Vahid khroasani-nejad a Software develeloper and a 3+ years Robotic researcher.<br>I started to learn programming at 16 then i figured that i love creating applications, simplifying workflows and processes as well as creating integrations between various softwares and hardwares which gave me the idea of joining a robotic team.<br>So in this path i learned i can create software for any kind of device i want, i'm a fast-learner and self-driven person who loves to learn new things, so i Always looking for a challenge."
  }
},
computed: {
  styleVariables(){
    return this.$store.state.styles.variables;
  }
},
created(){

}
}
</script>

<style lang="scss" scoped>

.badge{
  display: inline-block;
  width:42px;
  height:42px;
  border-radius: 50%;
  border: 1px solid $primary;
  color: $va-menu-bg-color;
  h6{
    margin:0;
  }
}
.img-max {
  max-width: 340px;
  width:100%;
}
</style>
