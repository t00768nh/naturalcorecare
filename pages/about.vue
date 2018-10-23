<template>
  <section class="ta">
    <div class="ta-about_title">
      <img class="ta-about_titlesvg" src="~assets/img/aboutl.svg"/>
    </div>

    <img class="ta-about_photo" src="~assets/img/be.jpg"/>



      <div class="ta-mission">
        <img class="ta-mission_svg" src="~assets/img/mission.svg"/>

        <div class="ta-mission_title">日本の医療に２つ目の選択肢。</div>
        <div class="ta-mission_text">クリーンな心と肌をコアからケアすることで、
          自分らしさを取り戻し心にゆとりを持って生きていく。
          そんなあなたに家庭医学として自然療法を伝えたい。
          精油の力や香りの効果を知ってほしい。
          その思いから誕生したナチュラルコアケア協会。</div>
      </div>


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
  @import "../assets/mq.scss";


  .ta{
    background: linear-gradient(191.85deg, #F8D6B1 34.17%, #FDD9B5 58%);


  &-about{

    &_title{
      height: 380px;
      text-align: center;
      @include mq(mobile){
        height: 350px;
      }

    }
    &_titlesvg{
      margin: 0 auto;
      padding-top: 200px;
      @include mq(mobile){
        width: 220px;
      }

    }
    &_photo{
      width: 100%;
    }

   }

    &-mission{
      text-align: center;
      padding: 5% 26%;
      @include mq(mobile){
        padding: 4% 10%;
      }

      &_svg{
        width: 184px;
        @include mq(mobile){
          width: 130px;
          padding-top: 20px;
        }
      }

      &_title{
        font-weight: bold;
        color: #333333;
        padding:  3% 0;
        @include mq(mobile){
          padding: 4% 0;
        }


      }

      &_text{
        color: #4E5655;
        line-height: 2;
        letter-spacing: 1px;

      }
    }

  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.4s;
  }
  .fade-enter-to{
    background: linear-gradient(191.85deg, #F8D6B1 34.17%, #ECE1D6 58%);
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    background: white;

  }

</style>