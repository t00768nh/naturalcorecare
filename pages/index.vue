<template>
  <div class="container">
    <div>
      <top></top>
      <about></about>

      <seminar v-observe-visibility="visibilityChanged"></seminar>
      <product></product>


      <div class="icon-area" v-observe-visibility="visibilityChanged">
        <transition name="icon">
          <div v-show="isVisible" class="icon">🍣</div>

        </transition>
      </div>

    </div>
  </div>
</template>

<script>
import top from '~/components/top'
import about from '~/components/about'
import seminar from '~/components/seminar'
import product from '~/components/product'
import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)


export default {
  transition: 'fade',
  components: {
    top,
    about,
    seminar,
    product
  },
  fetch ({store}) {
    store.dispatch('resetMenu');
  },
  data() {
    return {
      isVisible: false,
      showt: true
    }
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      this.isVisible = isVisible
      console.log(entry)
    },
  }
}
</script>

<style lang="scss">
.container {
  //min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  background: white;

}
</style>

