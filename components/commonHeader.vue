<template>
  <header class="h">
    <nuxt-link :to="{ path: '/' }" >
      <img src="~assets/logo.svg" alt="natural core care" class="h-l">
    </nuxt-link>
  </header>
</template>

<script>
  export default {
    name: "commonHeader"
  }
</script>

<style scoped lang="scss">
  .h{
    height: 70px;
    text-align: center;
    position: fixed;
    //position: fixed;
    width: 100%;
    &-l{
      text-align: center;
      height: 30px;
      margin: 20px auto;
    }
  }

</style>