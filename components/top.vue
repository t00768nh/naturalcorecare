<template>
  <div class="tt">

  </div>
</template>

<script>

  export default {
    name: "top",
  }
</script>

<style  lang="scss" scoped>
  @import "../assets/mq.scss";

  .tt{
    background: url('~assets/img/top.jpg');

    width: 100vw;
  //height: 600px;
    display: block;
    height: 0;
    /* 表示画像の高さ ÷ 表示画像の幅 × 100 */
    padding-top: 63.04%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    @include mq(mobile){
     width: 100%;
      background: url('~assets/img/top-m.jpg');
      padding-top: 129%;
      background-size: cover;

    }
    @include mq(tablet){
      //min-height: 80vh;
      //height: 500px;
    }


}

</style>