<template lang="html">
  <div class="message-card">
    <p>Name: {{ message.name }}</p>
    <p>Age: {{ message.age }}</p>
    <p>Country: {{ message.country}}</p>
  </div>
</template>

<script>

export default {
  props: ['message']
}
</script>

<style lang="css" scoped>
</style>
