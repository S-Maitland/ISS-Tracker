<template lang="html">
  <div class="message-card">
    <p><b>Name:</b> <span> {{ message.name }}</span</p>
    <p><b>Age:</b> <span> {{ message.age }}</span></p>
    <p><b>Country:</b> <span> {{ message.country}}</span></p>
    <img :src="message.flag">
    <p><b>Message:</b> <span> {{message.message}}</span></p>
    <p>{{this.formatTime()}}</p>
    <hr>
    <br>
    <br>

  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  props: ['message'],
  // data() {
  //   return {
  //     time: message.time
  //   }
  // }
  methods: {
    formatTime() {
      return dayjs(this.message.time).format('HH:mm ddd D MMM YYYY ZZ')
  }
}
}
</script>

<style lang="css" scoped>
  .message-card {
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
