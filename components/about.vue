<template>
  <section class="tt-about">
    <nuxt-link :to="`/about`" class="tt-about_link">
      <div class="tt-about_nav">
          <img class="tt-about_svg" src="~assets/img/about.svg"/>
      </div>
    </nuxt-link>

    <div class="tt-about_main">
      <div class="tt-about_mainTitle">日本の医療に２つ目の選択肢。</div>
      <div class="tt-about_mainText">クリーンな心と肌をコアからケアすることで、自分らしさを取り戻し心にゆとりを持って生きていく。そんなあなたに家庭医学として自然療法を伝えたい。精油の力や香りの効果を知ってほしい。その思いから誕生したナチュラルコアケア協会。</div>

    </div>


  </section>
</template>

<script>
  export default {
    name: "about",
  }
</script>

<style lang="scss" scoped>
  @import "../assets/mq.scss";
  @import url('https://fonts.googleapis.com/css?family=M+PLUS+1p');


  .tt{
    &-about{
      display: flex;
      height: 370px;
      background: #FAFDFB;
      @include mq(mobile){
        flex-wrap: wrap;
        height: auto;
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

      &_main{
        flex: 1 1 600px;
        background: #F2F2F2;
        padding: 0 10%;
        @include mq(mobile){
          padding: 0 0 6% 0;
          flex: 1 1 320px;
        }

      }
      &_mainTitle{
        font-family: 'M PLUS 1p', sans-serif;
        font-style: normal;
        font-weight: 600;
        line-height: 34px;
        font-size: 18px;
        text-align: center;
        color: #4E5655;
        padding: 10% 0 5% 0;

      }
      &_mainText{
        font-family: 'M PLUS 1p', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        text-align: center;
        letter-spacing: 1px;
        line-height: 2;
        color: #111;
        @include mq(mobile){
          font-size: 12px;
        }

      }
      &_link{
        display: block;
        flex: 0 0 100px;
        background: #FAFDFB;
        margin: auto;
        @include mq(mobile){
          height: 60px;
        }
      }
    }
  }


</style>