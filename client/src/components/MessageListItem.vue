<template lang="html">
  <div class="message-card">
    <p><b>Name:</b> <span> {{ message.name }}</span</p>
    <p><b>Age:</b> <span> {{ message.age }}</span></p>
    <p><b>Country:</b> <span> {{ message.country}}</span></p>
    <img :src="message.flag">
    <p><b>Message:</b> <span> {{message.message}}</span></p>
  </div>
</template>

<script>

export default {
  props: ['message']
}
</script>

<style lang="css" scoped>
  .message-card {
    border: solid 1px blue;
    align-content: flex-start;
  }
  p {
    margin: 0;
  }
img {
  height: 10vh;
  width: 10vw;
}
</style>
