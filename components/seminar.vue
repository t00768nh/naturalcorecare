<template>
  <section class="tt-seminar">
    <div class="tt-seminar_nav">
      <img class="tt-seminar_svg" src="~assets/img/se.svg"/>
    </div>

    <div class="tt-seminar_main">

      <section class="tt-seminar_card">
        <img class="tt-seminar_img" src="~assets/img/se.jpg"/>
        <span class="tt-seminar_text">ローフード・リンパ・アロマ合宿</span>
      </section>
    </div>


  </section>
</template>

<script>
  export default {
    name: "seminar"
  }
</script>

<style lang="scss" scoped>
  @import "../assets/mq.scss";

  .tt{
    &-seminar{
      display: flex;
      height: 370px;
      background: #FAFDFB;
      @include mq(mobile){
        flex-wrap: wrap;
        //height: 60px;
      }

      &_nav{
        flex: 0 0 100px;
        background: #FAFDFB;
        margin: auto;
        @include mq(mobile){
          height: 60px;
        }
      }

      &_svg{
        @include mq(mobile){
          transform: rotate(90deg);
        }
      }
      &_card{

      }

      &_img{
        width: 360px;
      }
      &_text{
        display: block;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 3;
        color: #000000;



      }

      &_main{
        flex: 1 1 600px;
        background: #F2F2F2;
        padding: 2% 10% 0 0;
        @include mq(mobile){
          padding: 0 0 6% 0;
          flex: 1 1 300px;
        }

      }
    }
  }


</style>