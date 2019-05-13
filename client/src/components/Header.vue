<template lang="html">
  <div class="Header">
    <h1 id="header">{{text}}</h1>

    <div class="scenes scene-3">
    <div class="bg1"></div>
    <div class="bg2"></div>
</div>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style lang="css" scoped>
#header {
  text-align: center;
  /* position: fixed; */
}


</style>
