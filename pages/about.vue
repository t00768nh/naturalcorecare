<template>
  <section class="ta">
    <div class="ta-about_title">
      <img class="ta-about_titlesvg" src="~assets/img/aboutl.svg"/>
    </div>




    <img class="ta-about_photo" src="~assets/img/be.jpg"/>

  </section>
</template>

<script>
  export default {
    name: "about.vue",
    transition: 'fade',
    fetch ({store}) {
      store.dispatch('resetMenu');
    }

  }
</script>

<style lang="scss" scoped>

  .ta{


    background: linear-gradient(191.85deg, #F8D6B1 34.17%, #ECE1D6 58%);

    height: 100vh;

  &-about{

    &_title{
      height: 450px;
      text-align: center;

    }
    &_titlesvg{
      margin: 0 auto;
      padding-top: 200px;

    }
    &_photo{
      width: 100%;
    }

   }

  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
  }
  .fade-enter-to{
    background: linear-gradient(191.85deg, #F8D6B1 34.17%, #ECE1D6 58%);
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    background: white;

  }

</style>