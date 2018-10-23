<template>
  <header class="hh">

    <div class="hh-left">
      <nuxt-link :to="{ path: '/' }" >
        <img src="~assets/img/logo.svg" alt="natural core care" class="hh-header_l">
      </nuxt-link>
    </div>

    <div class="hh-right">
      <img src="~assets/img/menu.png" alt="natural core care" class="hh-header_n" @click="$store.commit('toggleMenu')">
    </div>


    <nav class="hh-nav" v-bind:class="{'open': $store.state.isMenuOpen}">

      <span class="hh-nav_close"  @click="$store.commit('toggleMenu')">x</span>

      <ul class="hh-nav_list">

        <li class="hh-nav_li">
          <nuxt-link :to="`/about`" class="hh-nav_link">
            ABOUT
          </nuxt-link>

          <a href="https://naturalcorecare.us19.list-manage.com/subscribe?u=a7673b6becc04bbf1198e3d10&id=2ae9d5456f" class="hh-nav_link">
            会員登録
          </a>
        </li>
      </ul>

    </nav>


  </header>
</template>

<script>
  export default {
    name: "commonHeader",
    data() {
      return {
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/mq.scss";

  .hh{
    height: 70px;
    text-align: center;
    position: fixed;
    display: flex;
    //position: fixed;
    width: 100%;
    z-index: 100;
    -webkit-tap-highlight-color:transparent;

    &-left{
      flex: 0 0 260px;
      padding: 20px 0 0 10%;
      @include mq(mobile){
        padding: 10px 0 0 0;
      }

    }
    &-right{
      flex: 1 1 100px;
      text-align: right;
      padding: 20px 10% 0 0;
      @include mq(mobile){
        padding: 15px 2% 0 0;
      }

    }

    &-header {
      &_l {
        text-align: center;
        height: auto;
        margin: 20px auto;
        width: 200px;
      }
      &_n {
        width: 50px;
        cursor: pointer;
      }
    }

    &-nav{
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 0;
      opacity: 0;
      background-color: #cccccc;
      transition: height 0s cubic-bezier(0.215, 0.61, 0.355, 1) 0.7s, opacity 0.5s ease 0s;
      overflow: hidden;
      z-index: 3000;
      line-height: 1;

      &.open{
        height: 100%;
        opacity: 1;
        transition: height 0.01s cubic-bezier(0.215, 0.61, 0.355, 1) 0s, opacity 0.6s ease 0.1s;
        overflow-scrolling: touch;
      }

      &_list{
        position: relative;
        margin-bottom: 60px;
        padding-bottom: 60px;
        font-size: 36px;
        padding-top: 150px;
      }

      &_li{
        margin-bottom: 44px;
        list-style: none;

      }
      &_link{
        margin-left: -0.2em;
        text-decoration: none;
        letter-spacing: 0.2em;
        color: white;
        display: block;
        padding: 20px 0;
        cursor: pointer;

      }
      &_close{
        font-size: 40px;
        color: white;
        display: block;
        text-align: right;
        padding: 20px 11% 0 0;
        @include mq(mobile){
          padding: 15px 5% 0 0;
        }

      }
    }


  }

</style>