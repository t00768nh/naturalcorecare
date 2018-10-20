<template>
  <header class="hh">
    <nuxt-link :to="{ path: '/' }" >
      <img src="~assets/img/logo.svg" alt="natural core care" class="hh-header_l">
    </nuxt-link>


    <img src="~assets/img/menu.png" alt="natural core care" class="hh-header_n" @click="$store.commit('toggleMenu')">


    <nav class="hh-nav" v-bind:class="{'open': $store.state.isMenuOpen}">
      <span  @click="$store.commit('toggleMenu')">x</span>

      <ul class="hh-nav_list">

        <li class="hh-nav_li">
          <nuxt-link :to="`/about`" class="hh-nav_link">
            ABOUT
          </nuxt-link>
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
  .hh{
    height: 70px;
    text-align: center;
    position: fixed;
    //position: fixed;
    width: 100%;
    z-index: 100;

    &-header {
      &_l {
        text-align: center;
        height: auto;
        margin: 20px auto;
        width: 300px;
      }
      &_n {
        width: 50px;
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
      }
    }


  }

</style>