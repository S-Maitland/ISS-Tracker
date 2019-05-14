<template lang="html">
  <div class="Header">
    <h1 id="header">{{text}}</h1>


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
  font-family: 'Russo One', sans-serif;
  letter-spacing: 0.1em;
  font-size: 3em
}


</style>
