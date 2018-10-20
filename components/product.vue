<template>
  <section class="tt-product">
    <div class="tt-product_nav">
      <img class="tt-product_svg" src="~assets/img/product.svg"/>
    </div>

    <div class="tt-product_main">

      <section class="tt-product_card">
        <img class="tt-product_img" src="~assets/img/asagao.jpg"/>
        <span class="tt-product_text">asagao</span>
        <span class="tt-product_subText">人によって香りが変わるオーガニック香水</span>
      </section>

      <section class="tt-product_card">
        <img class="tt-product_img" src="~assets/img/aroma.jpg"/>
        <span class="tt-product_text">asagao aroma</span>
        <span class="tt-product_subText">パーソナルアロマテラピー</span>
      </section>
    </div>


  </section>
</template>

<script>
  export default {
    name: "product"
  }
</script>

<style lang="scss" scoped>
  @import "../assets/mq.scss";
  @import url('https://fonts.googleapis.com/css?family=M+PLUS+1p');


  .tt{
    &-product{
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
        flex: 0 0 360px;

      }

      &_img{
        width: 360px;
      }
      &_text{
        display: block;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        margin: 10px 0 5px 0;
        color: #000000;
      }
      &_subText{
        color: #A4A4A4;
        font-size: 12px;
      }

      &_main{
        flex: 1 1 600px;
        background: #F2F2F2;
        padding: 0 3%;
        flex-wrap: wrap;
        display: flex;
        justify-content: space-around;
        @include mq(mobile){
          padding: 0 0 6% 0;
          flex: 1 1 300px;
        }

      }
    }
  }


</style>