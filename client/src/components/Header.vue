<template lang="html">
  <div class="Header">
    <h1 id="header">{{text}}</h1>
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
