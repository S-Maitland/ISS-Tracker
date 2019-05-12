<template lang="html">
  <div class="">
    <p>Input Form</p>
  </div>
</template>

<script>
export default {
  name: 'input-form',
  data () {
    return {
    countries:[]
    }
  },
  mounted(){
  fetch("https://restcountries.eu/rest/v2/all")
  .then(res => res.json())
  .then(countries => this.countries = countries)
  }
}
</script>

<style lang="css" scoped>
</style>
