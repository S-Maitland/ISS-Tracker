<template lang="html">
  <div id="list-container">
    <li>{{member.name}}</li>
  </div>
</template>

<script>
export default {
  name: 'modal-one-item',
  props: ['member'] ,
}
</script>

<style lang="css" scoped>
#list-container {
  /* display: flex; */
  /* justify-content: center; */
}
li {
  list-style-type: none;

}
</style>
